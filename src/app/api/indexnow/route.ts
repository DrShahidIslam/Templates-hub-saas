import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const sitemapUrl = process.env.NEXT_PUBLIC_APP_URL ? `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml` : "https://www.templateregistry.com/sitemap.xml";
    const sitemapRes = await fetch(sitemapUrl);
    if (!sitemapRes.ok) {
      throw new Error(`Failed to fetch sitemap: ${sitemapRes.status}`);
    }
    const sitemapText = await sitemapRes.text();

    const urlList: string[] = [];
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = regex.exec(sitemapText)) !== null) {
      urlList.push(match[1]);
    }

    // Limit Batch Size
    const cappedUrlList = urlList.slice(0, 9500);

    if (cappedUrlList.length === 0) {
      return NextResponse.json({ message: "No URLs found in sitemap to index." }, { status: 200 });
    }

    const payload = {
      host: "www.templateregistry.com",
      key: "templateregistry-key",
      keyLocation: "https://www.templateregistry.com/templateregistry-key.txt",
      urlList: cappedUrlList,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`IndexNow API error: ${response.status} ${response.statusText}`);
    }

    return NextResponse.json({ success: true, message: `Submitted ${cappedUrlList.length} URLs to IndexNow successfully.` }, { status: 200 });
  } catch (error) {
    console.error("IndexNow Ping Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

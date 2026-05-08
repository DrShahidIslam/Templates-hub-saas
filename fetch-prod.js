const urls = [
  'https://www.templateregistry.com/templates',
  'https://www.templateregistry.com/categories/business-hr'
];

async function check() {
  for (const url of urls) {
    const res = await fetch(url);
    const html = await res.text();
    const links = html.match(/href="\/templates\/[^"]+"/g) || [];
    console.log(`URL: ${url}`);
    console.log(`Template links count: ${links.length}`);
  }
}

check();

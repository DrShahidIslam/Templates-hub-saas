import { getDocuments } from "outstatic/server";

const docs = getDocuments("templates", ["title", "slug", "description", "category", "tags", "status"]);
console.log("Total templates:", docs.length);
if (docs.length > 0) {
  console.log("First template:", docs[0]);
} else {
  console.log("No templates found! Checking with fewer fields...");
  const docs2 = getDocuments("templates", ["title", "slug"]);
  console.log("Total templates with fewer fields:", docs2.length);
}

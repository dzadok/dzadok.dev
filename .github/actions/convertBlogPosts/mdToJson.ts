export default function mdToJson(md: string): string {
  const lines = md.split("\n");

  // Markdown title without the #
  const title = lines[0]?.substring(1);

  // Check if there was a blank line after the title
  const startOfContent = lines[1] === "" ? 2 : 1;

  const content = lines.slice(startOfContent, md.length).join("\n");
  return JSON.stringify({ title, content });
}

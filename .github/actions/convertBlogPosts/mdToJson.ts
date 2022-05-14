const TITLE_REGEXP = /^#[^#].*$/gm;

export default function mdToJson(md: string): string {
  const titles = md.split("\n").filter((x) => TITLE_REGEXP.test(x));
  const title = titles[0]?.substring(1);

  const content = md
    .split("\n")
    .filter((x) => !TITLE_REGEXP.test(x))
    .join("\n")
    .substring(1);

  return JSON.stringify({ title, content });
}

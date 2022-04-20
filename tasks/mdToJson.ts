const titleRegExp = /^\#[^\#].*$/gm;
const headerRegExp = /^\#\#[^\#].*$/gm;

export function mdToJson(md: string): Record<any, any> {
  const titles = md.split("\n").filter((x) => titleRegExp.test(x));
  const title = titles[0].substring(1);

  const rest = md.split("\n").filter((x) => !titleRegExp.test(x));

  const headers: string[] = [];
  const text: string[] = [];

  rest.forEach((x) => {
    if (headerRegExp.test(x)) {
      headers.push(x.substring(2));
      text.push("");
    } else {
      text[text.length - 1] = text[text.length - 1] + x;
    }
  });

  const content = headers.map((header, index) => {
    return { header, section: [{ text: text[index] }] };
  });
  console.log({ title, content });
  return { title, content };
}

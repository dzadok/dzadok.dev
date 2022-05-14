import convertBlogPost from "./convertBlogPost";
import * as fs from "node:fs";
import dayjs from "dayjs";

const MD_FILE_NAME = "./.20000101.md";
const MD_DATE = new Date("2000-01-01T00:00").toISOString();

beforeAll(() => {
  fs.writeFileSync(MD_FILE_NAME, "#Title\n\n##Heading\n\nContent\n");
});

afterAll(() => {
  fs.unlinkSync(MD_FILE_NAME);
});

describe("convert a blog post to json", () => {
  it("throws on a non-existent file", () => {
    expect(() => convertBlogPost("a")).rejects.toThrowError("ENOENT");
  });

  it("generates wellformed json", async () => {
    expect(async () => await convertBlogPost(MD_FILE_NAME)).not.toThrow();
  });

  it("inserts the date", async () => {
    expect((await convertBlogPost(MD_FILE_NAME)).date as dayjs.Dayjs).toEqual(
      MD_DATE
    );
  });

  it("has the right title", async () => {
    expect((await convertBlogPost(MD_FILE_NAME)).title as string).toEqual(
      "Title"
    );
  });

  it("has the right content", async () => {
    expect((await convertBlogPost(MD_FILE_NAME)).content as string).toEqual(
      "##Heading\n\nContent\n"
    );
  });
});

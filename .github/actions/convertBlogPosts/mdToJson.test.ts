import mdToJson from "./mdToJson";

const SIMPLE_MD = "#Title\n\n##Header\n\nPlainText";

describe("md to json", () => {
  it("extracts the title", () => {
    expect(JSON.parse(mdToJson(SIMPLE_MD)).title).toEqual("Title");
  });

  it("extracts the content", () => {
    expect(JSON.parse(mdToJson(SIMPLE_MD)).content).toEqual(
      "##Header\n\nPlainText"
    );
  });
});

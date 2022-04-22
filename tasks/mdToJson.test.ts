import mdToJson from "./mdToJson";

const SIMPLE_MD = "#Title\n\n##Header\n\nPlainText";

describe("md to json", () => {
  it("extracts the title", () => {
    expect(mdToJson(SIMPLE_MD).title).to.equal("Title");
  });

  it("extracts the content", () => {
    expect(mdToJson(SIMPLE_MD).content).to.equal("##Header\n\nPlainText");
  });
});

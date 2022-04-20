import type * as cypress from "cypress";
import { mdToJson } from "./mdToJson";

describe("md to json", () => {
  it("simple test", () => {
    expect(mdToJson("#Title\n\n##Header\n\nPlainText")).to.deep.equal({
      title: "Title",
      content: [
        {
          header: "Header",
          section: [
            {
              text: "PlainText",
            },
          ],
        },
      ],
    });
  });
});

import dayjs from "dayjs";
import addDate from "./addDate";

describe("addDate", () => {
  it("Adds the date", () => {
    expect(addDate({}, "20220101")).to.deep.equal({
      date: dayjs("20220101"),
    });
  });
});

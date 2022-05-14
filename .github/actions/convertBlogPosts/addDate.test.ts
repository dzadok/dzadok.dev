import Dayjs from "dayjs";
import addDate from "./addDate";

describe("addDate", () => {
  it.only("Adds the date", () => {
    expect(addDate("", "20220101")).toEqual({
      date: Dayjs("20220101"),
    });
  });
});

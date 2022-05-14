import Dayjs from "dayjs";
import addDate from "./addDate";

describe("addDate", () => {
  it.only("Adds the date", () => {
    expect(addDate("", "20220101")).toMatchObject({
      date: new Date("2022-01-01T00:00").toISOString(),
    });
  });
});

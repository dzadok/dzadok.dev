import * as dayjs from "dayjs";
import addDate from "./addDate";
describe("addDate", () => {
    it("Adds the date", () => {
        expect(addDate("", "20220101")).toEqual({
            date: dayjs("20220101"),
        });
    });
});

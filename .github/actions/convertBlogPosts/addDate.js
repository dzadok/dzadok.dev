import * as dayjs from "dayjs";
export default function addDate(json, date) {
    const jsonObj = json ? JSON.parse(json) : {};
    return { ...jsonObj, date: dayjs(date) };
}

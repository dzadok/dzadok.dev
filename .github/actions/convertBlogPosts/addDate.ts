import * as dayjs from "dayjs";

export default function addDate(
  json: string,
  date: string
): Record<string, any> {
  const jsonObj = json ? JSON.parse(json) : {};
  return { ...jsonObj, date: dayjs(date) };
}

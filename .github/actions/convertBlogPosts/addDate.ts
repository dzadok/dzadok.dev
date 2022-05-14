import Dayjs from "dayjs";

export default function addDate(
  json: string,
  date: string
): Record<string, any> {
  const jsonObj = json ? JSON.parse(json) : {};
  return { ...jsonObj, date: Dayjs(date).toISOString() };
}

import dayjs from "dayjs";

export default function addDate(obj: {}, date: string) {
  return { ...obj, date: dayjs(date) };
}

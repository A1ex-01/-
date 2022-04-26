import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss"
export function utcToTime(utcTime: string) {
  dayjs.extend(utc)
  return dayjs.utc(utcTime).utcOffset(8).format(DATE_TIME_FORMAT)
}

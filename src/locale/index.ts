import { createI18n } from "vue-i18n"
import zh from "./lang/zh"
import en from "./lang/en"
const messages = {
  zh,
  en
}
// 2. Create i18n instance with options
const i18n = createI18n({
  legacy: false,
  locale: "zh",
  messages: {
    zh,
    en
  } // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})
export default i18n

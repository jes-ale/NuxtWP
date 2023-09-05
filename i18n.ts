import en from '../locale/en.json'
import es from '../locale/es.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    es
  }
}))

import en from './locale/en.json'
import es from './locale/es.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'es',
  messages: {
    en,
    es
  }
}))

import { createI18n } from "vue-i18n";

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
/* eslint-disable */
//Load translations
function loadLocaleMessages() {
  const locales = require.context("./", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (!matched || matched.length <= 1) return
    const subMatched = key.match(/([A-Za-z0-9-_]+)\/([A-Za-z0-9-_]+)\./i)
    if (subMatched && subMatched.length > 1) {
      const sub = subMatched[1]
      const locale = subMatched[2]
      if (!messages[locale]) messages[locale] = {}
      messages[locale][sub] = locales(key)
    } else {
      const locale = matched[1]
      if (messages[locale]) messages[locale] = { ...messages[locale], ...locales(key) }
      else messages[locale] = locales(key)
    }
  });
  return messages;
}

//Get browser language
function getBrowserLocale(options = {}) {
  const defaultOptions = { countryCodeOnly: false }
  const opt = { ...defaultOptions, ...options }
  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language
  if (!navigatorLocale) {
    return undefined
  }
  const trimmedLocale = opt.countryCodeOnly
    ? navigatorLocale.trim().split(/-|_/)[0]
    : navigatorLocale.trim()
  return trimmedLocale
}

//Number formats
const numberFormats = {
  'de': {
    currency: {
      style: 'currency', currency: 'EUR'
    }
  },
  'en': {
    currency: {
      style: 'currency', currency: 'USD', currencySymbol: '$'
    }
  },
  'ch': {
    currency: {
      style: 'currency', currency: 'CHF'
    }
  }
}

export default createI18n({
  legacy: false,
  locale: getBrowserLocale({ countryCodeOnly: true }), //process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
  numberFormats
});

//Important docs for i18n: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-vue-app-with-vue-i18n

/*
  ZaDark – Best Dark Theme for Zalo
  Safari Extension
  Made by NCDAi Studio
*/

;(function (window) {
  window.zadark = window.zadark || {}

  window.zadark.browser = {
    name: 'Safari',

    initClassNames: () => {
      document.body.classList.add('zadark', 'zadark-browser-ext', 'zadark-safari')
    },

    getManifest: () => {
      return browser.runtime.getManifest()
    },

    getExtensionSettings: () => {
      return new Promise((resolve, reject) => {
        browser.storage.sync.get({
          themeMode: 'single',
          userTheme: 'dark_dimmed',
          darkTheme: 'dark_dimmed',
          isReceiveUpdateNoti: true
        }, (items) => {
          resolve(items)
        })
      })
    },

    saveExtensionSettings: (items) => {
      return browser.storage.sync.set(items)
    },

    executeScript: (tabId, file) => {
      browser.tabs.executeScript(tabId, { file })
    },

    getZaloTabs: async () => {
      const tabs = await browser.tabs.query({
        url: ['*://chat.zalo.me/*'],
        currentWindow: true
      })
      return tabs
    },

    createTab: ({ url }) => {
      browser.tabs.create({ url })
    }
  }
})(window)

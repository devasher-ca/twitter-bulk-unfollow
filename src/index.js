// ==UserScript==
// @name         Twitter(X) Bulk Unfollow (Modern)
// @namespace    http://tampermonkey.net/
// @version      2025-05-24
// @description  Automatically unfollow users on Twitter, supports English and Chinese UI. https://x.com/devasherarch
// @author       https://x.com/devasherarch
// @match        https://x.com/*/following
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  console.log('start')
  setTimeout(() => {
    let count = 0
    const interval = setInterval(() => {
      const buttons = document.querySelectorAll(
        'button[aria-label^="Following"], button[aria-label^="正在关注"]',
      )
      if (buttons.length === 0) {
        clearInterval(interval)
        alert(`Complete，removed ${count} followings`)
        return
      }
      const btn = buttons[0]
      btn.click()
      count++

      setTimeout(() => {
        const confirm = document.querySelector(
          'button[data-testid="confirmationSheetConfirm"]',
        )
        if (confirm) confirm.click()
      }, 500)
    }, 2000)
  }, 5000)
})()

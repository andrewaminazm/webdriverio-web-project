const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://www.google.com/')

         await $('.gLFyf').click()
        await $('.gLFyf').setValue('tomsmith')
        await browser.keys('Enter');

    await browser.pause(3000);

    await browser.closeWindow();
      
    })
})


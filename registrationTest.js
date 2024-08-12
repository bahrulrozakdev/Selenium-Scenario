const {Builder, By, Until, until} = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')


async function loginTest(){
    let driver = await new Builder().forBrowser("chrome").build()

    try{
        await driver.get('http://localhost:8000/register')

        await driver.findElement(By.name('name')).sendKeys('bahrul')
        await driver.findElement(By.name('email')).sendKeys('bahrulrozak@codepolitan.com')
        await driver.findElement(By.name('password')).sendKeys('password')
        await driver.findElement(By.name('password_confirmation')).sendKeys('password')

        await driver.findElement(By.css('button[type="submit"]')).click()

        await driver.wait(until.urlIs('http://localhost:8080/dashboard'), 5000)

        let dashboardText = await driver.findElement(By.tagName('h1')).getText()

        if(dashboardText === 'Dashboard'){
            console.log('Pendaftaran Berhasil Bro...')
        }else{
            console.log('Pendaftarn Gagal Bro...')
        }
    }finally{
        await driver.quit()
    }
}

loginTest()
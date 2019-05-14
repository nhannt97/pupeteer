const puppeteer = require('puppeteer')
let num = 0
async function init(){
    let browser = await puppeteer.launch();
    async function test() {
        let page = await browser.newPage();
        page.goto('http://localhost:3000');
        console.log(++num)
    }
    for(let i=1;  i<=200; i++) test()
}
for(let j=1; j<=2; j++)
init()
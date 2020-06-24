const login = require("./login");
const {expect} = require('chai')

describe('Create Day Report', () => {
    before(() => {
        login();
    })
    it('click on diary on main manu', function () {
        $("//div[@id='site-menu']//a[@qa='diary-link']").click()
    });
    it('should have correct title', function () {
        const actualTitle = $("//h1").getText()
        expect(actualTitle).eq('Daily reports')

    });
    it('Button create report is clickable ', function () {
        browser.pause(2000)
        const button = $("//a[@qa='create-day-report-button']").isClickable()
        expect(button).eq(true)

    });
    it('should click on day report button', function () {
        $("//a[@qa='create-day-report-button']").click()

    });

    it('should click I UNDERSTOOD EVERYTHING', function () {
        const elem = $("//label[@for='input-1']");
        elem.click();
        const res = $("//input[@id='input-1']");
        expect(res.isSelected()).true;

    });


    it('should click on check box Helped classmates', function () {
        const elem = $("//label[@for='input-2']");
        elem.click();
        const res = $("//input[@id='input-2']");
        expect(res.isSelected()).true;
        browser.pause(2000)
    });

});

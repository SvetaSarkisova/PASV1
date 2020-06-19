const {expect} = require('chai')

describe('REGISTRATION PAGE', ()=>{
    before( ()=>{
        browser.maximizeWindow();
        browser.url('https://app.pasv.us/user/register\n');
    })
    it('should verify if title is correct', function () {
        const actualText = $("//h1").getText()
        const expectedText = 'User Register';
        expect(actualText).eq(expectedText)

    });


    it('should fill out first name field', function () {
        const field = $('[name="firstName"]');
        field.setValue('Sveta')
    });

    it('should fill out last name field', function () {
        const field = $('[name="lastName"]')
        field.setValue('Happy')
    });

    it('should input first name in field', function () {
        const text = $('[name="firstName"]')
        browser.keys('Tab')
        const result = text.getAttribute('class')
        expect(result).contains('is-valid')

    });

    it('should input last name in field', function () {
        const text = $('[name="lastName"]')
        browser.keys('Tab')
        const result = text.getAttribute('class')
        expect(result).contains('is-valid')

    });

    it('should fill email field ', function () {
        const inputLastName = $('//input[@name="email"]');
        inputLastName.setValue('sarkisova@gmail.com');
    });

    it('should input email is valid ', function () {
        const inputFirstName = $('//input[@name="email"]');
        browser.keys('Tab')
        const result = inputFirstName.getAttribute('class');
        expect(result).contains('is-valid')
    });

    it('should fill out password field ', function () {
        const inputPasswors = $('//input[@name="password"]');
        inputPasswors.setValue('12132424');
    });
    it('should input password is valid ', function () {
        const inputFirstName = $('//input[@name="password"]');
        browser.keys('Tab')
        const result = inputFirstName.getAttribute('class');
        expect(result).contains('is-valid')
    });

    it('should submin button is not clickable', function () {
        const submitButton = $('[type="submit"]').isClickable()
        expect(submitButton).eq(true)

    });
})
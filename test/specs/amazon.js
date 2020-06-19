// describe('Register Page',()=>{
//
//     it('should title in Amazon Register', function () {
//         browser.url('https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&')
//         const text = browser.getTitle()
//         expect(text).toEqual('Amazon Registration')
//     });
//     it('should verify Create Account header is present', function () {
//         const createAccount = $$('.a-spacing-small')[0].isDisplayed()
//         expect(createAccount).toEqual(true)
//     });
//
//     it('should verify header text Create Account  ', function () {
//         const text = $$('.a-spacing-small')[0].getText()
//         expect(text).toEqual('Create account')
//
//     });
//
//     it('should input name in your name field', function () {
//         const yourName = $('[id="ap_customer_name"]');
//         yourName.setValue('Sveta Happy')
//         browser.pause(1000)
//         const textName = yourName.getValue()
//         expect(textName).toEqual('Sveta Happy')
//
//     });
//     it('should verify email field is  present', function () {
//         const eField = $('[id="ap_email"]').isDisplayed()
//         const email = $("//label[@for='ap_email']").isDisplayed()
//         expect(eField).toEqual(true)
//         expect(email).toEqual(true)
//
//     });
//
//     it('should verify that email filed text = Email', function () {
//         const text = $("//label[@for='ap_email']").getText()
//         expect(text).toEqual('Email')
//
//     });
//
//     it('should veirify that user can input email in email field', function () {
//         const email = $('[id="ap_email"]');
//         const inputEmail = email.setValue('happy@gmail.com');
//         const  text = email.getValue()
//         expect(text).toEqual('happy@gmail.com')
//
//     });
//     it('should verify password label is correct', function () {
//         const password = $('[for="ap_password"]').getText()
//         expect(password).toEqual('Password')
//
//     });
//
//     it('should verify user can input password in password field ', function () {
//         const field = $("//input[@id='ap_password']")
//         const password = field.setValue('12345')
//         const text = field.getValue()
//         expect(text).toEqual('12345')
//
//
//     });
//
//     it('should verify i button is present', function () {
//         const button = $$('[class="a-alert-content"]')[7].isDisplayed();
//         expect(button).toEqual(true)
//
//     });
//
// });
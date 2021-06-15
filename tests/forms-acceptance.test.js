import FormPage from "../page-objects/pages/FormPage"
import SuccessPage from "../page-objects/pages/SuccessPage"

const formPage = new FormPage()
const successPage = new SuccessPage()

fixture `Acceptance Tests for the Forms product`
    .page `https://forms.liferay.com/web/forms/shared/-/form/122548`

test('Submit form successfully', async t => {
    await formPage.setName('Test')
    
    await formPage.setBirthDate('03/17/1992')
    
    await formPage.setReason('My reason is private')

    await formPage.clickSubmitButton()

    await successPage.assertSuccessAlert()
    
    await successPage.assertSuccessMessage('Information sent successfully!')
})

test('Submit form with empty required fields', async t => {
    await formPage.setName(' ')
    
    await formPage.setBirthDate(' ')
    
    await formPage.setReason(' ')

    await formPage.clickSubmitButton()
    
    await formPage.assertNameRequiredErrorMessage()
  
    await formPage.assertBirthDateRequiredErrorMessage()
  
    await formPage.assertReasonRequiredErrorMessage()
})
import { Selector, t } from "testcafe"

class FormPage {
    constructor() {
        this.inputName = Selector('.ddm-field-text')
            .parent('div')
            .withAttribute('data-field-name', 'WhatIsYourName')
        
        this.inputBirthDate = Selector('.date-picker')

        this.inputReasonToJoin = Selector('.ddm-field-text')
            .parent('div')
            .withAttribute('data-field-name', 'WhyDidYouJoinTheTestingArea')

        this.buttonSubmit = Selector('#ddm-form-submit')

        this.requiredErrorMessageName = Selector('.form-feedback-item')
            .parent('div')
            .withAttribute('data-field-name', 'WhatIsYourName')

        this.requiredErrorMessageBirthDate = Selector('.form-feedback-item')
            .parent('div')
            .withAttribute('data-field-name', 'WhatIsTheDateOfYourBirth')

        this.requiredErrorMessageReason = Selector('.form-feedback-item')
            .parent('div')
            .withAttribute('data-field-name', 'WhyDidYouJoinTheTestingArea')
    }

    async setName(name){
        await t
            .typeText(this.inputName, name, {paste: true, replace: true})
    }

    async setBirthDate(date){
        await t
            .typeText(this.inputBirthDate, date, {paste: true, replace: true})
    }

    async setReason(reason){
        await t
            .typeText(this.inputReasonToJoin, reason, {paste: true, replace: true})
    }

    async clickSubmitButton(){
        await t
            .click(this.buttonSubmit)
    }

    async assertNameRequiredErrorMessage(){
        await t
            .expect(this.requiredErrorMessageName.exists).ok()
    }

    async assertBirthDateRequiredErrorMessage(){
        await t
            .expect(this.requiredErrorMessageBirthDate.exists).ok()
    }

    async assertReasonRequiredErrorMessage(){
        await t
            .expect(this.requiredErrorMessageReason.exists).ok()
    }
}

export default FormPage
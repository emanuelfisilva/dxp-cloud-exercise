import { Selector, t } from "testcafe"

class SuccessPage {
    constructor() {
        this.successMessage = Selector('.ddm-form-description')
        
        this.successAlert = Selector('.alert-success')
    }

    async assertSuccessMessage(text){
        await t
            .expect(this.successMessage.innerText)
            .contains(text)
    }

    async assertSuccessAlert(text){
        await t
            .expect(this.successAlert.exists).ok();
    }
}

export default SuccessPage
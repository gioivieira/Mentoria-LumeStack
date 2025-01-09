export class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateCloseButton: ".--close",
            genericSelectField: ".oxd-select-text-input",
            genericSubmitButton: "[type='submit']",
            marriedOption: ":nth-child(3) > span",
            sucessAlert: ".oxd-toast"
        }

        return selectors
    }
}
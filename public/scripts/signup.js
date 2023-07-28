"use strict";
const signUpInputFields = [
    {
        selector: document.querySelector('#firstNameInput'),
        message: 'Please type a 3 or more letter name with no special characters.',
        regex: /^[a-zA-Z]{3,}$/,
        validationContainer: document.querySelector('#validationMsgFirstName'),
        isValid: false,
    },
    {
        selector: document.querySelector('#lastNameInput'),
        message: 'Please type a 3 or more letter name with no special characters.',
        regex: /^[a-zA-Z]{3,}$/,
        validationContainer: document.querySelector('#validationMsgLastName'),
        isValid: false,
    },
    {
        selector: document.querySelector('#emailInput'),
        message: "Please include an '@'and an '.' in the email address.",
        regex: /^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/,
        validationContainer: document.querySelector('#validationMsgEmail'),
        isValid: false,
    },
    {
        selector: document.querySelector('#hiddenInput'),
        message: "Invalid: please type 1 , 2, or 3",
        regex: /^(1|2|3)$/,
        validationContainer: document.querySelector('#hiddenInputValidationMsg'),
        isValid: false,
    },
];
signUpInputFields.forEach(inputField => {
    inputField.selector?.addEventListener('blur', () => {
        if (!(inputField.selector && inputField.validationContainer)) {
            return;
        }
        inputField.isValid = inputField.regex.test((inputField.selector.value));
        showValidationMsg(inputField.validationContainer, inputField.message, inputField.isValid);
    });
});
const serviceDropDownMenu = document.querySelector('#serviceDropDownMenu');
let dropDownChoiceDisplayed = false;
serviceDropDownMenu?.addEventListener('change', () => {
    dropDownChoiceDisplayed = serviceDropDownMenu.value === "fitness" ? true : false;
    renderDropDownMenuChoice(dropDownChoiceDisplayed);
});
const submitButton = document.querySelector('#submitButton');
submitButton?.addEventListener('click', () => {
    submitForm();
    closeModal();
});
const showValidationMsg = (validationContainer, message, isValid) => {
    if (isValid) {
        validationContainer.style.color = 'green';
        validationContainer.innerHTML = '&#10003;';
    }
    else {
        validationContainer.style.color = 'red';
        validationContainer.innerHTML = message;
    }
};
const renderDropDownMenuChoice = (isDisplayed) => {
    const hiddenInputContainer = document.querySelector("#hiddenInputContainer");
    if (isDisplayed) {
        const hiddenInputLabel = document.querySelector("#hiddenInputLabel");
        if (hiddenInputLabel && hiddenInputContainer) {
            hiddenInputLabel.innerHTML = 'In what specific category are you interested in:' + '<br>' + '1.Bodybuilding, 2.Crossfit or 3.Running?' + '<br>' + 'Type 1 2 or 3 respectively:';
            hiddenInputContainer.style.display = 'unset';
        }
    }
    else {
        const hiddenInput = document.querySelector("#hiddenInput");
        if (hiddenInputContainer && hiddenInput) {
            hiddenInputContainer.style.display = 'none';
            hiddenInput.value = "";
        }
    }
};
const submitForm = () => {
    const modal = document.querySelector("#myModal");
    const modalText = document.querySelector('#modalText');
    if (!(modal && modalText)) {
        return;
    }
    modal.style.display = "block";
    const form = document.querySelector("#form");
    const formField = form?.elements;
    if (!formField) {
        return;
    }
    let str = '';
    if (!(signUpInputFields[0].isValid && signUpInputFields[1].isValid && signUpInputFields[2].isValid)) {
        modalText.innerHTML = "All inputs must be valid please try again!!!";
    }
    else if (!signUpInputFields[3].isValid && dropDownChoiceDisplayed) {
        modalText.innerHTML = "Please choose one fitness category (1 ,2 or 3)";
    }
    else {
        form.submit();
        //     for (let i = 0; i < formField.length-1; i++)
        //     {   const formFieldInput  =  formField[i] as HTMLInputElement ;
        //         let value = formFieldInput.value ;
        //         let doNotShow = value === "";
        //         if((formFieldInput.type ==='radio' || formFieldInput.type === 'checkbox') && !formFieldInput.checked )
        //         {
        //             doNotShow = true
        //         }
        //         str+= (doNotShow? "" : `${(formFieldInput).name}: ${value} <br>`);
        //     }
        //         modalText.innerHTML = `Your choices are: <br> ${str} `;
    }
};
const closeModal = () => {
    const modal = document.querySelector("#myModal");
    const modalCloseButton = document.querySelector('.close');
    if (!(modal && modalCloseButton)) {
        return;
    }
    modalCloseButton.onclick = () => modal.style.display = "none";
    window.onclick = event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        ;
    };
};

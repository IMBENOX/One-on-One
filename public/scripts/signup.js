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
    inputField.selector?.addEventListener('blur', event => {
        inputField.isValid = inputField.regex.test((inputField.selector?.value));
        showValidationMsg(inputField.validationContainer, inputField.message, inputField.isValid);
    });
});
const serviceDropDownMenu = document.querySelector('#serviceDropDownMenu');
let dropDownChoiceDisplayed = false;
serviceDropDownMenu?.addEventListener('change', (event) => {
    dropDownChoiceDisplayed = serviceDropDownMenu.value === "Fitness" ? true : false;
    renderDropDownMenuChoice(dropDownChoiceDisplayed);
});
const submitButton = document.querySelector('#submitButton');
submitButton?.addEventListener('click', () => {
    renderModal();
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
    return isValid;
};
const renderDropDownMenuChoice = (isDisplayed) => {
    const hiddenInputContainer = document.querySelector("#hiddenInputContainer");
    if (isDisplayed) {
        const hiddenInputLabel = document.querySelector("#hiddenInputLabel");
        hiddenInputLabel.innerHTML = 'In what specific category are you interested in:' + '<br>' + '1.Bodybuilding, 2.Crossfit or 3.Running?' + '<br>' + 'Type 1 2 or 3 respectively:';
        hiddenInputContainer.style.display = 'unset';
    }
    else {
        const hiddenInput = document.querySelector("#hiddenInput");
        hiddenInputContainer.style.display = 'none';
        hiddenInput.value = "";
    }
};
const renderModal = () => {
    const modal = document.querySelector("#myModal");
    const modalText = document.querySelector('#modalText');
    modal.style.display = "block";
    const form = document.querySelector("#form");
    const formField = form.elements;
    let str = '';
    if ((signUpInputFields[0].isValid && signUpInputFields[1].isValid && signUpInputFields[2].isValid) === false) {
        modalText.innerHTML = "All inputs must be valid please try again!!!";
    }
    else if (signUpInputFields[3].isValid === false && dropDownChoiceDisplayed === true) {
        modalText.innerHTML = "Please choose one fitness category (1 ,2 or 3)";
    }
    else {
        for (let i = 0; i < formField.length - 1; i++) {
            let value = formField[i].value;
            let doNotShow = value === "";
            if ((formField[i].type === 'radio' || formField[i].type === 'checkbox') && formField[i].checked === false) {
                doNotShow = true;
            }
            str += (doNotShow ? "" : `${formField[i].name}: ${value} <br>`);
        }
        modalText.innerHTML = `Your choices are: <br> ${str} `;
    }
};
const closeModal = () => {
    const modal = document.querySelector("#myModal");
    const modalCloseButton = document.querySelector('.close');
    modalCloseButton.onclick = () => modal.style.display = "none";
    window.onclick = event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        ;
    };
};

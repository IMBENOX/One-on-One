"use strict";
const signInInputFields = [
    {
        selector: document.querySelector('#username'),
        isValid: false,
    },
    {
        selector: document.querySelector('#password'),
        isValid: false,
    },
];
signInInputFields.forEach(inputField => {
    var _a;
    (_a = inputField.selector) === null || _a === void 0 ? void 0 : _a.addEventListener('blur', () => {
        var _a;
        if ((_a = inputField.selector) === null || _a === void 0 ? void 0 : _a.value) {
            inputField.isValid = true;
        }
        ;
    });
});
const submitButtonIn = document.querySelector('#submitButton');
submitButtonIn === null || submitButtonIn === void 0 ? void 0 : submitButtonIn.addEventListener('click', () => {
    submitFormIn();
    closeModalIn();
});
const submitFormIn = () => {
    const modal = document.querySelector("#myModal");
    const modalText = document.querySelector('#modalText');
    if (!(modal && modalText)) {
        return;
    }
    modal.style.display = "block";
    const form = document.querySelector("#form");
    const formField = form === null || form === void 0 ? void 0 : form.elements;
    if (!formField) {
        return;
    }
    let str = '';
    if (!(signInInputFields[0].isValid && signInInputFields[1].isValid)) {
        modalText.innerHTML = "Please give a Username and a Password";
    }
    else {
        modal.style.display = "none";
        form.submit();
        form.reset();
    }
};
const closeModalIn = () => {
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

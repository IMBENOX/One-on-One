
const firstNameInput = document.querySelector('#firstNameInput')
let validationResultFirstName = false;
firstNameInput.addEventListener('blur',(event) => {
    let validationMsgFirstName = document.querySelector('#validationMsgFirstName');
    validationResultFirstName  = nameValidation(validationMsgFirstName,event.target)
})

const lastNameInput = document.querySelector('#lastNameInput')
let validationResultLastName = false;
lastNameInput.addEventListener('blur',(event) => {
    let validationMsgLastName = document.querySelector('#validationMsgLastName');
    validationResultLastName = nameValidation(validationMsgLastName,event.target)
})

const emailInput = document.querySelector('#emailInput')
let validationResultEmail = false;
emailInput.addEventListener('blur',(event) => {
    validationResultEmail = emailValidation(event.target)
})

const hiddenInput = document.querySelector('#hiddenInput')
let validationResultHiddenInput = false;
hiddenInput.addEventListener('blur',(event) => {
    validationResultHiddenInput = hiddenInputValidation(event.target)
})

const serviceDropDownMenu = document.querySelector('#serviceDropDownMenu')
let dropDownChoiceDesplayed = false;
serviceDropDownMenu.addEventListener('change',(event) => {
    dropDownChoiceDesplayed = renderDropDownMenuChoice(event.target)
})

const modal = document.querySelector("#myModal");
const submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click',() => {
   renderModal();
   closeModal();
})


const nameValidation = (validationMsg,nameInput) => {
    const regex = /^[a-zA-Z]{3,}$/
    let validationResult = regex.test(nameInput.value);
    if(validationResult){
        validationMsg.style.color = 'green';
        validationMsg.innerHTML   = '&#10003;';
        return validationResult;
    } else {
        validationMsg.style.color = 'red';
        validationMsg.innerHTML   = 'Please type a 3 or more letter name with no special characters.';
        return validationResult;
    }
}
const emailValidation = (emailInput) => {
    let validationMsg = document.querySelector('#validationMsgEmail');
    const regex = /^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/ 
    let validationResult = regex.test(emailInput.value);
    if(validationResult){
        validationMsg.style.color = 'green';
        validationMsg.innerHTML   = '&#10003;'
        return validationResult;
    } else {
        validationMsg.style.color = 'red';
        validationMsg.innerHTML   = "Please include an '@'and an '.' in the email address.";
        return validationResult;
    }
}
const hiddenInputValidation = (hiddenInput) => {
    let validationMsg = document.querySelector('#hiddenInputValidationMsg');
    const regex = /^(1|2|3)$/
    let validationResult = regex.test(hiddenInput.value);
    if(validationResult){
        validationMsg.style.color = 'green';
        validationMsg.innerHTML   = '&#10003;';
        return validationResult;
    } else {
        validationMsg.style.color = 'red';
        validationMsg.innerHTML   = 'Invalid: please type 1 , 2, or 3'
        return validationResult;
    }
}


 const renderDropDownMenuChoice = (serviceDropDownMenu) =>{
    if(serviceDropDownMenu.value === "Fitness"){
        let hiddenInputContainer = document.querySelector("#hiddenInputContainer");
        let hiddenInputLabel = document.querySelector("#hiddenInputLabel");
        hiddenInputLabel.innerHTML = 'In what specific category are you interested in:'+ '<br>' +'1.Bodybuilding, 2.Crossfit or 3.Running?'+'<br>'+ 'Type 1 2 or 3 respectively:';
        hiddenInputContainer.style.display = 'unset';
        return true;
    } else {
        hiddenInputContainer.style.display = 'none';
        document.querySelector("#hiddenInput").value = "";
        return false;
    }
 }
const renderModal = () => {
    modal.style.display ="block";
    let formField = document.querySelector("#form").elements;
    let str = '';
    if( (validationResultFirstName && validationResultLastName && validationResultEmail) === false ){modalText.innerHTML = "All inputs must be valid please try again!!!";}
    else if( validationResultHiddenInput === false && dropDownChoiceDesplayed === true) {modalText.innerHTML = "Please choose one fitness category (1 ,2 or 3)";}
    else{for (let i = 0; i < formField.length-1; i++) {
            let value = formField[i].value;
            let doNotShow = value === "";
            if((formField[i].type ==='radio' || formField[i].type === 'checkbox') && formField[i].checked === false ){doNotShow = true}
            str+= (doNotShow? "" : `${formField[i].name}: ${value} <br>`);}
            modalText.innerHTML = `Your choices are: <br> ${str} `;
        }
}

const closeModal = () => {
    let modalCloseButton = document.querySelector('.close');
    modalCloseButton.onclick = () => modal.style.display = "none";
    window.onclick = event => { if (event.target === modal) {modal.style.display = "none"};}
}
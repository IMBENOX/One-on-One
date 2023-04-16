const firstNameInput = document.querySelector('#firstNameInput')
let validationResultFirstName = false;
firstNameInput.addEventListener('blur',(event) => {
    let validationContainerFirstName = document.querySelector('#validationMsgFirstName');
    const firstNameMessage     = 'Please type a 3 or more letter name with no special characters.';
    const firstNameRegex       = /^[a-zA-Z]{3,}$/;
    validationResultFirstName  = validation(validationContainerFirstName,firstNameMessage,event.target,firstNameRegex)
})

const lastNameInput = document.querySelector('#lastNameInput')
let validationResultLastName = false;
lastNameInput.addEventListener('blur',(event) => {
    let validationContainerLastName = document.querySelector('#validationMsgLastName');
    const lastNameMessage     = 'Please type a 3 or more letter name with no special characters.';
    const lastNameRegex       = /^[a-zA-Z]{3,}$/;
    validationResultLastName  = validation(validationContainerLastName,lastNameMessage,event.target,lastNameRegex)
})

const emailInput = document.querySelector('#emailInput')
let validationResultEmail = false;
emailInput.addEventListener('blur',(event) => {
    let   validationContainerEmail  = document.querySelector('#validationMsgEmail');
    const emailMessage        = "Please include an '@'and an '.' in the email address.";
    const emailRegex          = /^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/;
    validationResultEmail     = validation(validationContainerEmail,emailMessage,event.target,emailRegex)
})

const hiddenInput = document.querySelector('#hiddenInput')
let validationResultHiddenInput = false;
hiddenInput.addEventListener('blur',(event) => {
    let   validationContainerHiddenInput = document.querySelector('#hiddenInputValidationMsg');
    const hiddenInputMessage       = "Invalid: please type 1 , 2, or 3";
    const hiddenInputRegex         = /^(1|2|3)$/;
    validationResultHiddenInput = validation(validationContainerHiddenInput,hiddenInputMessage,event.target,hiddenInputRegex)
})

const serviceDropDownMenu = document.querySelector('#serviceDropDownMenu')
let dropDownChoiceDesplayed = false;
serviceDropDownMenu.addEventListener('change',(event) => {
    dropDownChoiceDesplayed = renderDropDownMenuChoice(event.target)
})

const modal = document.querySelector("#myModal");
const modalText = document.querySelector('#modalText');
const submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click',() => {
   renderModal();
   closeModal();
})

const validation = (validationContainer, message, inputType, regex) => {
    let validationResult = regex.test(inputType.value);
    if(validationResult){
        validationContainer.style.color = 'green';
        validationContainer.innerHTML   = '&#10003;';
        return validationResult;
    }
    else {
        validationContainer.style.color = 'red';
        validationContainer.innerHTML   = message;
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
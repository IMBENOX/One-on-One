const firstNameInput         = document.querySelector('#firstNameInput')
const lastNameInput          = document.querySelector('#lastNameInput')
const emailInput             = document.querySelector('#emailInput')
const hiddenInput            = document.querySelector('#hiddenInput')
const serviceDropDownMenu    = document.querySelector('#serviceDropDownMenu')
const modal                  = document.querySelector("#myModal");


let validationResultFirstName   = false;
let validationResultLastName    = false;
let validationResultEmail       = false;
let validationResultHiddenInput = false;
let DropDownChoiceDesplayed     = false;

firstNameInput.addEventListener('blur',function () {
    let validationMsgFirstName = document.querySelector('#validationMsgFirstName');
    validationResultFirstName  = nameValidation(validationMsgFirstName,this)
})
lastNameInput.addEventListener('blur',function() {
    let validationMsgLastName = document.querySelector('#validationMsgLastName');
    validationResultLastName = nameValidation(validationMsgLastName,this)
})
emailInput.addEventListener('blur',function() {
    validationResultEmail = emailValidation(this)
})
hiddenInput.addEventListener('blur',function() {
    validationResultHiddenInput = hiddenInputValidation(this)
})
serviceDropDownMenu.addEventListener('change',function(){
    DropDownChoiceDesplayed = renderDropDownMenuChoice(this)
})
const submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click',function(){
   renderModal();
   closeModal();
})

const nameValidation = (validationMsg,NameInput) => {
    regex = /^[a-zA-Z]{3,}$/
    let validationResult = regex.test(NameInput.value);
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
    regex = /^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/ 
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
    regex = /^(1|2|3)$/
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
    if(serviceDropDownMenu.value == "Fitness"){
        let hiddenInputContainer    = document.querySelector("#hiddenInputContainer");
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
    let formInput = document.querySelector("#form").elements;
    let str = '';
    if( (validationResultFirstName && validationResultLastName && validationResultEmail) === false ){modalText.innerHTML = "All inputs must be valid please try again!!!";}
    else if( validationResultHiddenInput === false && DropDownChoiceDesplayed === true) {modalText.innerHTML = "Please choose one fitness category (1 ,2 or 3)";}
    else{
        for (let i = 0; i < formInput.length-1; i++) {
            let name = formInput[i].name;
            let value = formInput[i].value;
            let ischecked = formInput[i].checked;
            condition = value === "";
            if((name ==='Gender' || name === 'Sent-Info') && ischecked === false ){condition = true}
            str+= (condition? "" : `${name}: ${value} <br>`);
            }
            modalText.innerHTML = `Your choices are: <br> ${str} `;
        }
}

const closeModal = () => {
    let modalCloseButton = document.querySelector('.close');
    modalCloseButton.onclick =function() { modal.style.display = "none"};
    window.onclick = event => {  if (event.target == modal) {modal.style.display = "none"};}
}
const firstNameInput         = document.querySelector('#firstNameInput')
const lastNameInput          = document.querySelector('#lastNameInput')
const emailInput             = document.querySelector('#emailInput')
const hiddenInput       = document.querySelector('#hiddenInput')
const serviceDropDownMenu = document.querySelector('#serviceDropDownMenu')

let valFname  = 0;
let valLname  = 0;
let valEmail  = 0;
let valSelect = 0;

firstNameInput.addEventListener('blur',function () {
    let validationMsgFirstName = document.querySelector('#validationMsgFirstName');
     valFname = nameValidation(validationMsgFirstName,this)
})
lastNameInput.addEventListener('blur',function() {
    let validationMsgLastName = document.querySelector('#validationMsgLastName');
    valLname = nameValidation(validationMsgLastName,this)
})
emailInput.addEventListener('blur',function() {
    let validationMsgEmail = document.querySelector('#validationMsgEmail');
    valEmail = emailValidation(validationMsgEmail,this)
})
hiddenInput.addEventListener('blur',function() {
    let hiddenInputValidationMsg = document.querySelector('#hiddenInputValidationMsg');
    valSelect = hiddenInputValidation(hiddenInputValidationMsg,this)
})

const nameValidation = (validationMsg,lastNameInput) => {
    regex = /^[a-zA-Z]{3,}$/
    validationResult = regex.test(lastNameInput.value);
    if(validationResult){
        validationMsg.style.color = 'green';
        validationMsg.innerHTML = '&#10003;';
        return 1;
    } else {
        validationMsg.style.color = 'red';
        validationMsg.innerHTML = 'Please type a 3 or more letter name with no special characters.';
        return 0;
    }
}

const emailValidation = (validationMsg,emailInput) => {
    regex = /^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/ 
    validationResult = regex.test(emailInput.value);
    if(validationResult){
        validationMsg.style.color = 'green';
        validationMsg.innerHTML = '&#10003;'
        return 1;
    } else {
        validationMsg.style.color = 'red';
        validationMsg.innerHTML   = "Please include an '@'and an '.' in the email address.";
        return 0;
    }
}

const hiddenInputValidation = (validationMsg,hiddenInput) => {
    regex = /^(1|2|3)$/
    validationResult = regex.test(hiddenInput.value);
    if(validationResult){
        validationMsg.style.color = 'green';
        validationMsg.innerHTML = '&#10003;';
        return 1;
    } else {
        validationMsg.style.color = 'red';
        validationMsg.innerHTML   = 'Invalid: please type 1 , 2, or 3'
        return 0;
    }
}



let fitnessSelected = 0;
serviceDropDownMenu.addEventListener('change',function(){
    fitnessSelected = selectFun(this)
})

 const selectFun = (serviceSelection) =>
 {
    let str = 'In what specific category are you interested in:'+ '<br>' +'1.Bodybuilding, 2.Crossfit or 3.Running?'+'<br>'+ 'Type 1 2 or 3 respectively:';
    let hiddenInputContainer    = document.querySelector("#hiddenInputContainer");
    let hiddenInputLabel = document.querySelector("#hiddenInputLabel");
    if(serviceDropDownMenu.value == "Fitness")
    {
        hiddenInputLabel.innerHTML = str;
        hiddenInputContainer.style.display = 'unset';
        console.log(serviceDropDownMenu.value);
        return 1;
    }
    else
    {
        console.log(serviceDropDownMenu.value);
        hiddenInputContainer.style.display = 'none';
        document.querySelector("#hiddenInput").value = "";
        return 0;
    }
 }

 const submitButton = document.querySelector('#submitButton')
 submitButton.addEventListener('click',function(){
    modalFun();
 })
const modalFun = () => {
    let modal = document.querySelector("#myModal");
    let modalCloseButton = document.getElementsByClassName("close")[0];
    modal.style.display ="block";
    modalCloseButton.onclick =function() { modal.style.display = "none"};
    window.onclick = event => {  if (event.target == modal) {modal.style.display = "none"};}
    let elem = document.querySelector("#form").elements;
    let str = '';
    let SubmitButton = elem.length-1;
    if( (valFname && valLname && valEmail) === 0 ){modalParagraph.innerHTML = "All inputs must be valid please try again!!!";}
    else if( valSelect === 0 && fitnessSelected === 1) {modalParagraph.innerHTML = "Please choose one fitness category (1 ,2 or 3)";}
    else{
        for (let i = 0; i < SubmitButton; i++) 
            {let elemName = elem[i].name;
             let elemValue = elem[i].value;
             let elemCheck = elem[i].checked;
             let genderCondition   = elemName === "Gender" && elemCheck === false;
             let serviceCondition  = elemName ==="Service" && elemValue === "";
             let fitnessCondition  = elemName === "Fitness Category" && elemValue === "";
             let requestsCondition = elemName === "Requests" && elemValue === "";
             let infoCondition     = elemName === "Sent-Info" && elemCheck === false;
             let conditions = (genderCondition || serviceCondition || fitnessCondition  || requestsCondition || infoCondition );
             str+= (conditions? "" : `${elemName}: ${elemValue} <br>`);

            }
            modalParagraph.innerHTML = `You Typed: <br> ${str} `;
        }
}



const firstName   = document.querySelector('#firstName')
const lastName    = document.querySelector('#lastName')
const email       = document.querySelector('#email')
const selectData  = document.querySelector('#selectData')

let valFname  = 0;
let valLname  = 0;
let valEmail  = 0;
let valSelect = 0;

firstName.addEventListener('blur',function () {
     valFname = validation('#valMessageFname',this)
})
lastName.addEventListener('blur',function() {
    valLname = validation('#valMessageLname',this)
})
email.addEventListener('blur',function() {
    valEmail = validation('#valMessageEmail',this)
})
selectData.addEventListener('blur',function() {
    valSelect = validation('#valChoice',this)
})

const validation = (valMessage,type) =>
{
    let messageVar   = document.querySelector(valMessage);
    if (type.id === "firstName")      {regex = /^[a-zA-Z]{3,}$/};
    if (type.id === "lastName")       {regex = /^[a-zA-Z]{3,}$/};
    if (type.id === "email")          {regex = /^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/};
    if (type.id === "selectData") {regex = /^(1|2|3)$/};
    if(regex.test(type.value))
    {
        messageVar.style.color = "green";
        messageVar.innerHTML   = "&#10003;";
        return 1;
    }
    else
    {
        messageVar.style.color = "red";
        if(type.id === "email")
        {
            messageVar.innerHTML = "Please include an '@'and an '.' in the email address.";
        }
        else if(type.id === "selectData")
        {
            messageVar.innerHTML = "Invalid";
        }
        else
        {
            messageVar.innerHTML = "Please type a 3 or more letter name with no special characters.";
        }
        return 0;
    }
} 

const selectInput = document.querySelector('#selectInput')

let fitnessSelected = 0;
selectInput.addEventListener('change',function(){
    fitnessSelected = selectFun(this)
})

 const selectFun = (selectInput) =>
 {
    let str = 'In what specific category are you interested in:'+ '<br>' +'1.Bodybuilding, 2.Crossfit or 3.Running?'+'<br>'+ 'Type 1 2 or 3 respectively:';
    let invisibleElement     = document.querySelector("#invisibleElement");
    let invisibleElementText = document.querySelector("#invisibleElementText");
    if(selectInput.value == "Fitness")
    {
        invisibleElementText.innerHTML = str;
        invisibleElement.style.display = 'unset';
        return 1;
    }
    else
    {
        invisibleElement.style.display = 'none';
        document.querySelector("#selectData").value = "";
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



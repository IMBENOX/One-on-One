
const signUpInputFields = 
[
    {
        selector : document.querySelector('#firstNameInput') as HTMLInputElement,
        message  : 'Please type a 3 or more letter name with no special characters.',
        regex    : /^[a-zA-Z]{3,}$/,
        validationContainer : document.querySelector('#validationMsgFirstName') as HTMLSpanElement,
        isValid    : false,
    },
    {
        selector : document.querySelector('#lastNameInput') as HTMLInputElement,
        message  : 'Please type a 3 or more letter name with no special characters.',
        regex    : /^[a-zA-Z]{3,}$/,
        validationContainer : document.querySelector('#validationMsgLastName') as HTMLSpanElement,
        isValid    : false,
    },
    {
        selector : document.querySelector('#emailInput') as HTMLInputElement,
        message  : "Please include an '@'and an '.' in the email address.",
        regex    : /^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/,
        validationContainer : document.querySelector('#validationMsgEmail') as HTMLSpanElement,
        isValid    : false,
    },
    {
        selector : document.querySelector('#hiddenInput') as HTMLInputElement,
        message  : "Invalid: please type 1 , 2, or 3",
        regex    : /^(1|2|3)$/,
        validationContainer : document.querySelector('#hiddenInputValidationMsg') as HTMLSpanElement,
        isValid    : false,
    },
]

signUpInputFields.forEach(inputField =>
{
    inputField.selector?.addEventListener('blur', event => 
    {
        inputField.isValid = inputField.regex.test((inputField.selector?.value));
        showValidationMsg(inputField.validationContainer,inputField.message,inputField.isValid);
    })
})

const serviceDropDownMenu = document.querySelector('#serviceDropDownMenu') as HTMLSelectElement
let dropDownChoiceDisplayed = false;
serviceDropDownMenu?.addEventListener('change',(event) => 
{
    dropDownChoiceDisplayed = serviceDropDownMenu.value === "Fitness" ? true : false;
    renderDropDownMenuChoice(dropDownChoiceDisplayed)
})

const submitButton = document.querySelector('#submitButton')
submitButton?.addEventListener('click',() => 
{
   renderModal();
   closeModal();
})

const showValidationMsg = (validationContainer : HTMLSpanElement , message : string, isValid : boolean) => 
{
    if(isValid)
    {
            validationContainer.style.color = 'green';
            validationContainer.innerHTML   = '&#10003;';
    }

    else 
    {
        validationContainer.style.color = 'red';
        validationContainer.innerHTML   = message;
    }
    return isValid;
}

 const renderDropDownMenuChoice = (isDisplayed : boolean) =>
 {
    const hiddenInputContainer = document.querySelector("#hiddenInputContainer") as HTMLDivElement;
    if(isDisplayed)
    {
        const hiddenInputLabel = document.querySelector("#hiddenInputLabel") as HTMLSpanElement;
        hiddenInputLabel.innerHTML = 'In what specific category are you interested in:'+ '<br>' +'1.Bodybuilding, 2.Crossfit or 3.Running?'+'<br>'+ 'Type 1 2 or 3 respectively:';
        hiddenInputContainer.style.display = 'unset' ;
    }
    else 
    {   const hiddenInput = document.querySelector("#hiddenInput") as HTMLInputElement
        hiddenInputContainer.style.display = 'none';
        hiddenInput.value = "";
    }
 }
const renderModal = () => 
{
    const modal = document.querySelector("#myModal") as HTMLDivElement;
    const modalText = document.querySelector('#modalText') as HTMLParagraphElement;
    modal.style.display ="block";
    const form= document.querySelector("#form") as HTMLFormElement;
    const formField = form.elements;
    let str = '';
    if( (signUpInputFields[0].isValid && signUpInputFields[1].isValid && signUpInputFields[2].isValid) === false )
    {
        modalText.innerHTML = "All inputs must be valid please try again!!!";
    }
    else if( signUpInputFields[3].isValid === false && dropDownChoiceDisplayed === true) 
    {
        modalText.innerHTML = "Please choose one fitness category (1 ,2 or 3)";
    }
    else
    {
        for (let i = 0; i < formField.length-1; i++) 
        {   
            let value = (formField[i] as HTMLInputElement).value ;
            let doNotShow = value === "";
            if(((formField[i]as HTMLInputElement).type ==='radio' || (formField[i] as HTMLInputElement).type === 'checkbox') && (formField[i] as HTMLInputElement).checked === false )
            {
                doNotShow = true
            }
            str+= (doNotShow? "" : `${(formField[i] as HTMLInputElement).name}: ${value} <br>`);
        }
            modalText.innerHTML = `Your choices are: <br> ${str} `;
    }
}

const closeModal = () => 
{
    const modal = document.querySelector("#myModal") as HTMLDivElement;
    const modalCloseButton = document.querySelector('.close') as HTMLSpanElement;
    modalCloseButton.onclick = () => modal.style.display = "none";
    window.onclick = event => 
    { 
        if (event.target === modal) 
        {
            modal.style.display = "none"
        };
    }
}
type SignUpFields = {
    selector: HTMLInputElement | null,
    message: string,
    regex: RegExp,
    validationContainer: HTMLSpanElement | null,
    isValid: boolean,
}
const signUpInputFields : SignUpFields[] = 
[
    {
        selector : document.querySelector('#firstNameInput'),
        message  : 'Please type a 3 or more letter name with no special characters.',
        regex    : /^[a-zA-Z]{3,}$/,
        validationContainer : document.querySelector('#validationMsgFirstName'),
        isValid    : false,
    },
    {
        selector : document.querySelector('#lastNameInput'),
        message  : 'Please type a 3 or more letter name with no special characters.',
        regex    : /^[a-zA-Z]{3,}$/,
        validationContainer : document.querySelector('#validationMsgLastName'),
        isValid    : false,
    },
    {
        selector : document.querySelector('#emailInput'),
        message  : "Please include an '@'and an '.' in the email address.",
        regex    : /^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/,
        validationContainer : document.querySelector('#validationMsgEmail'),
        isValid    : false,
    },
    {
        selector : document.querySelector('#hiddenInput'),
        message  : "Invalid: please type 1 , 2, or 3",
        regex    : /^(1|2|3)$/,
        validationContainer : document.querySelector('#hiddenInputValidationMsg'),
        isValid    : false,
    },
]

signUpInputFields.forEach(inputField =>
{  
    inputField.selector?.addEventListener('blur', () => 
    {   
        if(!(inputField.selector && inputField.validationContainer)) {return}
        inputField.isValid = inputField.regex.test((inputField.selector.value));
        showValidationMsg(inputField.validationContainer,inputField.message,inputField.isValid);
    })
})

const serviceDropDownMenu : HTMLSelectElement | null = document.querySelector('#serviceDropDownMenu')
let dropDownChoiceDisplayed = false;
serviceDropDownMenu?.addEventListener('change',() => 
{
    dropDownChoiceDisplayed = serviceDropDownMenu.value === "Fitness" ? true : false;
    renderDropDownMenuChoice(dropDownChoiceDisplayed)
})

const submitButton : HTMLButtonElement | null = document.querySelector('#submitButton');
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
}

 const renderDropDownMenuChoice = (isDisplayed : boolean) =>
 {
    const hiddenInputContainer : HTMLDivElement | null = document.querySelector("#hiddenInputContainer");
    if(isDisplayed)
    {
        const hiddenInputLabel : HTMLSpanElement | null = document.querySelector("#hiddenInputLabel");
        if(hiddenInputLabel && hiddenInputContainer){
        hiddenInputLabel.innerHTML = 'In what specific category are you interested in:'+ '<br>' +'1.Bodybuilding, 2.Crossfit or 3.Running?'+'<br>'+ 'Type 1 2 or 3 respectively:';
        hiddenInputContainer.style.display = 'unset' ;
        }
        
    }
    else 
    {   const hiddenInput : HTMLInputElement | null = document.querySelector("#hiddenInput")
        if(hiddenInputContainer && hiddenInput){
            hiddenInputContainer.style.display = 'none';
            hiddenInput.value = "";
        }
    }
 }
const renderModal = () => 
{
    const modal : HTMLDivElement | null = document.querySelector("#myModal");
    const modalText : HTMLParagraphElement | null = document.querySelector('#modalText');
    if(!(modal && modalText)){return}
    modal.style.display ="block";
    const form : HTMLFormElement | null = document.querySelector("#form");
    const formField = form?.elements;
    if(!formField){return}
    let str = '';
    if(!(signUpInputFields[0].isValid && signUpInputFields[1].isValid && signUpInputFields[2].isValid))
    {
        modalText.innerHTML = "All inputs must be valid please try again!!!";
    }
    else if( !signUpInputFields[3].isValid && dropDownChoiceDisplayed) 
    {
        modalText.innerHTML = "Please choose one fitness category (1 ,2 or 3)";
    }
    else
    {
        for (let i = 0; i < formField.length-1; i++)
        {   const formFieldInput  =  formField[i] as HTMLInputElement ;
            let value = formFieldInput.value ;
            let doNotShow = value === "";
            if((formFieldInput.type ==='radio' || formFieldInput.type === 'checkbox') && !formFieldInput.checked )
            {
                doNotShow = true
            }
            str+= (doNotShow? "" : `${(formFieldInput).name}: ${value} <br>`);
        }
            modalText.innerHTML = `Your choices are: <br> ${str} `;
    }
}

const closeModal = () => 
{
    const modal : HTMLDivElement | null = document.querySelector("#myModal");
    const modalCloseButton : HTMLSpanElement | null = document.querySelector('.close');
    if(!(modal && modalCloseButton)) {return}
    modalCloseButton.onclick = () => modal.style.display = "none";
    window.onclick = event => 
    { 
        if (event.target === modal) 
        {
            modal.style.display = "none"
        };
    }
}
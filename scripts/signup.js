
const signUpInputFields = 
[
    {
        selector : document.querySelector('#firstNameInput'),
        message  : 'Please type a 3 or more letter name with no special characters.',
        regex    : /^[a-zA-Z]{3,}$/,
        validationContainer : document.querySelector('#validationMsgFirstName'),
        validationResult    : false,
    },
    {
        selector : document.querySelector('#lastNameInput'),
        message  : 'Please type a 3 or more letter name with no special characters.',
        regex    : /^[a-zA-Z]{3,}$/,
        validationContainer : document.querySelector('#validationMsgLastName'),
        validationResult    : false,
    },
    {
        selector : document.querySelector('#emailInput'),
        message  : "Please include an '@'and an '.' in the email address.",
        regex    : /^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/,
        validationContainer : document.querySelector('#validationMsgEmail'),
        validationResult    : false,
    },
    {
        selector : document.querySelector('#hiddenInput'),
        message  : "Invalid: please type 1 , 2, or 3",
        regex    : /^(1|2|3)$/,
        validationContainer : document.querySelector('#hiddenInputValidationMsg'),
        validationResult    : false,
    },
]

for(let InputField of signUpInputFields)
{
    InputField.selector.addEventListener('blur', event => 
    {
        InputField.validationResult = validation(InputField.validationContainer,InputField.message,event.target,InputField.regex);
    })
}

const serviceDropDownMenu = document.querySelector('#serviceDropDownMenu')
let dropDownChoiceDesplayed = false;
serviceDropDownMenu.addEventListener('change',(event) => 
{
    dropDownChoiceDesplayed = renderDropDownMenuChoice(event.target)
})

const submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click',() => 
{
   renderModal();
   closeModal();
})

const validation = (validationContainer, message, inputType, regex) => 
{
    const validationResult = regex.test(inputType.value);
    if(validationResult)
    {
        validationContainer.style.color = 'green';
        validationContainer.innerHTML   = '&#10003;';
        return validationResult;
    }
    else 
    {
        validationContainer.style.color = 'red';
        validationContainer.innerHTML   = message;
        return validationResult;
    }
}

 const renderDropDownMenuChoice = (serviceDropDownMenu) =>
 {
    const hiddenInputContainer = document.querySelector("#hiddenInputContainer");
    if(serviceDropDownMenu.value === "Fitness")
    {
        const hiddenInputLabel = document.querySelector("#hiddenInputLabel");
        hiddenInputLabel.innerHTML = 'In what specific category are you interested in:'+ '<br>' +'1.Bodybuilding, 2.Crossfit or 3.Running?'+'<br>'+ 'Type 1 2 or 3 respectively:';
        hiddenInputContainer.style.display = 'unset';
        return true;
    }
    else 
    {
        hiddenInputContainer.style.display = 'none';
        document.querySelector("#hiddenInput").value = "";
        return false;
    }
 }
const renderModal = () => 
{
    const modal = document.querySelector("#myModal");
    const modalText = document.querySelector('#modalText');
    modal.style.display ="block";
    const formField = document.querySelector("#form").elements;
    let str = '';
    if( (signUpInputFields[0].validationResult && signUpInputFields[1].validationResult && signUpInputFields[2].validationResult) === false )
    {
        modalText.innerHTML = "All inputs must be valid please try again!!!";
    }
    else if( signUpInputFields[3].validationResult === false && dropDownChoiceDesplayed === true) 
    {
        modalText.innerHTML = "Please choose one fitness category (1 ,2 or 3)";
    }
    else
    {
        for (let i = 0; i < formField.length-1; i++) 
        {
            let value = formField[i].value;
            let doNotShow = value === "";
            if((formField[i].type ==='radio' || formField[i].type === 'checkbox') && formField[i].checked === false )
            {
                doNotShow = true
            }
            str+= (doNotShow? "" : `${formField[i].name}: ${value} <br>`);
        }
            modalText.innerHTML = `Your choices are: <br> ${str} `;
    }
}

const closeModal = () => 
{
    const modal = document.querySelector("#myModal");
    let modalCloseButton = document.querySelector('.close');
    modalCloseButton.onclick = () => modal.style.display = "none";
    window.onclick = event => 
    { 
        if (event.target === modal) 
        {
            modal.style.display = "none"
        };
    }
}
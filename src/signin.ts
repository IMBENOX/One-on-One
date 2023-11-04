
type SignInFields = {
    selector: HTMLInputElement | null,
    isValid : boolean,
}

const signInInputFields : SignInFields[] = 
[
    {
        selector : document.querySelector('#username'),
        isValid  : false,
    },  
    {
        selector : document.querySelector('#password'),
        isValid  : false,
    },
]

signInInputFields.forEach(inputField =>
{  
    inputField.selector?.addEventListener('blur', () => 
    {   
        if(inputField.selector?.value) {
        inputField.isValid = true;
        };
    })
});


const submitButtonIn : HTMLButtonElement | null = document.querySelector('#submitButton');
submitButtonIn?.addEventListener('click',() => 
{
    submitFormIn();
    closeModalIn();
})

const submitFormIn = () => 
{
    const modal : HTMLDivElement | null = document.querySelector("#myModal");
    const modalText : HTMLParagraphElement | null = document.querySelector('#modalText');
    if(!(modal && modalText)){return}
    modal.style.display ="block";
    const form : HTMLFormElement | null = document.querySelector("#form");
    const formField = form?.elements;
    if(!formField){return}
    let str = '';
    if(!(signInInputFields[0].isValid && signInInputFields[1].isValid))
    {
        modalText.innerHTML = "Please give a Username and a Password";
    }
    else
    {
        modal.style.display = "none";
        form.submit();
        form.reset();
     }
}

const closeModalIn = () => 
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
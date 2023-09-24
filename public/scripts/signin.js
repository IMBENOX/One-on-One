"use strict";
// type SignInFields = {
//     selector: HTMLInputElement | null,
//     message: string,
//     regex: RegExp,
//     validationContainer: HTMLSpanElement | null,
//     isValid: boolean,
// }
// const signInInputFields : SignInFields[] = 
// [
//     {
//         selector : document.querySelector('#username'),
//         message  : 'Please type a 3 or more letter name with no special characters.',
//         regex    : /^[a-zA-Z]{3,}$/,
//         validationContainer : document.querySelector('#validationMsgUsername'),
//         isValid    : false,
//     },
//     {
//         selector : document.querySelector('#password'),
//         message  : "Password must be at least 4 characters long, with at least 1, uppercase letter 1, lowercase and 1, number",
//         regex    : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}$/,
//         validationContainer : document.querySelector('#validationMsgPassword'),
//         isValid    : false,
//     },
// ]
// signInInputFields.forEach(inputField =>
// {  
//     inputField.selector?.addEventListener('blur', () => 
//     {   
//         if(!(inputField.selector && inputField.validationContainer)) {return}
//         inputField.isValid = inputField.regex.test((inputField.selector.value));
//         showMsg(inputField.validationContainer,inputField.message,inputField.isValid);
//     })
// })
// const ContinueButton : HTMLButtonElement | null = document.querySelector('#ContinueButton');
// ContinueButton?.addEventListener('click',() => 
// {
//     ContinueForm();
//     closePopupWindow();
// })
// const showMsg = (validationContainer : HTMLSpanElement , message : string, isValid : boolean) => 
// {
//     if(isValid)
//     {
//             validationContainer.style.color = 'green';
//             validationContainer.innerHTML   = '&#10003;';
//     }
//     else 
//     {
//         validationContainer.style.color = 'red';
//         validationContainer.innerHTML   = message;
//     }
// }
// const ContinueForm = () => 
// {
//     const modal : HTMLDivElement | null = document.querySelector("#myModal");
//     const modalText : HTMLParagraphElement | null = document.querySelector('#modalText');
//     if(!(modal && modalText)){return}
//     modal.style.display ="block";
//     const form : HTMLFormElement | null = document.querySelector("#form");
//     const formField = form?.elements;
//     if(!formField){return}
//     let str = '';
//     console.log(signInInputFields[0].isValid)
//     if(!(signInInputFields[0].isValid && signInInputFields[1].isValid))
//     {   
//         modalText.innerHTML = "All inputs must be valid please try again!!!";
//     }
//     else
//     {
//         modal.style.display = "none";
//         form.submit();
//      }
// }
// const closePopupWindow = () => 
// {
//     const modal : HTMLDivElement | null = document.querySelector("#myModal");
//     const modalCloseButton : HTMLSpanElement | null = document.querySelector('.close');
//     if(!(modal && modalCloseButton)) {return}
//     modalCloseButton.onclick = () => modal.style.display = "none";
//     window.onclick = event => 
//     { 
//         if (event.target === modal) 
//         {
//             modal.style.display = "none"
//         };
//     }
// }

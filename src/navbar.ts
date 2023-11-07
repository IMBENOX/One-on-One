const anchorTags= document.querySelectorAll('.nav-link');

anchorTags.forEach(tag => tag.addEventListener('click',() =>{
    const href = tag.getAttribute('href');
    if(href === window.location.pathname) tag.setAttribute('href','#');
}))




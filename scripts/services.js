categories = ['TYPE','NUMBER OF PROVIDERS','AVERAGE PRICE','MOST POPULAR']

services = {
    fitness: {
        name: 'Fitness',
        numOfProviders: 2000,
        avrPrice: '25$',
        mostPopular: ['Bodybuilding Trainer','Crossfit Trainer','Running Trainer']

    },
    beautification: {
        name: 'Beautification',
        numOfProviders: 1300,
        avrPrice: '30$',
        mostPopular: ['Haircuts','Nails','Massage']

    },
    homeRepairs: {
        name: 'Home Repairs',
        numOfProviders: 1500,
        avrPrice: '80$',
        mostPopular: ['Home Paintment','Refrigerant','Plumber']

    },
    teaching: {
        name: 'Teaching',
        numOfProviders: 900,
        avrPrice: '15$',
        mostPopular: ['Physics','Math','Dancing']

    }
}
const imgs  = document.querySelector('#images');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

imgs.insertAdjacentElement('afterend',table)
table.append(thead);
table.append(tbody);

const headRow = document.createElement('tr');
thead.append(headRow);

for(let category of categories){
    const th = document.createElement('th')
    th.append(category);
    headRow.append(th);
}

for(let service in services){
    const currentService = services[service]
    const tr  = document.createElement('tr')
    const th  = document.createElement('th')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const ul  = document.createElement('ul')

    th.setAttribute('scope','row')
    th.append(currentService.name)
    td1.append(currentService.numOfProviders)
    td2.append(currentService.avrPrice)
     for(let popularService of currentService.mostPopular){
        const li = document.createElement('li')
        li.append(popularService)
        ul.append(li)
     }
     td3.append(ul)
    

    tr.append(th)
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tbody.append(tr)
}

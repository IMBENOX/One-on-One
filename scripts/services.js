const categories = ['TYPE','NUMBER OF PROVIDERS','AVERAGE PRICE','MOST POPULAR']

const services = {
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

    },
    health: {
        name: 'Health',
        numOfProviders: 1000,
        avrPrice: '50$',
        mostPopular: ['Pathologist','Chiropractor','Dentist']

    }
}
const imagesContainer  = document.querySelector('#imagesContainer');
const tableWrapper = document.querySelector('#tableWrapper');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
imagesContainer.insertAdjacentElement('afterend',tableWrapper)
tableWrapper.append(table);
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
    const numOfProviders = document.createElement('td')
    const avrPrice = document.createElement('td')
    const mostPopularListContainer = document.createElement('td')
    const ul  = document.createElement('ul')

    th.setAttribute('scope','row')
    th.append(currentService.name)
    numOfProviders.append(currentService.numOfProviders)
    avrPrice.append(currentService.avrPrice)
     for(let popularService of currentService.mostPopular){
        const li = document.createElement('li')
        li.append(popularService)
        ul.append(li)
     }
    mostPopularListContainer.append(ul)
    tr.append(th)
    tr.append(numOfProviders)
    tr.append(avrPrice)
    tr.append(mostPopularListContainer)
    tbody.append(tr)
}

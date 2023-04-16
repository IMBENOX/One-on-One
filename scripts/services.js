const tableHead = ['TYPE','NUMBER OF PROVIDERS','AVERAGE PRICE','MOST POPULAR']
categories = {
    fitness: {
        name: 'Fitness',
        numOfProviders: 200,
        avrPrice: '25$',
        mostPopular: ['Bodybuilding','Crossfit','Running']

    },
    cosmetology: {
        name: 'Cosmetology',
        numOfProviders: 130,
        avrPrice: '30$',
        mostPopular: ['Hairdressing','Nails','Massage']

    },
    homeRepairs: {
        name: 'Home Repairs',
        numOfProviders: 150,
        avrPrice: '80$',
        mostPopular: ['Home Paintment','Appliance Service','Plumbing']

    },
    teaching: {
        name: 'Teaching',
        numOfProviders: 90,
        avrPrice: '15$',
        mostPopular: ['Physics','Math','Quitar']

    },
    health: {
        name: 'Health',
        numOfProviders: 100,
        avrPrice: '50$',
        mostPopular: ['Pathologist','Chiropractor','Dentist']

    }
}
services = [
    {
        name: 'Bodybuilding',
        category: 'Fitness',
        numOfProviders: 6,
        avrPrice: 15,
        rating: '9/10',
        avrDistance: '1km',
    },
    {
        name: 'Crossfit',
        category: 'Fitness',
        numOfProviders: 4,
        avrPrice: 20,
        rating: '7/10',
        avrDistance: '5km',
    },
    {
        name: 'Running',
        category: 'Fitness',
        numOfProviders: 2,
        avrPrice: 18,
        rating: '6/10',
        avrDistance: '2km',
    },
    {
        name: 'Yoga',
        category: 'Fitness',
        numOfProviders: 3,
        avrPrice: 16,
        rating: '6.9/10',
        avrDistance: '8km',
    },
    {
        name: 'Pilates',
        category: 'Fitness',
        numOfProviders: 8,
        avrPrice: 19,
        rating: '7.3/10',
        avrDistance: '6km',
    },
    {
        name: 'Boxing',
        category: 'Fitness',
        numOfProviders: 3,
        avrPrice: 25,
        rating: '7.9/10',
        avrDistance: '3.4km',
    },
    {
        name: 'Hairdressing',
        category: 'Cosmetology',
        numOfProviders: 14,
        avrPrice: 22,
        rating: '8.4/10',
        avrDistance: '1.4km',
    },
    {
        name: 'Nails',
        category: 'Cosmetology',
        numOfProviders: 9,
        avrPrice: 27,
        rating: '4.5/10',
        avrDistance: '2.1km',
    },
    {
        name: 'Massage',
        category: 'Cosmetology',
        numOfProviders: 4,
        avrPrice: 11,
        rating: '5.7/10',
        avrDistance: '4km',
    },
    {
        name: 'Skin-care',
        category: 'Cosmetology',
        numOfProviders: 5,
        avrPrice: 15,
        rating: '3.8/10',
        avrDistance: '3.6km',
    },
    {
        name: 'Make Up Artist',
        category: 'Cosmetology',
        numOfProviders: 8,
        avrPrice: 13,
        rating: '8/10',
        avrDistance: '1.3km',
    },
    {
        name: 'House-Painting',
        category: 'Home Repairs',
        numOfProviders: 8,
        avrPrice: 200,
        rating: '7.7/10',
        avrDistance: '1.8km',
    },
    {
        name: 'Appliance Service Technician',
        category: 'Home Repairs',
        numOfProviders: 7,
        avrPrice: 60,
        rating: '6.5/10',
        avrDistance: '2km',
    },
    {
        name: 'Plumber',
        category: 'Home Repairs',
        numOfProviders: 6,
        avrPrice: 50,
        rating: '8.9/10',
        avrDistance: '2.6km',
    },
    {
        name: 'Electrician',
        category: 'Home Repairs',
        numOfProviders: 10,
        avrPrice: 55,
        rating: '6.9/10',
        avrDistance: '1.9km',
    },
    {
        name: 'Physics Teacher',
        category: 'Teaching',
        numOfProviders: 3,
        avrPrice: 12,
        rating: '8/10',
        avrDistance: '2.5km',
    },
    {
        name: 'Math Teacher',
        category: 'Teaching',
        numOfProviders: 5,
        avrPrice: 10,
        rating: '8.3/10',
        avrDistance: '2.5km',
    },
    {
        name: 'Quitar Teacher',
        category: 'Teaching',
        numOfProviders: 2,
        avrPrice: 15,
        rating: '7/10',
        avrDistance: '2.1km',
    },
    {
        name: 'Piano Teacher',
        category: 'Teaching',
        numOfProviders: 4,
        avrPrice: 18,
        rating: '7.3/10',
        avrDistance: '1.7km',
    },
    {
        name: 'Pathologist',
        category: 'Health',
        numOfProviders: 5,
        avrPrice: 50,
        rating: '8.1/10',
        avrDistance: '2.3km',
    },
    {
        name: 'Chiropractor',
        category: 'Health',
        numOfProviders: 3,
        avrPrice: 40,
        rating: '8.6/10',
        avrDistance: '3km',
    },
    {
        name: 'Dentist',
        category: 'Health',
        numOfProviders: 6,
        avrPrice: 30,
        rating: '8.9/10',
        avrDistance: '2.5km',
    },
]

const fitnessCategory = services.filter(({category} )=> category === 'Fitness');
const fitnessCategoryLowCost = services.filter(({category, avrPrice} )=> category === 'Fitness' && avrPrice < 20 );
const cosmetologyCategory = services.filter(({category} )=> category === 'Cosmetology');
const homeRepairsCategory = services.filter(({category} )=> category === 'Home Repairs');
const teachingCategory = services.filter(({category} )=> category === 'Teaching');
const healthCategory = services.filter(({category} )=> category === 'Health');

const filterListModal = document.querySelector('#filterListModal');
const filterListBtn = document.querySelector('#filterListBtn');
const filterListText = document.querySelector('#filterListText');
filterListBtn.addEventListener('click', () => {
    renderFilterList();
    closeFilterList();
})

const renderFilterList = () => {
    filterListModal.style.display = "block";
    filtersList = ['Fitness','Fitness Low Cost','Cosmetology','Home Repairs','Teaching','Health']
    for(let filterName of filtersList) {
        const filter = document.createElement('div')
        filter.classList.add('filterStyle');
        filter.innerHTML = filterName;
        filterListText.append(filter);
        filter.onclick = () => {
            switch(filterName){
                case 'Fitness':
                    console.log('Fitness')
                    console.log(fitnessCategory);
                    break;
                case 'Fitness Low Cost':
                    console.log('Fitness Low Cost')
                    console.log(fitnessCategoryLowCost);
                    break;
                case 'Cosmetology':
                    console.log('Cosmetology')
                    console.log(cosmetologyCategory);
                    break;
                case 'Home Repairs':
                    console.log('Home Repairs');
                    console.log(homeRepairsCategory);
                    break;
                case 'Teaching':
                    console.log('Teaching')
                    console.log(teachingCategory);
                    break;
                case 'Health':
                    console.log('Health')
                    console.log(healthCategory);
                    break;
                default:
                    console.log("")
            }
        }
    }

}

const closeFilterList = () => {
    const closeFilterList = document.querySelector('.closeFilterList');
    closeFilterList.onclick = () => {
        filterListModal.style.display = "none" ;
        filterListText.innerHTML = '';
        console.clear();
    }
    window.onclick = event => { 
        if (event.target === filterListModal) {
            filterListModal.style.display = "none"
            filterListText.innerHTML = '';
            console.clear();
        }
    }
}




const searchBarContainter  = document.querySelector('.searchBarContainer');
const tableWrapper = document.querySelector('#tableWrapper');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
searchBarContainter.insertAdjacentElement('afterend',tableWrapper)
tableWrapper.append(table);
table.append(...[thead,tbody]);
const headRow = document.createElement('tr');
thead.append(headRow);

tableHead.forEach(category => {
    const th = document.createElement('th')
    th.append(category);
    headRow.append(th);
})

for(let service in categories){
    const currentService = categories[service]
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
    tr.append(...[th,numOfProviders,avrPrice,mostPopularListContainer])
    tbody.append(tr)
}



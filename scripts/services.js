const tableHead = ['TYPE','NUMBER OF PROVIDERS','AVERAGE PRICE','MOST POPULAR']
categories = {
    fitness: {
        name: 'Fitness',
        numOfProviders: 200,
        avrPrice: '25$',
        mostPopular: ['Bodybuilding','Crossfit','Track']

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
        name: 'Track',
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

const serviceListModal   = document.querySelector('#serviceListModal');
const serviceListBtn     = document.querySelector('#serviceListBtn');
serviceListBtn.addEventListener('click', () => {
    renderServiceList();
    closeLists();
})

const renderServiceList = () => {
    serviceListModal.style.display = "flex";
}

const fitnessSelection     = document.querySelector('#fitnessSelection');
const cosmetologySelection = document.querySelector('#cosmetologySelection');
const homeRepairsSelection = document.querySelector('#homeRepairsSelection');
const teachingSelection    = document.querySelector('#teachingSelection');
const healthSelection      = document.querySelector('#healthSelection');
const fitnessCategory      = document.querySelector('#fitnessCategory');
const cosmetologyCategory  = document.querySelector('#cosmetologyCategory');
const homeRepairsCategory  = document.querySelector('#homeRepairsCategory');
const teachingCategory     = document.querySelector('#teachingCategory');
const healthCategory       = document.querySelector('#healthCategory');

fitnessSelection.addEventListener('click', (event) => {
    renderSelectedCategoryList(event.target.id)
})
cosmetologySelection.addEventListener('click', (event) => {
    renderSelectedCategoryList(event.target.id)
})
homeRepairsSelection.addEventListener('click', (event) => {
    renderSelectedCategoryList(event.target.id)
})
teachingSelection.addEventListener('click', (event) => {
    renderSelectedCategoryList(event.target.id)
})
healthSelection.addEventListener('click', (event) => {
    renderSelectedCategoryList(event.target.id)
})

const renderSelectedCategoryList = (categoryTitle) => {
    const categories = [fitnessCategory,cosmetologyCategory,homeRepairsCategory,teachingCategory,healthCategory];
    const selections = [fitnessSelection,cosmetologySelection,homeRepairsSelection,teachingSelection,healthSelection];
    switch(categoryTitle) {
        case 'fitnessSelection' :
            fitnessCategory.classList.remove('notSelectedCategory');
            fitnessSelection.classList.add('selectedCategory');
            categories.filter(category => category !== fitnessCategory).forEach(category => category.classList.add('notSelectedCategory'));
            selections.filter(selection => selection !== fitnessSelection).forEach(selection => selection.classList.remove('selectedCategory'));
            break;
        case 'cosmetologySelection' :
            cosmetologyCategory.classList.remove('notSelectedCategory');
            cosmetologySelection.classList.add('selectedCategory');
            categories.filter(category => category !== cosmetologyCategory).forEach(category => category.classList.add('notSelectedCategory'));
            selections.filter(selection => selection !== cosmetologySelection).forEach(selection => selection.classList.remove('selectedCategory'));
            break;
        case 'homeRepairsSelection' :
            homeRepairsCategory.classList.remove('notSelectedCategory');
            homeRepairsSelection.classList.add('selectedCategory');
            categories.filter(category => category !== homeRepairsCategory).forEach(category => category.classList.add('notSelectedCategory'));
            selections.filter(selection => selection !== homeRepairsSelection).forEach(selection => selection.classList.remove('selectedCategory'));
            break;
        case 'teachingSelection' :
            teachingCategory.classList.remove('notSelectedCategory');
            teachingSelection.classList.add('selectedCategory');
            categories.filter(category => category !== teachingCategory).forEach(category => category.classList.add('notSelectedCategory'));
            selections.filter(selection => selection !== teachingSelection).forEach(selection => selection.classList.remove('selectedCategory'));
            break;
        case 'healthSelection' :
            healthCategory.classList.remove('notSelectedCategory');
            healthSelection.classList.add('selectedCategory');
            categories.filter(category => category !== healthCategory).forEach(category => category.classList.add('notSelectedCategory'));
            selections.filter(selection => selection !== healthSelection).forEach(selection => selection.classList.remove('selectedCategory'));
            break;
            default:
                console.log('Somethink whent wrong');
    }
}

const fitnessFilterLowCost     = services.filter(({category, avrPrice} )=> category === 'Fitness' && avrPrice < 20 );
const cosmetologyFilterLowCost = services.filter(({category, avrPrice} )=> category === 'Cosmetology' && avrPrice < 20 );
const homeRepairsFilterLowCost = services.filter(({category, avrPrice} )=> category === 'Home Repairs' && avrPrice < 60 );
const teachingFilterLowCost    = services.filter(({category, avrPrice} )=> category === 'Teaching' && avrPrice < 15);
const healthFilterLowCost      = services.filter(({category, avrPrice} )=> category === 'Health' && avrPrice < 50);

const filterListModal = document.querySelector('#filterListModal');
const serviceCategories = document.querySelector('#serviceCategories');
const serviceSpecifics = document.querySelector('#serviceSpecifics');
const filterListBtn = document.querySelector('#filterListBtn');
const filterListText = document.querySelector('#filterListText');
filterListBtn.addEventListener('click', () => {
    renderFilterList();
    closeLists();
})

const renderFilterList = () => {
    filterListModal.style.display = "block";
    filtersList = ['Fitness Low Cost','Cosmetology Low Cost','Home Repairs Low Cost','Teaching Low Cost','Health Low Cost']
    for(let filterName of filtersList) {
        const filter = document.createElement('div')
        filter.classList.add('filterStyle');
        filter.innerHTML = filterName;
        filterListText.append(filter);
        filter.onclick = () => {
            switch(filterName){
                case 'Fitness Low Cost':
                    console.log('Fitness Low Cost')
                    console.log(fitnessFilterLowCost);
                    break;
                case 'Cosmetology Low Cost':
                    console.log('Cosmetology Low Cost')
                    console.log(cosmetologyFilterLowCost);
                    break;
                case 'Home Repairs Low Cost':
                    console.log('Home Repairs Low Cost');
                    console.log(homeRepairsFilterLowCost);
                    break;
                case 'Teaching Low Cost':
                    console.log('Teaching Low Cost')
                    console.log(teachingFilterLowCost);
                    break;
                case 'Health Low Cost':
                    console.log('Health Low Cost')
                    console.log(healthFilterLowCost);
                    break;
                default:
                    console.log("Somethink whent wrong")
            }
        }
    }

}

const closeLists = () => {
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
        } else if (event.target === serviceListModal) {
            serviceListModal.style.display = "none";
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



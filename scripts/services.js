
categories = [
    {
        name: 'Fitness',
        numOfProviders: 200,
        avrPrice: '25$',
        mostPopular: ['Bodybuilding','Crossfit','Track'],
        id                 : 'fitnessCategory',
        selectionId        : 'fitnessSelection',
        isSelectedClass    : 'selectedCategory',
        notSelectedClass   : '',
        icon               : 'url("images/fitnessIcon.jpg")',

    },
    {
        name: 'Cosmetology',
        numOfProviders: 130,
        avrPrice: '30$',
        mostPopular: ['Hairdressing','Nails','Massage'],
        id                 : 'cosmetologyCategory',
        selectionId        : 'cosmetologySelection',
        isSelectedClass    : '',
        notSelectedClass   : 'notSelectedCategory',
        icon               : 'url("images/cosmetologyIcon.jpg")',
    },
    {
        name: 'Home Repairs',
        numOfProviders: 150,
        avrPrice: '80$',
        mostPopular: ['Home Paintment','Appliance Service','Plumbing'],
        id                 : 'homeRepairsCategory',
        selectionId        : 'homeRepairsSelection',
        isSelectedClass    : '',
        notSelectedClass   : 'notSelectedCategory',
        icon               : 'url("images/homeRepairsIcon.jpg")',
    },
    {
        name: 'Teaching',
        numOfProviders: 90,
        avrPrice: '15$',
        mostPopular: ['Physics','Math','Quitar'],
        id                 : 'teachingCategory',
        selectionId        : 'teachingSelection',
        isSelectedClass    : '',
        notSelectedClass   : 'notSelectedCategory',
        icon               : 'url("images/teachingIcon.jpg")',
    },
    {
        name: 'Health',
        numOfProviders: 100,
        avrPrice: '50$',
        mostPopular: ['Pathologist','Chiropractor','Dentist'],
        id                 : 'healthCategory',
        selectionId        : 'healthSelection',
        isSelectedClass    : '',
        notSelectedClass   : 'notSelectedCategory',
        icon               : 'url("images/healthIcon.jpg")',
    }
]
services = [
    {
        name: 'Bodybuilding',
        category: 'Fitness',
        numOfProviders: 6,
        avrPrice: 15,
        rating: '9/10',
        avrDistance: '1km',
        icon: 'url("images/bodybuildingIcon.jpg")',
    },
    {
        name: 'Crossfit',
        category: 'Fitness',
        numOfProviders: 4,
        avrPrice: 20,
        rating: '7/10',
        avrDistance: '5km',
        icon: 'url("images/crossfitIcon.jpg")',
    },
    {
        name: 'Track',
        category: 'Fitness',
        numOfProviders: 2,
        avrPrice: 18,
        rating: '6/10',
        avrDistance: '2km',
        icon: 'url("images/trackIcon.jpg")',
    },
    {
        name: 'Yoga',
        category: 'Fitness',
        numOfProviders: 3,
        avrPrice: 16,
        rating: '6.9/10',
        avrDistance: '8km',
        icon: 'url("images/yogaIcon.jpg")',
    },
    {
        name: 'Pilates',
        category: 'Fitness',
        numOfProviders: 8,
        avrPrice: 19,
        rating: '7.3/10',
        avrDistance: '6km',
        icon: 'url("images/pilatesIcon.jpg")'
    },
    {
        name: 'Boxing',
        category: 'Fitness',
        numOfProviders: 3,
        avrPrice: 25,
        rating: '7.9/10',
        avrDistance: '3.4km',
        icon: 'url("images/boxingIcon.jpg")'
    },
    {
        name: 'Hairdressing',
        category: 'Cosmetology',
        numOfProviders: 14,
        avrPrice: 22,
        rating: '8.4/10',
        avrDistance: '1.4km',
        icon: 'url("images/hairdressingIcon.jpg")',
    },
    {
        name: 'Nails',
        category: 'Cosmetology',
        numOfProviders: 9,
        avrPrice: 27,
        rating: '4.5/10',
        avrDistance: '2.1km',
        icon: 'url("images/nailsIcon.jpg")',
    },
    {
        name: 'Massage',
        category: 'Cosmetology',
        numOfProviders: 4,
        avrPrice: 11,
        rating: '5.7/10',
        avrDistance: '4km',
        icon: 'url("images/massageIcon.jpg")',
    },
    {
        name: 'Skin-care',
        category: 'Cosmetology',
        numOfProviders: 5,
        avrPrice: 15,
        rating: '3.8/10',
        avrDistance: '3.6km',
        icon: 'url("images/skinCareIcon.jpg")',
    },
    {
        name: 'Make Up Artist',
        category: 'Cosmetology',
        numOfProviders: 8,
        avrPrice: 13,
        rating: '8/10',
        avrDistance: '1.3km',
        icon: 'url("images/makeUpArtistIcon.jpg")',
    },
    {
        name: 'House-Painting',
        category: 'Home Repairs',
        numOfProviders: 8,
        avrPrice: 200,
        rating: '7.7/10',
        avrDistance: '1.8km',
        icon: '',
    },
    {
        name: 'Appliance Service Technician',
        category: 'Home Repairs',
        numOfProviders: 7,
        avrPrice: 60,
        rating: '6.5/10',
        avrDistance: '2km',
        icon: '',
    },
    {
        name: 'Plumber',
        category: 'Home Repairs',
        numOfProviders: 6,
        avrPrice: 50,
        rating: '8.9/10',
        avrDistance: '2.6km',
        icon: '',
    },
    {
        name: 'Electrician',
        category: 'Home Repairs',
        numOfProviders: 10,
        avrPrice: 55,
        rating: '6.9/10',
        avrDistance: '1.9km',
        icon: '',
    },
    {
        name: 'Physics Teacher',
        category: 'Teaching',
        numOfProviders: 3,
        avrPrice: 12,
        rating: '8/10',
        avrDistance: '2.5km',
        icon: '',
    },
    {
        name: 'Math Teacher',
        category: 'Teaching',
        numOfProviders: 5,
        avrPrice: 10,
        rating: '8.3/10',
        avrDistance: '2.5km',
        icon: '',
    },
    {
        name: 'Quitar Teacher',
        category: 'Teaching',
        numOfProviders: 2,
        avrPrice: 15,
        rating: '7/10',
        avrDistance: '2.1km',
        icon: '',
    },
    {
        name: 'Piano Teacher',
        category: 'Teaching',
        numOfProviders: 4,
        avrPrice: 18,
        rating: '7.3/10',
        avrDistance: '1.7km',
        icon: '',
    },
    {
        name: 'Pathologist',
        category: 'Health',
        numOfProviders: 5,
        avrPrice: 50,
        rating: '8.1/10',
        avrDistance: '2.3km',
        icon: '',
    },
    {
        name: 'Chiropractor',
        category: 'Health',
        numOfProviders: 3,
        avrPrice: 40,
        rating: '8.6/10',
        avrDistance: '3km',
        icon: '',
    },
    {
        name: 'Dentist',
        category: 'Health',
        numOfProviders: 6,
        avrPrice: 30,
        rating: '8.9/10',
        avrDistance: '2.5km',
        icon: '',
    },
]

const serviceListModal   = document.querySelector('#serviceListModal');
const serviceListBtn     = document.querySelector('#serviceListBtn');
serviceListBtn.addEventListener('click', () => 
{
    serviceListModal.style.display = "flex";
    closeLists();
})

const serviceCategories = document.querySelector('#serviceCategories');
const serviceSpecifics  = document.querySelector('#serviceSpecifics');
for(category of categories)
{
    const categoryContainer  = document.createElement('div');
    const categoryIconContainer = document.createElement('span');
    categoryContainer.setAttribute('id',category.selectionId);
    categoryContainer.setAttribute('class',category.isSelectedClass);
    categoryIconContainer.style.backgroundImage = category.icon;
    categoryContainer.append(...[categoryIconContainer,category.name]);
    serviceCategories.append(categoryContainer);

    const specificCategoryDiv = document.createElement('div');
    specificCategoryDiv.setAttribute('id',category.id);
    specificCategoryDiv.setAttribute('class',category.notSelectedClass);
    serviceSpecifics.append(specificCategoryDiv);
    services.forEach( service => 
    {
        if(category.name === service.category)
        {
            const serviceContainer            = document.createElement('div');
            const serviceIconContainer        = document.createElement('span');
            const serviceDiscriptionContainer = document.createElement('p');
            serviceContainer.setAttribute('id',service.name.toLowerCase());
            serviceIconContainer.style.backgroundImage = service.icon;
            serviceContainer.append(...[serviceIconContainer,service.name,serviceDiscriptionContainer]);
            serviceDiscriptionContainer.append(`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Maxime repellat molestias vero recusandae velit dolores id, 
                      hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat 
                      consectetur nam, qui deserunt aliquid.`); 
            specificCategoryDiv.append(serviceContainer);
        }
    } )

    const categorySelection = document.querySelector(`#${category.selectionId}`);
    categorySelection.addEventListener('click', event => 
    {
        renderSelectedCategoryList(event.target.id);
    })
}

const renderSelectedCategoryList = categorySelection => 
{
     const selectedCategory = categories.filter(category => category.selectionId === categorySelection);
     document.querySelector(`#${selectedCategory[0].selectionId}`).classList.add('selectedCategory');
     document.querySelector(`#${selectedCategory[0].id}`).classList.remove('notSelectedCategory');
     const notSelectedCategories = categories.filter(category => category.selectionId !== categorySelection);
     notSelectedCategories.forEach(category => 
        {
            document.querySelector(`#${category.selectionId}`).classList.remove('selectedCategory');
            document.querySelector(`#${category.id}`).classList.add('notSelectedCategory');
        })
     
}

const closeLists = () => {
    window.onclick = event => 
    {
        if (event.target === serviceListModal)
        {
            serviceListModal.style.display = "none";
        }
    }
}

const searchBarContainter  = document.querySelector('.searchBarContainer');
// searchBarContainter.insertAdjacentElement('afterend',tableWrapper)




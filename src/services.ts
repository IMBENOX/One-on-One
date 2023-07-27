
type CategoriesArray = {
    name: string,
    numOfProviders: number,
    avrPrice: string,
    mostPopular : string[],
    id          : string,
    objectsId   : string,
    isSelected  : boolean,
    icon        : string,
    backgroundColor : string,
    htmlLocation : string,
}

  const categories: CategoriesArray[] = [
    {
        name: 'Fitness',
        numOfProviders: 200,
        avrPrice: '25$',
        mostPopular : ['Bodybuilding','Crossfit','Track'],
        id          : 'fitnessCategory',
        objectsId   : 'fitnessCatalog',
        isSelected  : true,
        icon             : 'url("images/fitnessIcon.jpg")',
        backgroundColor : '#e76f51',
        htmlLocation :'about.html',
    },
    {
        name: 'Cosmetology',
        numOfProviders: 130,
        avrPrice: '30$',
        mostPopular : ['Hairdressing','Nails','Massage'],
        id          : 'cosmetologyCategory',
        objectsId   : 'cosmetologyCatalog',
        isSelected  : false,
        icon             : 'url("images/cosmetologyIcon.jpg")',
        backgroundColor : '#a2d2ff',
        htmlLocation :'about.html',
    },
    {
        name: 'Home Repairs',
        numOfProviders: 150,
        avrPrice: '80$',
        mostPopular : ['Home Paintment','Appliance Service','Plumbing'],
        id          : 'homeRepairsCategory',
        objectsId   : 'homeRepairsCatalog',
        isSelected   : false,
        icon              : 'url("images/homeRepairsIcon.jpg")',
        backgroundColor : '#2a9d8f',
        htmlLocation :'about.html',
    },
    {
        name: 'Teaching',
        numOfProviders: 90,
        avrPrice: '15$',
        mostPopular : ['Physics','Math','Quitar'],
        id          : 'teachingCategory',
        objectsId   : 'teachingCatalog',
        isSelected  : false,
        icon             : 'url("images/teachingIcon.jpg")',
        backgroundColor : '#e9c46a',
        htmlLocation :'about.html',
    },
    {
        name: 'Health',
        numOfProviders: 100,
        avrPrice: '50$',
        mostPopular: ['Pathologist','Chiropractor','Dentist'],
        id          : 'healthCategory',
        objectsId   : 'healthCatalog',
        isSelected     : false,
        icon                : 'url("images/healthIcon.jpg")',
        backgroundColor : '#ffc8dd',
        htmlLocation :'about.html',
    },
]
type ServicesArray = {
    name: string,
    category: string,
    numOfProviders: number,
    avrPrice: number,
    rating: string,
    avrDistance: string,
    icon: string,
    description: string,
}
const services: ServicesArray[] = [
    {
        name: 'Bodybuilding',
        category: 'Fitness',
        numOfProviders: 6,
        avrPrice: 15,
        rating: '9/10',
        avrDistance: '1km',
        icon: 'url("images/bodybuildingIcon.jpg")',
        description  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',
    },
    {
        name: 'Crossfit',
        category: 'Fitness',
        numOfProviders: 4,
        avrPrice: 20,
        rating: '7/10',
        avrDistance: '5km',
        icon: 'url("images/crossfitIcon.jpg")',
        description  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Track',
        category: 'Fitness',
        numOfProviders: 2,
        avrPrice: 18,
        rating: '6/10',
        avrDistance: '2km',
        icon: 'url("images/trackIcon.jpg")',
        description  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Yoga',
        category: 'Fitness',
        numOfProviders: 3,
        avrPrice: 16,
        rating: '6.9/10',
        avrDistance: '8km',
        icon: 'url("images/yogaIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Pilates',
        category: 'Fitness',
        numOfProviders: 8,
        avrPrice: 19,
        rating: '7.3/10',
        avrDistance: '6km',
        icon: 'url("images/pilatesIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Boxing',
        category: 'Fitness',
        numOfProviders: 3,
        avrPrice: 25,
        rating: '7.9/10',
        avrDistance: '3.4km',
        icon: 'url("images/boxingIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Hairdressing',
        category: 'Cosmetology',
        numOfProviders: 14,
        avrPrice: 22,
        rating: '8.4/10',
        avrDistance: '1.4km',
        icon: 'url("images/hairdressingIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Nails',
        category: 'Cosmetology',
        numOfProviders: 9,
        avrPrice: 27,
        rating: '4.5/10',
        avrDistance: '2.1km',
        icon: 'url("images/nailsIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Massage',
        category: 'Cosmetology',
        numOfProviders: 4,
        avrPrice: 11,
        rating: '5.7/10',
        avrDistance: '4km',
        icon: 'url("images/massageIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Skin-care',
        category: 'Cosmetology',
        numOfProviders: 5,
        avrPrice: 15,
        rating: '3.8/10',
        avrDistance: '3.6km',
        icon: 'url("images/skinCareIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Make Up Artist',
        category: 'Cosmetology',
        numOfProviders: 8,
        avrPrice: 13,
        rating: '8/10',
        avrDistance: '1.3km',
        icon: 'url("images/makeUpArtistIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'House-Painting',
        category: 'Home Repairs',
        numOfProviders: 8,
        avrPrice: 200,
        rating: '7.7/10',
        avrDistance: '1.8km',
        icon: 'url("images/housePaintingIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Appliance Service Technician',
        category: 'Home Repairs',
        numOfProviders: 7,
        avrPrice: 60,
        rating: '6.5/10',
        avrDistance: '2km',
        icon: 'url("images/applianceServiceIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Plumber',
        category: 'Home Repairs',
        numOfProviders: 6,
        avrPrice: 50,
        rating: '8.9/10',
        avrDistance: '2.6km',
        icon: 'url("images/plumberIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Electrician',
        category: 'Home Repairs',
        numOfProviders: 10,
        avrPrice: 55,
        rating: '6.9/10',
        avrDistance: '1.9km',
        icon: 'url("images/electricianIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Physics Teacher',
        category: 'Teaching',
        numOfProviders: 3,
        avrPrice: 12,
        rating: '8/10',
        avrDistance: '2.5km',
        icon: 'url("images/physicsIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Math Teacher',
        category: 'Teaching',
        numOfProviders: 5,
        avrPrice: 10,
        rating: '8.3/10',
        avrDistance: '2.5km',
        icon: 'url("images/mathIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Quitar Teacher',
        category: 'Teaching',
        numOfProviders: 2,
        avrPrice: 15,
        rating: '7/10',
        avrDistance: '2.1km',
        icon: 'url("images/quitarIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Piano Teacher',
        category: 'Teaching',
        numOfProviders: 4,
        avrPrice: 18,
        rating: '7.3/10',
        avrDistance: '1.7km',
        icon: 'url("images/pianoIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Pathologist',
        category: 'Health',
        numOfProviders: 5,
        avrPrice: 50,
        rating: '8.1/10',
        avrDistance: '2.3km',
        icon: 'url("images/pathologistIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Chiropractor',
        category: 'Health',
        numOfProviders: 3,
        avrPrice: 40,
        rating: '8.6/10',
        avrDistance: '3km',
        icon: 'url("images/chiropractorIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
    {
        name: 'Dentist',
        category: 'Health',
        numOfProviders: 6,
        avrPrice: 30,
        rating: '8.9/10',
        avrDistance: '2.5km',
        icon: 'url("images/dentistIcon.jpg")',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellat molestias vero recusandae velit dolores id, hic veritatis nesciunt. Eius sapiente consequatur eveniet officia repellat consectetur nam, qui deserunt aliquid.',

    },
]

const serviceListModal : HTMLDivElement | null   = document.querySelector('#serviceListModal');
const serviceListBtn : HTMLSpanElement | null    = document.querySelector('#serviceListBtn');
serviceListBtn?.addEventListener('click', () => 
{   if(!serviceListModal){return}
    serviceListModal.style.display = "flex";
    closeLists();
})

const categoriesContainer : HTMLDivElement | null = document.querySelector('#categoriesContainer');
const categoryServicesContainer : HTMLDivElement | null  = document.querySelector('#categoryServicesContainer');
categories.forEach(category => 
{
    const categoryDiv  = document.createElement('div');
    const categoryIconContainer = document.createElement('span');
    categoryDiv.setAttribute('id',category.id);
    if(category.isSelected){
        categoryDiv.setAttribute('class','selectedCategory');
    }
    categoryIconContainer.style.backgroundImage = category.icon;
    categoryDiv.append(...[categoryIconContainer,category.name]);
    if(!(categoriesContainer)){return}
    categoriesContainer.append(categoryDiv);
    const categoryServicesDiv = document.createElement('div');
    categoryServicesDiv.setAttribute('id',category.objectsId);
    if(!category.isSelected){
        categoryServicesDiv.setAttribute('class','doNotDisplay');
    }
    if(!(categoryServicesContainer)){return}
    categoryServicesContainer.append(categoryServicesDiv);
    services.forEach( service => 
    {
        if(category.name === service.category)
        {
            const serviceDiv           = document.createElement('div');
            const serviceIconContainer        = document.createElement('span');
            const serviceDescriptionContainer = document.createElement('p');
            serviceDiv.setAttribute('id',service.name.toLowerCase());
            serviceIconContainer.style.backgroundImage = service.icon;
            serviceDiv.append(...[serviceIconContainer,service.name,serviceDescriptionContainer]);
            serviceDescriptionContainer.append(service.description); 
            categoryServicesDiv.append(serviceDiv);
        }
    } )

    const categorySelector : HTMLDivElement | null = document.querySelector(`#${category.id}`);
    categorySelector?.addEventListener('click', event => 
    {
        renderSelectedCategoryList((event.target as HTMLDivElement).id);   
    })
})

const renderSelectedCategoryList = (categorySelection: string) => 
{
     const selectedCategory = categories.find(category => category.id === categorySelection);
    if(!selectedCategory){return}
     document.querySelector(`#${selectedCategory.id}`)?.classList.add('selectedCategory');
     document.querySelector(`#${selectedCategory.objectsId}`)?.classList.remove('doNotDisplay');
     const notSelectedCategories = categories.filter(category => category.id !== categorySelection);
     notSelectedCategories.forEach(category => 
        {
            document.querySelector(`#${category.id}`)?.classList.remove('selectedCategory');
            document.querySelector(`#${category.objectsId}`)?.classList.add('doNotDisplay');
        })     
}

const closeLists = () => {
    window.onclick = event => 
    {
        if (event.target === serviceListModal)
        {   
            if(!serviceListModal){return}
            serviceListModal.style.display = "none";
        }
    }
}

const searchBarContainter  = document.querySelector('.searchBarContainer');
const categoriesWrapper : HTMLDivElement | null = document.querySelector('#categoriesWrapper');

categories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.append(category.name);
    categoryDiv.style.backgroundColor = category.backgroundColor;
    categoryDiv.onclick = () => {location.href= category.htmlLocation}
    if(!(categoriesWrapper)){return}
    categoriesWrapper.append(categoryDiv)
})







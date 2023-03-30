const pets_array = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "1"
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "2"
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"],
        "id": "3"
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "4"
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "5"
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"],
        "id": "6"
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"],
        "id": "7"
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"],
        "id": "8"
    }
]

const cardsContainer = document.getElementById('cards-container');
const pagination = document.getElementById('pagination');


/***** создаем случайный массив из 48 элементов на основе изначальных данных *****/

// сгенерируем 6 массивов по 8 элементов
// так они точно не будут повторяться в каждой 8 карточке
function generateArrays(arr) {
    let arrays = [];
    for (let i = 0; i < 6; i++) {
        let newArray = [];
        while (newArray.length < 8) {
            let randomIndex = Math.floor(Math.random() * arr.length);
            let randomObject = arr[randomIndex];
            if (!newArray.includes(randomObject)) {
                newArray.push(randomObject);
            }
        }
        arrays.push(newArray);
    }
    return arrays;
}

// объединим все объекты созданных массивов в единый массив
function unionArr(arr) {
    let unArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let elements = arr[i][j];
            unArr.push(elements);
        }
    }
    return unArr;
}

// в union лежат 48 элементов, объединенные в один массив

let union = unionArr(generateArrays(pets_array))
// console.log(union)

/***** посчитаем количество создаваемых страниц и карточек в зависимости от размера экрана *****/
const cardsPerPageCount = function () {
    if (window.screen.width >= 1280) {
        return 8
    } else if (window.screen.width >= 768) {
        return 6
    } else {
        return 3
    }
}

// количество страниц рассчитывается исходя из размеров массива и количества карточек
// зададим счетчик страниц

const pages = Math.ceil(union.length / cardsPerPageCount());
let currentPage = 1;

/***** создаем карточки и добавляем контент из массива *****/
function displayCards() {
    const startIndex = (currentPage - 1) * cardsPerPageCount();
    const endIndex = startIndex + cardsPerPageCount();
    const pageData = union.slice(startIndex, endIndex);
    const pageDataHtml = pageData.map((elem) =>
            `<div class="card" id="${elem.id}">
             <img src="${elem.img}" alt="${elem.type + " " + elem.name}">
             <h3>${elem.name}</h3>
             <button class="button secondary">Learn more</button>
             </div>`).join("");
    // console.log(pageDataHtml)
    cardsContainer.innerHTML = pageDataHtml;
}
/***** создаем кнопки пагинации *****/
function displayPagination() {
    const firstButton = `<button id="go-first" class="round-button" disabled><h4><<</h4></button>`;
    const prevButton = `<button id="go-prev" class="round-button" disabled><h4><</h4></button>`;
    const nextButton = `<button id="go-next" class="round-button"><h4>></h4></button>`;
    const lastButton = `<button id="go-last" class="round-button"><h4>>></h4></button>`;
    const pageIndicator = `<button id="current-page" class="round-button"><h4>${currentPage}</h4></button>`;
    pagination.innerHTML = firstButton + prevButton + pageIndicator + nextButton + lastButton;
}

displayCards();
displayPagination();

/***** Обработчики событий для кнопок пагинации *****/

const firstButton = document.getElementById("go-first");
const prevButton = document.getElementById("go-prev");
const pageButton = document.getElementById("current-page");
const nextButton = document.getElementById("go-next");
const lastButton = document.getElementById("go-last");


firstButton.addEventListener("click", () => {
    currentPage = 1;
    displayCards();
    pageButton.innerHTML = `<h4>${currentPage}</h4>`;
});

prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayCards();
        pageButton.innerHTML = `<h4>${currentPage}</h4>`;
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < pages) {
        currentPage++;
        displayCards();
        pageButton.innerHTML = `<h4>${currentPage}</h4>`;
    }
});

lastButton.addEventListener("click", () => {
    currentPage = pages;
    displayCards();
    pageButton.innerHTML = `<h4>${currentPage}</h4>`;
});

/***** визуализация поведения кнопок пагинации *****/

firstButton.addEventListener('click', () => {
    firstButton.setAttribute('disabled', 'true');
    prevButton.setAttribute('disabled', 'true');
    lastButton.removeAttribute('disabled')
    nextButton.removeAttribute('disabled')
});

prevButton.addEventListener("click", () => {
    lastButton.removeAttribute('disabled');
    nextButton.removeAttribute('disabled');
    if (currentPage === 1) {
        firstButton.setAttribute('disabled', 'true');
        prevButton.setAttribute('disabled', 'true');
    }
});

nextButton.addEventListener('click', () => {
    firstButton.removeAttribute('disabled');
    prevButton.removeAttribute('disabled');
    if (window.screen.width >= 1280) {
            if (currentPage === 6) {
                lastButton.setAttribute('disabled', 'true');
                nextButton.setAttribute('disabled', 'true');
            }
    } else if (window.screen.width >= 768) {
            if (currentPage === 8) {
                lastButton.setAttribute('disabled', 'true');
                nextButton.setAttribute('disabled', 'true');
            }
    } else {
        if (currentPage === 16) {
            lastButton.setAttribute('disabled', 'true');
            nextButton.setAttribute('disabled', 'true');
            }
    }
});

lastButton.addEventListener('click', () => {
    firstButton.removeAttribute('disabled');
    prevButton.removeAttribute('disabled');
    nextButton.setAttribute('disabled', 'true');
    lastButton.setAttribute('disabled', 'true');
});

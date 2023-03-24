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



const cards = document.querySelectorAll('div.card');
// console.log(cards);

const buttonPrevSlide = document.getElementById('previous-slide');
// console.log(buttonSelectLeft);

const buttonNextSlide = document.getElementById('next-slide');
// console.log(buttonSelectRight);


// Функция getRandomArray() каждый раз возвращает новый случайный массив из
// трех неповторяющихся элементов. Если предыдущий массив уже был возвращен, то
// новый массив не содержит элементы предыдущего. Для этого используется
// статическое свойство previousArray, в котором хранится предыдущий массив.

function getRandomArray() {
  // Скопируем исходный массив, чтобы не менять его
  const copy_Pets = [...pets_array];
  // Если предыдущий массив уже есть, то удалим его элементы из копии массива
  if (getRandomArray.previousArray) {
      getRandomArray.previousArray.forEach(pets_array => {
          const index = copy_Pets.findIndex(i => i.name === pets_array.name);
          if (index !== -1) {
              copy_Pets.splice(index, 1);
          }
      });
  }
  // Выберем три случайных элемента из копии массива
  const newArray = [];
  for (let i = 0; i < 3; i++) {
      const index = Math.floor(Math.random() * copy_Pets.length);
      newArray.push(copy_Pets[index]);
      copy_Pets.splice(index, 1);
  }
  // Сохраняем новый массив в качестве предыдущего
  getRandomArray.previousArray = newArray;
  return newArray;
}


// слушаем клик на левую/правую кнопки и меняем карточки через функцию
// также добавим id с карточкой для модального окна
function insertNewCards() {
    let ourNewCards = getRandomArray();
    for (let i = 0; i < cards.length; i++) {
        cards[i].innerHTML =
            `<img src="${ourNewCards[i].img}">
            <h3>${ourNewCards[i].name}</h3>
            <button class="button secondary">Learn more</button>`
        cards[i].setAttribute('id', `${ourNewCards[i].id}`)
    }
}
buttonPrevSlide.addEventListener('click', insertNewCards);
buttonNextSlide.addEventListener('click', insertNewCards);
document.addEventListener('DOMContentLoaded', insertNewCards);

function slideLeftEffect() {
    for (i=0;i<cards.length;i++) {
        cards[i].classList.add('slider-left');
    }
    setTimeout(function() {
        for (i=0;i<cards.length;i++) {
            cards[i].classList.remove('slider-left');
        } ;
    }, 400);
}

function slideRightEffect() {
    for (i=0;i<cards.length;i++) {
        cards[i].classList.add('slider-right');
    }
    setTimeout(function() {
        for (i=0;i<cards.length;i++) {
            cards[i].classList.remove('slider-right');
        } ;
    }, 400);
}

buttonPrevSlide.addEventListener('click', slideRightEffect);
buttonNextSlide.addEventListener("click", slideLeftEffect)
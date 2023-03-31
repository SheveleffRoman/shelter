const modalCloseBtn = document.getElementById('close-button');
const modalWindowContainer = document.querySelector('div.modal-container');
const modalWindow = document.querySelector('div.modal-window');

function openModalWindow() {
    let arrCards = createArrayFromDiv();
        arrCards.forEach(elem => {
            elem.addEventListener('click', () => {
                let index = elem.id - 1
                createModalWindow(index);
                blackout.classList.add('view');
                modalWindowContainer.classList.add('modalView');
                body.classList.add('noScroll');
            })
        })
}
openModalWindow()

/***** создаем массив из сгенерированных карточек, чтобы можно было перебрать и получить  id *****/
function createArrayFromDiv() {
    let divs = cardsContainer.childNodes
    let createdArr = Array.from(divs)
    return createdArr;
}

/***** обрабатываем переключения страниц, чтобы срабатывало всплывающее окно при переключениях страниц *****/

firstButton.addEventListener("click", () => {
    openModalWindow()
})

prevButton.addEventListener("click", () => {
    openModalWindow()
})

nextButton.addEventListener("click", () => {
    openModalWindow()
})

lastButton.addEventListener("click", () => {
    openModalWindow()
})




const createModalWindow = function (i) {
    modalWindow.innerHTML = `<img class='main-pic' src="${pets_array[i].img}">
     <div class="modal-content">
         <h2>${pets_array[i].name}</h2>
                 <h3>${pets_array[i].type} - ${pets_array[i].breed}</h3>
                 <h5>${pets_array[i].description}</h5>
                 <ul>
                     <li><span class="bold">Age:</span> ${pets_array[i].age}</li>
                     <li><span class="bold">Inoculations:</span> ${pets_array[i].inoculations}</li>
                     <li><span class="bold">Diseases:</span> ${pets_array[i].diseases}</li>
                     <li><span class="bold">Parasites:</span> ${pets_array[i].parasites}</li>
                 </ul>
             </div>`
};


modalCloseBtn.addEventListener('click', () => {
    blackout.classList.remove('view');
    modalWindowContainer.classList.remove('modalView');
    body.classList.remove('noScroll');
});

blackout.addEventListener('click', () => {
    blackout.classList.remove('view');
    modalWindowContainer.classList.remove('modalView');
    body.classList.remove('noScroll');
})

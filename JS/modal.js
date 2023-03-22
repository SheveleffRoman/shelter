const modalCloseBtn = document.getElementById('close-button');
const modalWindowContainer = document.querySelector('div.modal-container');
const blackout = document.querySelector('div.blackout');
const modalWindow = document.querySelector('div.modal-window');
const body = document.body;

// для каждой карточки мы ставим слушатель клика

cards.forEach( elem => elem.addEventListener('click', () => {
    blackout.classList.add('view');
    modalWindowContainer.classList.add('modalView');
    body.classList.add('noScroll');
    let cardChange = changeCardInfo(elem);
}));

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


// функция для замены модульного окна
function changeCardInfo(elem) {
    let i = elem.id - 1;
    modalWindow.innerHTML = `
    <img class='main-pic' src="${pets_array[i].img}">
    <div class="modal-content">
        <h2>${pets_array[i].name}</h2>
                <h3>${pets_array[i].type} - ${pets_array[i].breed}</h3>
                <h5>${pets_array[i].description}</h5>
                <ul>
                    <li>Age: ${pets_array[i].age}</li>
                    <li>Inoculations: ${pets_array[i].inoculations}</li>
                    <li>Diseases: ${pets_array[i].diseases}</li>
                    <li>Parasites: ${pets_array[i].parasites}</li>
                </ul>
            </div>
        </div>
    </div>`
};
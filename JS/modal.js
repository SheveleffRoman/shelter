const modalCloseBtn = document.getElementById('close-button');
const modalWindowContainer = document.querySelector('div.modal-container');
const blackout = document.querySelector('div.blackout');
const modalWindow = document.querySelector('div.modal-window');
const body = document.body;


function cardClick() {
    for (i=0;i<cards.length;i++) {
        cards[i].onclick = function () {
            getPopup();
            let index = this.id - 1;
            updateModalInfo(index);
        }
    }
}

cardClick();

function updateModalInfo(i) {
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
             </div>`;
}

function getPopup() {
    getModal();
    modalWindow.classList.toggle('modalView');
}

function getModal() {
    blackout.classList.add('view');
    modalWindowContainer.classList.add('modalView');
    body.classList.add('noScroll');
}

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

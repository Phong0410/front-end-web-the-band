const buyButtons = document.querySelectorAll('.js-buy-ticket')
const closeButtons = document.querySelector('.js-close-button')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')

for (const buyButton of buyButtons) {
    buyButton.addEventListener('click', showByTickets)
}

closeButtons.addEventListener('click', hideByTickets)
modal.addEventListener('click', hideByTickets)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

function showByTickets() {
    modal.style.display = 'flex'
}

function hideByTickets() {
    modal.style.display = 'none'
}
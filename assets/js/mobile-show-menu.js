const header = document.getElementById('header')
const mobileMenu = document.getElementById('mobile-menu')

let height = header.clientHeight

mobileMenu.onclick = function () {
    switch (header.clientHeight) {
        case height:
            header.style.height = 'auto'
            break
        default:
            header.style.height = null
            break
    }
}

let menuItems = document.querySelectorAll(' #nav li a[href*="#"] ')
for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        if (this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')) {
            event.preventDefault()
        }
        else {
            header.style.height = null
        }
    }
}
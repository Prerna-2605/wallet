function menuIcon() {
    document.querySelector('.menu-list').classList.toggle('show');
    document.querySelector('nav').classList.toggle('activeNavBar');
}

function modal() {
    document.querySelector('.modal').classList.toggle('open');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelector('#modeToggle').addEventListener('change', function () {
    var body = document.querySelector('body');
    var nav = document.querySelector('nav');
    var logo = document.querySelector('.logo');
    var menuContent1 = document.querySelector('.menu-content1');
    var menuContent2 = document.querySelector('.menu-content2');
    var search = document.querySelector('.search');
    var searchIcon = document.querySelector('.search-icon');
    var card = document.querySelector('.card');

    if (this.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }

    if (this.checked) {
        nav.classList.add('dark-mode');
    } else {
        nav.classList.remove('dark-mode');
    }

    if (this.checked) {
        logo.classList.add('dark-mode');
    } else {
        logo.classList.remove('dark-mode');
    }

    if (this.checked) {
        menuContent1.classList.add('dark-mode');
    } else {
        menuContent1.classList.remove('dark-mode');
    }

    if (this.checked) {
        menuContent2.classList.add('dark-mode');
    } else {
        menuContent2.classList.remove('dark-mode');
    }
    
    if (this.checked) {
        search.classList.add('dark-mode');
    } else {
        search.classList.remove('dark-mode');
    }

    if (this.checked) {
        searchIcon.classList.add('dark-mode');
    } else {
        searchIcon.classList.remove('dark-mode');
    }

    if (this.checked) {
        card.classList.add('dark-mode');
    } else {
        card.classList.remove('dark-mode');
    }
});
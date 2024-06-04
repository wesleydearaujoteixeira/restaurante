const menu = document.getElementById('mobile_btn');
const content = document.getElementById('mobile_menu');
const icon = document.getElementById('icon');

const toggleMenu = () => {
    if(content.style.display == 'flex') {
        content.style.display = 'none';       
        putMenu();
    }else{
        content.style.display = 'flex';
        DeleteMenu();
     
    }
}


const putMenu = () => {
    icon.classList.remove('fa-x');
    icon.classList.add('fa-solid fa-bars');
}

const DeleteMenu = () => {
    icon.classList.add('fa-x');
    icon.classList.remove('fa-solid fa-bars');
}


menu.addEventListener('click', toggleMenu);

ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});


ScrollReveal().reveal('.testimonials', {
    origin: 'left',
    duration: 1000,
    distance: '20%'
});


ScrollReveal().reveal('.dish', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.feedbacks', {
    origin: 'right',
    duration: 2500,
    distance: '20%'
})
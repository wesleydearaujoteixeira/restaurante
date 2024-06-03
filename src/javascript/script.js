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
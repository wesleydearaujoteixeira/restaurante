const menu = document.getElementById('mobile_btn');
const content = document.getElementById('mobile_menu');

const toggleMenu = () => {
    if(content.style.display == 'flex') {
        content.style.display = 'none';
    }else{
        content.style.display = 'flex';
    }
}

menu.addEventListener('click', toggleMenu);
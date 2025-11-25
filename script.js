//MENU HAMBURGUER MOBILE
document.addEventListener('click', function (e) { //EVENTO CLICK
    const menu = document.querySelector('.navBottomRight'); //VALOR GUARDADO
    const burguer = document.querySelector('#burguer'); //VALOR GUARDADO

    if (menu.classList.contains('active') && !menu.contains(e.target) && !burguer.contains(e.target)) 
    {
        menu.classList.remove('active'); burguer.classList.remove('active'); //
    }
});

//FUNÇÃO PARA FECHAR O MENU AO SCROLLAR A PÁGINA
closeMenu();

//FUNÇÃO COMPLETA
window.addEventListener('scroll', () => {
    const menu = document.querySelector('.navBottomRight');

    if (menu.classList.contains('active')) {
        closeMenu()
    }
});

//

function closeMenu() {
    document.querySelector('.navBottomRight').classList.remove('active');
    document.querySelector('#burguer').classList.remove('active');
}

function switchMenu() {
    document.querySelector('.navBottomRight').classList.toggle('active');
}

//EXPANDIR/OCULTAR RESPOSTAS DO FAQ
const title = document.getElementsByClassName('faqTitle');

for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', () => {
        const paragraph = title[i].nextElementSibling;
        paragraph.classList.toggle('active');
    });
}

const html = document.documentElement;
const toggleBtn = document.getElementById('btnTheme');

//CHECA SE EXISTE TEMA SALVO
const savedTheme = localStorage.getItem('theme');

//SE TIVER, APLICA
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
}

//ALTERAR TEMA AO CLICAR
toggleBtn.addEventListener('click', () => {
    let currentTheme = html.getAttribute('data-theme');
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';

    //APLICA O NOVO TEMA
    html.setAttribute('data-theme', newTheme);

    //SALVA NO LOCAL STORAGE
    localStorage.setItem('theme', newTheme);
});
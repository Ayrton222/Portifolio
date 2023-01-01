NavBarResponsiva();

function NavBarResponsiva() {
    const BotaoMenu = document.getElementsByClassName('botaomenu')[0];
    const navbarLinks = document.getElementsByClassName('barra-nevacao')[0];

    BotaoMenu.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
}
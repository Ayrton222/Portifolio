NavBarResponsiva();

function NavBarResponsiva() {
    const BotaoMenu = document.getElementsByClassName('botaomenu')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    BotaoMenu.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
}
function runApp() {

    /* Oculta o menu na inicialização */
    resizeMenu();

    /* Quando a janela for redimensionada chama resizeMenu() */
    $(window).resize(resizeMenu);

    /* Quando do botão do menu for clicado chama a função toggleMenu() */
    $('#toggleMenu').click(toggleMenu);
}


function resizeMenu() {
    if (window.innerWidth >= 640) {
        showMenu();
    } else {
        hideMenu();
    }
}

function toggleMenu() {

    if ($('#wrap>nav').is(':visible')) {
        hideMenu();
    } else {
        showMenu();
    }

    return false;
}

/* Exibe o menu */
function showMenu() {
    $('#wrap>nav').show('fast');
    $('#menuSmoke').show('fast');
    $('body').css('overflow', 'hidden');
}

/* oculta o menu */
function hideMenu() {
    $('#wrap>nav').hide('fast');
    $('#menuSmoke').hide('fast');
    $('body').css('overflow', 'auto');
}

$(document).ready(runApp);
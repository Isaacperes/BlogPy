function runApp() {
    $('#wrap>nav').hide();
    $('#fumaca').hide();
    $('#toggleMenu').click(controlaMenu)
}

function controlaMenu() {

    if ($('#wrap>nav').is(':visible')) {
        $('#wrap>nav').hide('fast');
        $('#fucama')
    } else {
        $('#wrap>nav').show('fast');
    }

    return false;
}



$(document).ready(runApp);
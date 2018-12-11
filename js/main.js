$( document ).ready(function() {

    let show = true;
    document.cookie.split(';').forEach(element => {
        if(element.split('=')[1] == 'true')
            show = false
    });

    if (show)
        $('#popup').removeClass('d-none')
});

function setPersonalDataCookie() {
    document.cookie = 'personalData=true'
    $('#popup').addClass('d-none')
}
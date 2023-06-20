document.getElementById('close').style.display = 'none';
setInterval(() => {

    var date = new Date('06/17/2023');
    var today = new Date();

    var days = parseInt(parseInt((today.getTime()) - parseInt(date.getTime())) / (1000 * 3600 * 24));
    var hour = today.getHours() - date.getHours();
    var minutes = today.getMinutes() - date.getMinutes();
    var seconds = today.getSeconds() - date.getSeconds();

    document.getElementById('days').innerText = days
    document.getElementById('hours').innerText = hour
    document.getElementById('minutes').innerText = minutes
    document.getElementById('seconds').innerText = seconds

}, 1000)
function portfolio(value) {

    document.getElementById('All').classList.remove('active');
    document.getElementById('Branding').classList.remove('active');
    document.getElementById('Application').classList.remove('active');
    document.getElementById('WebDesign').classList.remove('active');
    document.getElementById('Photography').classList.remove('active');

    document.getElementById('portfolio-4').classList.add('position-change');
    document.getElementById('portfolio-5').classList.add('position-change');
    document.getElementById('portfolio-1').classList.remove('d-none');
    document.getElementById('portfolio-2').classList.remove('d-none');
    document.getElementById('portfolio-3').classList.remove('d-none');
    document.getElementById('portfolio-4').classList.remove('d-none');
    document.getElementById('portfolio-5').classList.remove('d-none');

    if (value == 'Branding') {
        position()
        document.getElementById('portfolio-2').classList.add('d-none');
        document.getElementById('portfolio-5').classList.add('d-none');
    }
    if (value == 'Application' || value == 'Photography') {
        position()
        document.getElementById('portfolio-1').classList.add('d-none');
        document.getElementById('portfolio-3').classList.add('d-none');
        document.getElementById('portfolio-4').classList.add('d-none');
    }
    if (value == 'WebDesign') {
        position()
        document.getElementById('portfolio-2').classList.add('d-none');
        document.getElementById('portfolio-4').classList.add('d-none');
    }
    document.getElementById(value).classList.add('active');
}
function position() {
    document.getElementById('portfolio-4').classList.remove('position-change');
    document.getElementById('portfolio-5').classList.remove('position-change');
}
function FaQ_OC(value) {

    for (let i = 0; i < 6; i++) {
        document.getElementById(`FAQ-BTN-${i + 1}`).classList.remove('fa-minus');
        document.getElementById(`FAQ-BTN-${i + 1}`).classList.add('fa-plus');
        document.getElementById(`FAQ-${i + 1}`).classList.remove('active');
        document.getElementById(`FAQ-CON-${i + 1}`).style.height = "0px";
    }

    var num = value.charAt(value.length - 1);

    document.getElementById(value).classList.remove('fa-plus');
    document.getElementById(value).classList.add('fa-minus');
    document.getElementById(`FAQ-${num}`).classList.add('active');
    document.getElementById(`FAQ-CON-${num}`).style.transition = "4s";
    document.getElementById(`FAQ-CON-${num}`).style.height = "fit-content";
}
function open_close_menu(value) {
    if (value == "open") {
        document.getElementById('open').style.display = 'none'
        document.getElementById('close').style.display = 'block'
        document.getElementById('menu').classList.remove('d-none');
    }
    if (value == "close") {
        document.getElementById('close').style.display = 'none'
        document.getElementById('open').style.display = 'block'
        document.getElementById('menu').classList.add('d-none');
    }
}
function open_close_second_menu(id) {
    let num = document.getElementsByClassName(`second-li-${id}`).length
    if (num > 0) {
        if (document.getElementsByClassName(`second-li-${id}`)[0].classList.contains('d-block')) {
            for (let i = 0; i < num; i++) {
                document.getElementsByClassName(`second-li-${id}`)[i].classList.remove('d-block');
            }
            document.getElementById(`plus-${id}`).classList.remove('d-none');
            document.getElementById(`minus-${id}`).classList.add('d-none');
        }
        else {
            for (let i = 0; i < num; i++) {
                document.getElementsByClassName(`second-li-${id}`)[i].classList.add('d-block');
            }
            document.getElementById(`plus-${id}`).classList.add('d-none');
            document.getElementById(`minus-${id}`).classList.remove('d-none');
        }
    }
}
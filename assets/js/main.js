let prout = document.querySelector('#prout')
let body = document.querySelector('body')
let btnDisplayNav = document.querySelector('#displayNav')

document.addEventListener("click", function (event) {
    if (event.target != (prout || btnDisplayNav)) {
        prout.classList.remove('animate__slideInLeft')
        prout.classList.add('animate__slideOutLeft')
        
    }
})

document.querySelector('#displayNav').addEventListener('click', function (event) {
    leftStart()
    event.stopPropagation()
    prout.classList.remove('d-none');

})

function leftStart() {
    if (prout.classList.contains('d-none')) {
        console.log("in");
        prout.classList.remove('d-none');
        prout.classList.add('animate__slideInLeft')
    }else if (prout.classList.contains('animate__slideOutLeft')) {
        console.log("out");
        prout.classList.remove('animate__slideOutLeft')
        prout.classList.add('animate__slideInLeft')

    }
}

function sendForm(img) {
    data = img.getAttribute('data-src')
    document.querySelector('#ListPicture').value = data
    document.querySelector('form').submit()
}



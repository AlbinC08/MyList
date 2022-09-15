let prout = document.querySelector('#prout')
let body = document.querySelector('body')
let btnDisplayNav = document.querySelector('#displayNav')

document.addEventListener("click", function (event) {
    if (event.target != prout) {
        prout.classList.add('d-none');
        prout.classList.remove('animate__bounceInLeft')
    }
})

document.querySelector('#displayNav').addEventListener('click', function (event) {
    leftStart()
    event.stopPropagation()
})

function leftStart() {
    if (prout.classList.contains('d-none')) {
        prout.classList.remove('d-none');
        prout.classList.add('animate__bounceInLeft')
    }else{
        prout.classList.add('d-none');
        prout.classList.remove('animate__bounceInLeft')
    }
}

function sendForm(img) {
    data = img.getAttribute('data-src')
    document.querySelector('#ListPicture').value = data
    document.querySelector('form').submit()
}

function sendForm(img) {
    data = img.getAttribute('data-src')
    document.querySelector('#ListPicture').value = data
    document.querySelector('form').submit()
}
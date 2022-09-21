let prout2 = document.querySelector("#prout2")

document.addEventListener("click", function (event) {
    if (event.target != prout2) {
        prout2.classList.add('d-none');
        prout2.classList.remove('animate__slideInDown')
    }
})

document.querySelector('#arrow').addEventListener('click', function (event) {
    settingProductDown()
    event.stopPropagation()
})

function settingProductDown() {
    if (prout2.classList.contains('d-none')) {
        console.log("la fonction marche");
        prout2.classList.remove('d-none');
        prout2.classList.add('animate__slideInDown')
    }else{
        prout2.classList.add('d-none');
        prout2.classList.remove('animate__slideInDown')
    }
}

document.querySelector("#styleProduct").addEventListener('click', ()=>{
    if( document.querySelector("#drop").classList.contains('animate__slideInDown')){
        document.querySelector("#drop").classList.remove('animate__slideInDown')
        document.querySelector("#drop").classList.add('animate__slideOutUp')
    }else if(document.querySelector("#drop").classList.contains('animate__slideOutUp')){
        document.querySelector("#drop").classList.remove('animate__slideOutUp')
        document.querySelector("#drop").classList.add('animate__slideInDown')
    }else{
        document.querySelector("#drop").classList.remove('d-none')
        document.querySelector("#drop").classList.add('animate__slideInDown')
    }
   
})
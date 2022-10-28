const btnmobile = window.document.querySelector("#btn-mobile")

btnmobile.addEventListener('click', togglemenu)

function togglemenu(){
    const nav = window.document.querySelector("nav")
    nav.classList.toggle('active')
}

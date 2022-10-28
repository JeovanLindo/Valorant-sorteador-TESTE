// menu dinâmico mobile 

const btnMobile = window.document.querySelector ('#btn-mobile')

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault() 
    const nav = window.document.querySelector ('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

// ---- menu dinamico mobile ----
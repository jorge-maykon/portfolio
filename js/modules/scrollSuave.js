export default function initscrollSuave(){

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
    const fechaMenu = new Event("scrollDone")

    function scrollSuave(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });

        document.dispatchEvent(fechaMenu)
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSuave)
    })


}
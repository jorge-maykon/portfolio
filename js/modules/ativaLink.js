export default function initLinkMenu(){

    const links = document.querySelectorAll('.ativaLink li');
    
    function ativaLink(i){
        const linkAtivo = document.querySelectorAll('.header-menu li a[href^="#"]')

        linkAtivo.forEach((link) => {
            link.classList.remove('ativado');
        })
        linkAtivo[i].classList.add('ativado');
    }

    links.forEach((item, i) => {
        item.addEventListener("click", () => {
            ativaLink(i)
        })
    })

}
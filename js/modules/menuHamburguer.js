export default function initmenuHamburguer(){
    
    const btnMenu = document.querySelector('#btn-mobile');

    function ativaMenu(event){
        if(event.type === 'touchstart'){
            event.preventDefault();
        }

        const nav = document.querySelector('nav');
        nav.classList.toggle('ativaMenu')
    }


    btnMenu.addEventListener('click', ativaMenu);
    btnMenu.addEventListener('touchstart', ativaMenu);
    document.addEventListener('scrollDone', ativaMenu)

}
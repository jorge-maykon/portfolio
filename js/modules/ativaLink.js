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

document.getElementById('downloadLink').addEventListener('click', function(e) {
    e.preventDefault();
    Swal.fire({
        title: 'Escolha o idioma do currículo',
        showDenyButton: true,
        confirmButtonText: `Português`,
        denyButtonText: `Inglês`,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./curriculo/curriculopt.pdf";
        } else if (result.isDenied) {
            window.location.href = "./curriculo/curriculov1.6.pdf";
        }
    })
});


var popup = document.getElementById('popup');
var span = document.getElementById('close');

window.onload = function() {
    popup.style.display = "block";
}

span.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

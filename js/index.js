function novaTarefa(){
    overlay.classList.add("active");
}

function fecharModal(){
    overlay.classList.remove("active");
}

document.addEventListener('keyup', (evento) => {
    if(evento.key == "Escape"){
        fecharModal();
    }   
})
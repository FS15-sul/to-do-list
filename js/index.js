function novaTarefa(){
    overlay.classList.add("active");
    modal.classList.add("active");
    criar.classList.add("active");
}

function confirmarExclusao(){
    overlay.classList.add("active");
    modal.classList.add("active");
    confirmacao.classList.add("active");
}

function fecharModal(){
    overlay.classList.remove("active");
    modal.classList.remove("active");
    criar.classList.remove("active");
    confirmacao.classList.remove("active");
}

document.addEventListener('keyup', (evento) => {
    if(evento.key == "Escape"){
        fecharModal();
    }   
});

let tarefas = [
    {
        titulo: "Pendurar quadro",
        descricao: "Furar dois furos na parede para colocar as buchas e pendurar o quadro"
    },
    {
        titulo: "Comer",
        descricao: "Em casa"
    },
    {
        titulo: "Reunião com cliente",
        descricao: "Ir na KF veiculos se reunir com fabricio"
    },
    {
        titulo: "Estudar",
        descricao: "Entender melhor variaveis e constantes"
    },
    {
        titulo: "Comprar capacete",
        descricao: "Ir na loja e comprar o capacete que EU já escolhi e não ceder ao consumismo"
    },
];

function listarTarefas(){
    lista.innerHTML = "";
    tarefas.map((tarefa) => {
        lista.innerHTML += `
            <li>
                <div>
                    <h5>${tarefa.titulo}</h5>
                    <p>${tarefa.descricao}</p>
                </div>
                <div>
                    <box-icon name='trash' onclick="confirmarExclusao()"></box-icon>
                </div>
            </li>
        `;
    })
}

listarTarefas();

function adicionarTarefa(){
    event.preventDefault();
    let tarefa = {
        titulo: titulo.value,
        descricao: descricao.value
    }
    tarefas.push(tarefa);
    fecharModal();
    listarTarefas();
}
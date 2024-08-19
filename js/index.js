function novaTarefa(){
    overlay.classList.add("active");
    modal.classList.add("active");
    criar.classList.add("active");
}

function confirmarExclusao(id){
    overlay.classList.add("active");
    modal.classList.add("active");
    confirmacao.classList.add("active");
    deleteID = id;
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

// let tarefas = [
//     {
//         id: 1,
//         titulo: "Pendurar quadro",
//         descricao: "Furar dois furos na parede para colocar as buchas e pendurar o quadro"
//     },
//     {
//         id: 2,
//         titulo: "Comer",
//         descricao: "Em casa"
//     },
//     {
//         id: 3,
//         titulo: "Reunião com cliente",
//         descricao: "Ir na KF veiculos se reunir com fabricio"
//     },
//     {
//         id: 4,
//         titulo: "Estudar",
//         descricao: "Entender melhor variaveis e constantes"
//     },
//     {
//         id: 5,
//         titulo: "Comprar capacete",
//         descricao: "Ir na loja e comprar o capacete que EU já escolhi e não ceder ao consumismo"
//     },
// ];

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

let deleteID = 0;

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
                    <box-icon name='trash' onclick="confirmarExclusao(${tarefa.id})"></box-icon>
                </div>
            </li>
        `;
    })
}

listarTarefas();

function adicionarTarefa(){
    event.preventDefault();
    let tarefa = {
        id: tarefas.length,
        titulo: titulo.value,
        descricao: descricao.value
    }
    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    fecharModal();
    listarTarefas();
}

function deletarTarefa(){
    let tarefasFiltradas = [];
    tarefasFiltradas = tarefas.filter(tarefa => {
        if(tarefa.id != deleteID){
            return tarefa;
        }
    });
    tarefas = tarefasFiltradas;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    fecharModal();
    listarTarefas();
}
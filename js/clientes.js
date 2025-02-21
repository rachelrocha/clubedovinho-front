const TABLE = document.getElementById('table-cliente');


fetch(`https://feitoza.tec.br/api/index.php`)
        .then(res => res.json())
        .then( cliente => {
            cliente.forEach(lista => {
                
        TABLE.innerHTML += `
        <tr>
            <td>${lista.id}</td>
            <td>${lista.nome}</td>
            <td>${lista.email}</td>
            <td>${lista.telefone}</td>
            <td> <img src="${lista.foto}" width="50" data-bs-toggle="modal" data-bs-target="#exampleModal" </td>
            <td>${lista.data_cadastro}</td>
            <td>${lista.data_ultimo_pedido}</td>
            <td>
                <a href="#" class="btn btn-outline-warning btn-sm">
                    Editar
                </a>

                <a href="#" class="btn btn-outline-danger btn-sm">
                    Excluir
                </a>
            </td>
        </tr>

    `;
            });

        
          
        });
        
        
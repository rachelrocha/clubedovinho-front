const TABLE = document.getElementById('table-categories');


let dados = [

    {

        id: 1,
        nome: 'Espumante',
        descricao: 'Des do espumante',
    },


    {

        id: 2,
        nome: 'Branco',
        descricao: 'Vinho de Uva Branco',
    },


    {

        id: 3,
        nome: 'Verde',
        descricao: 'Vinho de uvas verdes, exclusivamente',
    },


    
    {

        id: 4,
        nome: 'Rose',
        descricao: 'Vinho de uvas verdes, exclusivamente',
    },
]

dados.forEach(AddLinha);

function AddLinha(categoria) {

    TABLE.innerHTML += `

<tr>
                        <td>${categoria.id}</td>
                            <td>${categoria.nome}</td>
                            <td>${categoria.descricao}</td>
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


}





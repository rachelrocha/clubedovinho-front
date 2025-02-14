const TABLE = document.getElementById('table-paises');

let dados = [

    {

        id: 1,
        nome: 'Brasil',
    
    },


    {

        id: 2,
        nome: 'Argentina',
    
    },


    {

        id: 3,
        nome: 'Chile',
       
    },


    
    {

        id: 4,
        nome: 'França',
    },


]

dados.forEach((paises)=> {

    TABLE.innerHTML += `

<tr>
                        <td>${paises.id}</td>
                            <td>${paises.nome}</td>
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



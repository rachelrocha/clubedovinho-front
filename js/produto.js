const TABLE = document.getElementById('table-produto');

let dados = [

    {

        id: 1,
        nome: 'Vale Real',
        categoria : 'Vinho',
        imagem : 'https://phygital-files.mercafacil.com/catalogo/uploads/produto/vinho_vale_real_900ml_a4b3654b-d5ad-475c-9eda-6eaea8d339ff.jpeg',
        quantidade: '7',
        valor: '$5,00',
    
    },


    {

        id: 1,
        nome: 'São Braz',
        categoria : 'Vinho',
        imagem : 'https://deskontao.agilecdn.com.br/25537_1.jpg',
        quantidade: '7',
        valor: '$5,00',
    
    },


    {

        id: 1,
        nome: 'São Bento',
        categoria : 'Vinho',
        imagem : 'https://cdn.awsli.com.br/1958/1958204/produto/203245775/screenshot_20230223_190651_instagram-pamtvr.jpg',
        quantidade: '7',
        valor: '$5,00',
    
    },

];

dados.forEach((produto)=> {

    TABLE.innerHTML += `
        <tr>
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.telefone}</td>
            <td> <img src="${produto.imagem}" onclick="abrirModal('${produto.nome}' ,'${produto.imagem}')" width="50px" data-bs-toggle="modal" data-bs-target="#exampleModal"></td>
            <td>${produto.quantidade}</td>
            <td>${produto.valor}</td>
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


function abrirModal(nome, imagem){
    document.getElementById('modal_produto_nome').innerHTML = nome;
    document.getElementById('modal_produto_body').innerHTML = `
    
    <img src= "${imagem}" width="100%">
    
    `;
}



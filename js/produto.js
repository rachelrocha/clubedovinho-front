const TABLE = document.getElementById('table-produto');

    fetch('http://localhost:3000/products')
        .then (res => res.json())
        .then (dados => {
            dados.forEach((products)=> {
                TABLE.innerHTML += `
                    <tr>
                        <td>${products.id}</td>
                        <td>${products.name}</td>
                        <td>${products.category}</td>
                        <td> <img src="${products.image}" onclick="abrirModal('${products.name}' ,'${products.image}')" width="50px" data-bs-toggle="modal" data-bs-target="#exampleModal"></td>
                        <td>${products.quantity}</td>
                        <td>${products.price}</td>
                        <td>
                            <a href="#" class="btn btn-outline-warning btn-sm">
                                Editar
                            </a>
            
                            <a href="#" onclick = "excluir(${products.id})" class="btn btn-outline-danger btn-sm">
                                Excluir
                            </a>
                        </td>
                    </tr>
            
                `;
            
            
            });

            

        

        });


    function abrirModal(nome, imagem){
        document.getElementById('modal_produto_nome').innerHTML = nome;
        document.getElementById('modal_produto_body').innerHTML = `
        
        <img src= "${imagem}" width="100%">
        
        `;
    }

    function excluir(id) {

        if(false === confirm ('Confirma que deseja excluir o produto?')){
            return;
        }


        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'


        });

        alert("Produto Excluído");
        location.href = "";

    }



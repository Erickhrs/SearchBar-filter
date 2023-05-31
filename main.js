//selecionando os elementos
let searchbar = document.getElementById("searchbar");
let list = document.getElementById("list");

//ação para cada vez que o input mudar
searchbar.addEventListener('input', function (){
    //pegando o valor escrito e passando pra lowercase, para comparar dps
    let value = searchbar.value.toLowerCase();
    //pegando todos os elementos "li" do elemento "list" e passando pra essa variável
    let elements = list.getElementsByTagName("li");

    //passando tudo pra uma array e depois passando cada elemento como parametro pra função
    Array.from(elements).forEach((item) =>{
        //recebe o texto dentro do elemento e passa pra lowercase pra comparar lá em cima
        let value_item = item.textContent.toLowerCase();
        //valida se acha ou não o valor dentro da string, muda o display
        if(value_item.indexOf(value) !== -1){
            item.style.display = "block"
        }
        else{
            item.style.display = "none"
        }
    });

})
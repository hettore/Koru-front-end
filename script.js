
window.onload = function() {
        // comentario em linha
        /*
        comnetario em bloco
        */

        var idade = 31; // tipo numero
        var altura = 1.60; // numero futuante

        var nome = "Hettore Eduardo"; // string (texto)
        var sobrenome = "Silva";

        //operadores aritméticos
        // + - * / 

        console.log(idade * altura);

        // concatenar (reunir os conteudos)
        var nomeCompleto = nome + " " + sobrenome;
        nome += " " + sobrenome;
        console.log(nome);
        console.log(nomeCompleto);

        //tipo de dado booleano
        var x = true;
        var y = false;

        //objeto
        var aluno = {nome: "hettore", sobrenome: "Silva", status: true, curso: {nome: "Front-end", turma: 123, inicio: "20"}};
        console.log(aluno);
        console.log(aluno.nome);
        console.log(aluno.curso.nome);
        aluno.nome = "Marina";
        console.log(aluno.nome);

        //array (lista de itens, para armazenar varios valores)
        var disciplinas = ["Front-End","UX/UI","Back-End", 789, ["A","B","C"]];
        console.log(disciplinas);
        console.log(disciplinas[2]);
        console.log(disciplinas[4][2]);

        disciplinas[0] = "Protótipo";
        console.log(disciplinas);


        //const são variaveis que não mudam de valor
        const nome3 = "Hettore";

        //var e let são variaveis que podem mudar e valor
        var nome1 = "Lucas";
        var nome1 = "hettore";
        console.log(nome1);

        //variavel let não pode ser redeclarada
        //let nome2 = "";
        let nome2 = "Caetano";
        console.log(nome2);
        //não pode ser utilizada fora do seu contexto de declaração
        // {
        //     let nome3 = "Katia";
        // }

        // console.log(nome3);

        //BLOCOS DE CONTROLE OU DE CONSTRUÇÃO
        //operdadores de condição
        //< > <= >=
        // != diferente
        // ! condição não verdadeira

        var a = 5;
        if(a > 5){
        // alert("é sim!");
        } else if(a < 5){
            //se for verdadeiro
        } else {
            //não é verdadeiro
        }

        //operador de condição ternário

        var hora = 20;
        var status = hora > 18 ? "noite" : "dia" ;

        //exemplo da sintaxe= var status = (condicao) ? true : false;
        /*
        var status = hora > 18 ? "noite" : hora > 24 ? "dia" : "noite";

        if(hora > 18){
            status = "noite";
        }else{
            status = "dia";
        }
        */

        //LOOP
        //repetir uma tarefa igual várias vzs dependendo de um critério

        for(var i = 0; i < disciplinas.length; i++){
            console.log(disciplinas[i]);
        }

        //DOM

        //por ID retorna um unico objeto
        var titulo = document.getElementById("titulo");
        console.log(titulo);

        //por tag retorna uma lista
        var paragrafos = document.getElementsByTagName("p");
        console.log(paragrafos);

        //pelo atributo class
        var secoes = document.getElementsByClassName('modelo');
        console.log(secoes);

        //pelos seletores CSS
        //querySelector captura o primeiro elemnto que encontrar
        var a = document.querySelector("#titulo");
        console.log(a);

        // querySelectorAll captura uma lista de elementos
        var links = document.querySelectorAll("a");
        console.log(links);
        //nodeList retorna uma versão estática.Só é retornada com o QueryAll

        //HTMLCollection retorna uma versão live do html. Todo o restante das consultas

    //acessando os atributos dos objetos
        var img = document.getElementsByTagName("img");
        var src = img[0].src;
    //atribuir novo valor aos atributoS HTML
        img[0].alt = "novo alt";
        console.log(src);

    //modificar o estilo CSS dos elementos
        //img[0].style.display = "none";

    //modificar a classe dos elementos (sobrepor as classe q ele tiver)
        //img[0].className = "opacidade"; 

    //forma mais gerenciavel de modificar as classes do elemento
        img[0].classList.add("opacidade");
        img[0].classList.remove("opacidade");

    
        // var bt_teste = document.getElementsByID("bt_teste");

        // //forma simplificada de chamar funcoes em eventos
        // bt_teste.onclick = nomedafuncao;

        // //Usando o EventListener
        // bt_teste.addEventListener("click", nomedafuncao);
        // bt_teste.removeEventListener("click", nomedafuncao);

        // //função é uma tarefa a ser executada
        // function nomedafuncao(){

        var secao = document.getElementsById("contato");
        secao.addEventListener('click', mudaropacidade);

        function mudaropacidade() {
            if(this.classList.contains("opacidade")){
                this.classList.remove("opacidade");
            }else{
            this.classList.add("opacidade");
        }
    }




}












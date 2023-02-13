function calcular(){
    var tabuadaDo = parseInt(document.getElementById("tabuadaDo").value);
    var ate = parseInt(document.getElementById("ate").value);
    var mostrar = document.getElementById("mostrar");
    
    limpar()

    mostrar.style.display='block'

    mostrar.innerHTML += '<div class="margem"><p>.</p></div>';
    for(i=0; i<=ate; i++){
        const conta = "<p>"+tabuadaDo+" x "+i+" = "+tabuadaDo*i+"</p>";
        mostrar.innerHTML +=conta;
    }

    mostrar.innerHTML += '<div class="margem"><p>.</p></div>';

}
function limpar(){
    mostrar.innerHTML = ""
    mostrar.style.display='none'
}

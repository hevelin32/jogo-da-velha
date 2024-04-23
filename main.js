var jogador = "x";

var jg1 = []
var jg2 = []

const listaDeVitorias = [

]

function jogar(celula){
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;
        if(jogador == "x"){
            jg1.push(celula);
            console.log(jg1)
            jogador = "o";
        } else{
            jogador = "x"
            jg2.push(celula);
            console.log(jg2)
        }
    }

}
function reiniciar(){
    window.location.reload();
}
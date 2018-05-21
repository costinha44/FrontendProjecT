
//Meter Dia
function dataAtualFormatada(){
        var data = new Date();
        var teste = new Date(data);
        var diaalgar = data.getDate();
        var dia = teste.getDay();
        var mes = teste.getMonth();
        var mesn = new Array(12);
            mesn[0]='Janeiro';
            mesn[1]='Fevereiro';
            mesn[2]='Março';
            mesn[3]='Abril';
            mesn[4]='Maio';
            mesn[5]='Junho';
            mesn[6]='Julho';
            mesn[7]='Agosto';
            mesn[8]='Setembro';
            mesn[9]='Outubro';
            mesn[10]='Novembro';
            mesn[11]='Dezembro';
        var semana = new Array(6);
        semana[0]='Domingo';
        semana[1]='Segunda-Feira';
        semana[2]='Terça-Feira';
        semana[3]='Quarta-Feira';
        semana[4]='Quinta-Feira';
        semana[5]='Sexta-Feira';
        semana[6]='Sábado';
        if (diaalgar.toString().length == 1){
                diaalgar = "0"+diaalgar;
            }
                var ano = data.getFullYear();

     document.getElementsByClassName("data")[0].innerHTML=(semana[dia]+","+diaalgar+" "+mesn[mes]+" de "+ano);

}
dataAtualFormatada();

//FAzer slide mudar quando dado hover
$("ul.slide li").hover(function() {
  // $('ul.slide li')
     valor=$(this).attr("rel");
     img= new Array(5);
     img[0]='img/tab1.png';
     img[1]='img/tab2.gif';
     img[2]='img/tab3.jpg';
     img[3]='img/tab4.png';
     img[4]='img/tab5.jpg';
      
    if(valor==='0'){
      $('.slideimg img').attr("src",img[0]);
    }else if(valor==='1'){
      $('.slideimg img').attr("src",img[1]);
    }else if(valor ==='2'){
      $('.slideimg img').attr("src",img[2]);
    }else if (valor ==='3') {
      $('.slideimg img').attr("src",img[3]);
    }else{
      $('.slideimg img').attr("src",img[4]);
    }
});

//Imagem logo random

$(document).ready(function() {

var images= ['logo1.jpg','logo2.jpg','logo3.jpg','logo4.jpg','logo5.jpg','logo6.jpg','logo7.jpg','logo8.jpg','logo9.jpg','logo10.jpg'];
$('.logo').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
});

//Tab

function tab4(tabs) {
    var i;
    var x = document.getElementsByClassName("tab");
    var addClass=document.getElementsByClassName("btn_tab");
//    for (i = 0; i < addClass.length; i++) {
//        addClass[i].classList.remove('active');
//    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        
    }
    document.getElementById(tabs).style.display = "block";
//    addClass.classList.add('active');
    
}



const appFilmes = {
}

//var infoFilme = //{Nome:'',Ano:'',Diretor: ''};
//var filmes = ['Gênio Indomavel','UP', 'Rio'];
var infoFilmes = [
  {Nome: "Genio Indomável", ImgURL:"https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
   URL: 'https://www.imdb.com/title/tt0119217/?ref_=fn_al_tt_1',
   Ano:'',
  Diretor: ""},
  {Nome:'UP',
   ImgURL: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
   URL: 'https://www.imdb.com/title/tt1049413/?ref_=nv_sr_srsg_4',
   Ano : '',
   Diretor: '',
  },
  {Nome:'Rio',
   ImgURL: 'https://m.media-amazon.com/images/M/MV5BMTU2MDY3MzAzMl5BMl5BanBnXkFtZTcwMTg0NjM5NA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
   URL: 'https://www.imdb.com/title/tt1436562/?ref_=nv_sr_srsg_0',
   Ano : '',
   Diretor: '',
  },
  
   {Nome: 'Hotel Transilvânia',
	  ImgURL: 'https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
	  URL: 'https://www.imdb.com/title/tt0837562/?ref_=fn_al_tt_1',
	  Ano: '',
	  Director:''
  },
  
  {Nome: 'A Viagem Chihiro',
	  ImgURL: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
	  URL: 'https://www.imdb.com/title/tt0245429/?ref_=fn_al_tt_1',
	  Ano: '',
	  Director:''
  },
  
   {Nome: 'Zootopia',
	  ImgURL: 'https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_UX182_CR0,0,182,268_AL_.jpg',
	  URL: 'https://www.imdb.com/title/tt2948356/?ref_=adv_li_tt',
	  Ano: '',
	  Director:''
  },
  
 
  
];

var efilm = document.getElementById("lista-filmes");

var i=0;

for(i=0; i < infoFilmes.length; i++){
	efilm.innerHTML += '<div id="filme">'+'<a href="'+infoFilmes[i].URL+'">'+'<img width="90px" src="'+infoFilmes[i].ImgURL+'">'+'</a>' + infoFilmes[i].Nome + '</div>';
	//efilm.innerHTML += '<div id="filme">' + '<img  width="90px" src='+'"'+infoFilmes[1].ImgURL+'"'+'>' + infoFilmes[1].Nome +'</div>';
	//efilm.innerHTML += '<div id="filme">' + '<img  width="90px" src='+'"'+infoFilmes[2].ImgURL+'"'+'>'+ infoFilmes[2].Nome + '</div>';
};





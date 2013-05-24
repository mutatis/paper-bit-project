function Game1SceneLevel1()
{
	   
		this.button = new MyButton("imgs/close.png", 50, 50, 720, 10);
		//source
		this.fundo_move = new Game_1_fundo_move("imgs/game_1/fundo_move.png")
		this.fundo_janela = new Background ("imgs/game_1/janela_fundo.png")

	   
	    var tela_tamanho_w = 800;
	    var tela_tamanho_h = 600;
	    	    
		var tempoSeg1 = 0
		var tempoSeg2 = 0
		var tempoSeg3 = 0
		var tempoSeg4 = 0
		this.pontos = 0
		var cronometro = 0
		var game_over = false;
		var game_win = false;
		
		var som_fundo = new Audio();
		var som_acertar = new Audio();
		var som_errar = new Audio();
		var som_perder = new Audio();
		var som_vencer = new Audio();
		
		var fundo_imagem = new Image();
		var fundo_carregada = false;
		var fundo_tamanho_w = 800;
		var fundo_tamanho_h = 600;
		var fundo_posicao_x = 0;
		var fundo_posicao_y = 0;
		var fundo_visivel = true;
		
		var play_imagem = new Image();
		var play_carregada = false;
		var play_tamanho_w = 800;
		var play_tamanho_h = 600;
		var play_posicao_x = 0;
		var play_posicao_y = 0;
		var play_visivel = true;
			  
	    var alvo1_imagem = new Image();
	    var alvo1_carregada = false;
        var alvo1_HP = 25;
        var alvo1_tamanho_w = 100;
        var alvo1_tamanho_h = 100;
        var alvo1_posicao_x = Math.floor((Math.random()*(tela_tamanho_w - alvo1_tamanho_w))+1);
        var alvo1_posicao_y = Math.floor((Math.random()*(tela_tamanho_h - alvo1_tamanho_h))+1);
        var alvo1_pontos = 10;
        var alvo1_velocidade;
        var alvo1_permanece = 20;
        var alvo1_reaparece = false;
        var alvo1_visivel = true;

        var alvo2_imagem = new Image();
        var alvo2_carregada = false;
	    var alvo2_HP = 50;
		var alvo2_tamanho_w = 100;
		var alvo2_tamanho_h = 100;
		var alvo2_posicao_x = Math.floor((Math.random()*(tela_tamanho_w - alvo2_tamanho_w))+1);
		var alvo2_posicao_y = Math.floor((Math.random()*(tela_tamanho_h - alvo2_tamanho_h))+1);
		var alvo2_pontos = 25;
		var alvo2_velocidade;
		var alvo2_permanecer = 15;
		var alvo2_reaparecer = 15;
		var alvo2_visivel = true;		

		var alvo3_imagem = new Image();
		var alvo3_carregada = false;
		var alvo3_HP = 75;
		var alvo3_tamanho_w = 100;
		var alvo3_tamanho_h = 100;
		var alvo3_posicao_x = Math.floor((Math.random()*(tela_tamanho_w - alvo3_tamanho_w))+1);
		var alvo3_posicao_y = Math.floor((Math.random()*(tela_tamanho_h - alvo3_tamanho_h))+1);
		var alvo3_pontos = 50;
		var alvo3_velocidade;
		var alvo3_permanecer = 10;
		var alvo3_reaparecer = 20;
		var alvo3_visivel = true;

		var alvo4_imagem = new Image();
		var alvo4_carregada = false;
		var alvo4_HP;
		var alvo4_tamanho_w = 100;
		var alvo4_tamanho_h = 100;
		var alvo4_posicao_x = Math.floor((Math.random()*(tela_tamanho_w - alvo4_tamanho_w))+1);
		var alvo4_posicao_y = Math.floor((Math.random()*(tela_tamanho_h - alvo4_tamanho_h))+1);
		var alvo4_pontos = -15;
		var alvo4_velocidade;
		var alvo4_pemanecer = 25;
		var alvo4_reaparecer = 20;
		var alvo4_visivel = true;

		//var SCENEGAME1 = {INTRO: 0, GAME: 1};
		//var currentSceneGame1 = SCENEGAME1.GAME;
		
Load();
	  	
function Load()
{
	
	
	alvo1_imagem.src="imgs/game_1/alvo1_imagem.png"
	alvo1_imagem.onload = function() { alvo1_carregada = true; 
	console.log("alvo1_imagem")}
	
	alvo2_imagem.src="imgs/game_1/alvo2_imagem.png"
	alvo2_imagem.onload = function() { alvo2_carregada = true; 
	console.log("alvo2_imagem")}
	
	alvo3_imagem.src="imgs/game_1/alvo3_imagem.png"
	alvo3_imagem.onload = function() { alvo3_carregada = true; 
	console.log("alvo3_imagem")}
	
	alvo4_imagem.src="imgs/game_1/alvo4_imagem.png"
	alvo4_imagem.onload = function() { alvo4_carregada = true; 
	console.log("alvo4_imagem")}
		
	console.log("Load");
	
	//som_fundo.src = "sounds/game_1/som_fundo.mp3";
	//som_fundo.load();
	//som_fundo.loop = true; 
	//som_fundo.volume = 0.25;
	//som_fundo.play();
	
	som_perder.src= "sounds/game_1/som_perder.mp3"
	som_perder.load();
	som_perder.loop = true;
	som_perder.volume = 1.0
	
	som_vencer.src= "sounds/game_1/som_vencer.mp3"
	som_vencer.load();
	som_vencer.loop = true;
	som_vencer.volume = 1.0
	
	som_acertar.src = "sounds/game_1/som_acertar.mp3";
	som_acertar.load();
	som_acertar.volume = 1.0
		
	som_errar.src= "sounds/game_1/som_errar.mp3"
	som_errar.load();
	som_errar.volume = 1.0
	
	if((alvo1_carregada)&&(alvo2_carregada)&&(alvo3_carregada)&&(alvo4_carregada))
	{
		Loop();		
	}
	else
	{
		setTimeout(Load, 30 ) ;
	}
}

this.update=function()
{
	
			this.fundo_move.update();
			
			if(game_over == true)//tela de perdeu
			{
			currentGameScene = SCENE.THEEND;
			game1.currentGameScene = game1.GAMESCENE.THEEND;
			
			}
			
			
			tempoSeg1++;
			tempoSeg2++;
			tempoSeg3++;
			tempoSeg4++;
			cronometro++;
					
			if(tempoSeg1 > 20)
			{
				alvo1_visivel = false;
			}
			if(tempoSeg1 > 50)
			{
				alvo1_visivel = true;
				alvo1_posicao_x = Math.floor((Math.random()*(tela_tamanho_w - alvo1_tamanho_w))+1);
				alvo1_posicao_y = Math.floor((Math.random()*(tela_tamanho_h - alvo1_tamanho_h))+1);
				tempoSeg1 = 0
			}
			if(tempoSeg2 > 40)
			{
				alvo2_visivel = false;
			}
			if(tempoSeg2 > 70)
			{
				alvo2_visivel = true;
				alvo2_posicao_x = Math.floor((Math.random()*(tela_tamanho_w - alvo2_tamanho_w))+1);
				alvo2_posicao_y = Math.floor((Math.random()*(tela_tamanho_h - alvo2_tamanho_h))+1);
				tempoSeg2 = 0
			}
			if(tempoSeg3 > 60)
			{
				alvo3_visivel = false;
			}
			if(tempoSeg3 > 90)
			{
				alvo3_visivel = true;
				alvo3_posicao_x = Math.floor((Math.random()*(tela_tamanho_w - alvo3_tamanho_w))+1);
				alvo3_posicao_y = Math.floor((Math.random()*(tela_tamanho_h - alvo3_tamanho_h))+1);
				tempoSeg3 = 0
			}
			if(tempoSeg4 > 80)
			{
				alvo4_visivel = false;
			}
			if(tempoSeg4 > 110)
			{
				alvo4_visivel = true;
				alvo4_posicao_x = Math.floor((Math.random()*(tela_tamanho_w - alvo4_tamanho_w))+1);
				alvo4_posicao_y = Math.floor((Math.random()*(tela_tamanho_h - alvo4_tamanho_h))+1);
				tempoSeg4 = 0
			}	
			
			if(cronometro > 1000)
			{	
				if(this.pontos >= 1000)
				{
					alvo1_visivel = false
					alvo2_visivel = false
					alvo3_visivel = false
					alvo4_visivel = false
					tempoSeg1 = 0
					tempoSeg2 = 0
					tempoSeg3 = 0
					tempoSeg4 = 0
					cronometro = 1000
					som_fundo.pause();
					som_vencer.play();
					game_win = true
				}
				else
				{
					alvo1_visivel = false
					alvo2_visivel = false
					alvo3_visivel = false
					alvo4_visivel = false
					tempoSeg1 = 0
					tempoSeg2 = 0
					tempoSeg3 = 0
					tempoSeg4 = 0
					cronometro = 1000
					som_fundo.pause();
					som_perder.play();
					game_over = true
				}
			}
			
			
	}


this.draw=function()
{

		this.fundo_move.draw();
		this.fundo_janela.draw();
			
			//screen.fillStyle = "FFFFFF";
			//screen.font = "20px Arial";
			//screen.fillText("Seu objetivo no jogo é matar o máximo de Aliens possíveis, antes que o tempo chegue", 20, 100);
			//screen.fillText("a 1000!  Será vencedor se tiver os pontos acima de 1000, caso contrário perderás!", 30, 120)
			//screen.fillText("Clicar errado perderas 5 pontos!", 250, 160)
			//screen.fillText("Aliens Verdes ganharas 15 pontos!", 240, 180)
			//screen.fillText("Aliens Roxos ganharas 25 pontos!", 245, 200)
			//screen.fillText("Aliens Azuis ganharas 35 pontos!", 245, 220)
			//screen.fillText("Aliens Vermelhos perderas 10 pontos!", 225, 240)
				
		  	
			
		//screen.clearRect(0,0,800,600);
	
		//console.log("Draw");
				
		this.button.draw();
		
		if(fundo_visivel == true)
		{
			screen.drawImage(fundo_imagem, fundo_posicao_x, fundo_posicao_y);
		}
		if(alvo1_visivel == true)
		{ 
			screen.drawImage(alvo1_imagem, alvo1_posicao_x, alvo1_posicao_y);
		}	
		if(alvo2_visivel == true)
		{
			screen.drawImage(alvo2_imagem, alvo2_posicao_x, alvo2_posicao_y);;
		}
		if(alvo3_visivel == true)
		{
			screen.drawImage(alvo3_imagem, alvo3_posicao_x, alvo3_posicao_y);
		}
		if(alvo4_visivel == true)
		{
			screen.drawImage(alvo4_imagem, alvo4_posicao_x, alvo4_posicao_y);
		}
			
		screen.font = "40px Arial";
		screen.fillStyle="ED1C24";
		screen.fillText("Tempo: "+cronometro,  20, 40);
		screen.fillText("Pontos: "+this.pontos, 500, 40);
		
		if(game_win == true)
		{
			screen.font = "30px Arial";
			screen.fillStyle="FFFFFF";
			screen.fillText("Boa pontuação", 280, 200)
			screen.fillText("Salvou seu planeta. Qual a sensação de ser um heroi?", 30, 300)
		}
		else if(game_over == true)
		{
			screen.font = "30px Arial";
			screen.fillStyle="FFFFFF";
			screen.fillText("Pontuação a desejar", 250, 200)
			screen.fillText("Seria uma pena, seu planeta como uma colônia Alienígena!", 5, 300)
		}
		
		
			
	}


function Loop()
{
	//console.log("Loop");

	update();
		
	draw();
	
	setTimeout(Loop, 30 );
}

function Collide(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if((x1+w1<x2)||(x1>x2+w2)||(y1+h1<y2)||(y1>y2+h2))
	{
		return false;
	}
	else
	{
		return true;
	}
}

window.addEventListener('mousedown', mouse_down, true);

this.mouse_down=function(mouse)
{
	
		  		  

		console.log("down X " + mouse.x + " down Y " + mouse.y);
	
		if(this.button.clicked(mouse))
    	{
    		currentScene = SCENE.MENU;
    		game1.currentGameScene = game1.GAMESCENE.INTRO; 
    		//colocamos 5 porque ele perde pontos ao clicar na tela fora dos alvos...
    		this.pontos = 5;
    		cronometro = 0;
    		
    	 som_fundo.pause(); 
		 som_acertar.pause();
		 som_errar.pause();
		 som_perder.pause();
		 som_vencer.pause();
    		
    		
		  
    	}

		
		if(Collide(mouse.x-10, mouse.y-30, 1, 1, alvo1_posicao_x, alvo1_posicao_y, alvo1_tamanho_w, alvo1_tamanho_h))
		{
			this.pontos+= 15;
			alvo1_visivel = false;
			som_acertar.play();
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, alvo2_posicao_x, alvo2_posicao_y, alvo2_tamanho_w, alvo2_tamanho_h))
		{
			this.pontos+= 25;
			alvo2_visivel = false;
			som_acertar.play();
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, alvo3_posicao_x, alvo3_posicao_y, alvo3_tamanho_w, alvo3_tamanho_h))
		{
			this.pontos+= 35;
			alvo3_visivel = false;
			som_acertar.play();
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, alvo4_posicao_x, alvo4_posicao_y, alvo4_tamanho_w, alvo4_tamanho_h))
		{
			this.pontos-= 10;
			alvo4_visivel = false;
			som_errar.play();
		}
		else
		{
			this.pontos-= 5;
			som_errar.play();
		}
	
			//break;
	}
	
	    this.mouse_up=function(mouse)
    {
                //
        
    }
	
		this.mouse_move=function(mouse)
  	{
  		//console.log("Game3 mouse X " + mouse.x + " mouse Y " + mouse.y );
  		
  		if(this.button.mouse_over(mouse))
  		{
  			
  			this.button.current_frame = 0;
  		}
  		else
  		{
  			this.button.current_frame = 1;
  		}
		
	}


}
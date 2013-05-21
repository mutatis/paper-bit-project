function Game1SceneLevel1()
{
	   
		this.button = new Button("imgs/button_credit.png", 250, 80, 200, 380);

	   
	    this.tela_tamanho_w = 800;
	    this.tela_tamanho_h = 600;
	    	    
		this.tempoSeg1 = 0
		this.tempoSeg2 = 0
		this.tempoSeg3 = 0
		this.tempoSeg4 = 0
		this.pontos = 0
		this.cronometro = 0
		this.game_over = false;
		this.game_win = false;
		
		/*this.som_fundo = new Audio();
		this.som_acertar = new Audio();
		this.som_errar = new Audio();
		this.som_perder = new Audio();
		this.som_vencer = new Audio();*/
		
		this.fundo_imagem = new Image();
		this.fundo_carregada = false;
		this.fundo_tamanho_w = 800;
		this.fundo_tamanho_h = 600;
		this.fundo_posicao_x = 0;
		this.fundo_posicao_y = 0;
		this.fundo_visivel = true;
		
		this.play_imagem = new Image();
		this.play_carregada = false;
		this.play_tamanho_w = 800;
		this.play_tamanho_h = 600;
		this.play_posicao_x = 0;
		this.play_posicao_y = 0;
		this.play_visivel = true;
			  
	    this.alvo1_imagem = new Image();
	    this.alvo1_carregada = false;
        this.alvo1_HP = 25;
        this.alvo1_tamanho_w = 100;
        this.alvo1_tamanho_h = 100;
        this.alvo1_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo1_tamanho_w))+1);
        this.alvo1_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo1_tamanho_h))+1);
        this.alvo1_pontos = 10;
        this.alvo1_velocidade;
        this.alvo1_permanece = 20;
        this.alvo1_reaparece = false;
        this.alvo1_visivel = true;
		
		
		
        this.alvo2_imagem = new Image();
        this.alvo2_carregada = false;
	    this.alvo2_HP = 50;
		this.alvo2_tamanho_w = 100;
		this.alvo2_tamanho_h = 100;
		this.alvo2_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo2_tamanho_w))+1);
		this.alvo2_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo2_tamanho_h))+1);
		this.alvo2_pontos = 25;
		this.alvo2_velocidade;
		this.alvo2_permanecer = 15;
		this.alvo2_reaparecer = 15;
		this.alvo2_visivel = true;		

		this.alvo3_imagem = new Image();
		this.alvo3_carregada = false;
		this.alvo3_HP = 75;
		this.alvo3_tamanho_w = 100;
		this.alvo3_tamanho_h = 100;
		this.alvo3_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo3_tamanho_w))+1);
		this.alvo3_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo3_tamanho_h))+1);
		this.alvo3_pontos = 50;
		this.alvo3_velocidade;
		this.alvo3_permanecer = 10;
		this.alvo3_reaparecer = 20;
		this.alvo3_visivel = true;

		this.alvo4_imagem = new Image();
		this.alvo4_carregada = false;
		this.alvo4_HP;
		this.alvo4_tamanho_w = 100;
		this.alvo4_tamanho_h = 100;
		this.alvo4_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo4_tamanho_w))+1);
		this.alvo4_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo4_tamanho_h))+1);
		this.alvo4_pontos = -15;
		this.alvo4_velocidade;
		this.alvo4_pemanecer = 25;
		this.alvo4_reaparecer = 20;
		this.alvo4_visivel = true;

		//var SCENEGAME1 = {INTRO: 0, GAME: 1};
		//var currentSceneGame1 = SCENEGAME1.GAME;
		
////Load();
	  	
//this.function.Load()
//{
	
	
	this.alvo1_imagem.src="imgs/game_1/alvo1_imagem.png"
	this.alvo1_imagem.onload = function() { this.alvo1_carregada = true; 
	console.log("alvo1_imagem")}
	
	this.alvo2_imagem.src="imgs/game_1/alvo2_imagem.png"
	this.alvo2_imagem.onload = function() { this.alvo2_carregada = true; 
	console.log("alvo2_imagem")}
	
	this.alvo3_imagem.src="imgs/game_1/alvo3_imagem.png"
	this.alvo3_imagem.onload = function() { this.alvo3_carregada = true; 
	console.log("alvo3_imagem")}
	
	this.alvo4_imagem.src="imgs/game_1/alvo4_imagem.png"
	this.alvo4_imagem.onload = function() { this.alvo4_carregada = true; 
	console.log("alvo4_imagem")}
		
	console.log("Load");
	
	//som_fundo.src = "sounds/game_1/som_fundo.mp3";
	//som_fundo.load();
	//som_fundo.loop = true; 
	//som_fundo.volume = 0.25;
	//som_fundo.play();
	
	/*som_perder.src= "sounds/game_1/som_perder.mp3"
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
	som_errar.volume = 1.0*/
	
	if((this.alvo1_carregada)&&(this.alvo2_carregada)&&(this.alvo3_carregada)&&(this.alvo4_carregada))
	{
		this.Loop();		
	}
	else
	/*{
		setTimeout(Load, 30 ) ;
	}*/
//}

this.update=function()
{
	
					
			if(this.game_over == true)
			{
			
			}
			
			
			this.tempoSeg1++;
			this.tempoSeg2++;
			this.tempoSeg3++;
			this.tempoSeg4++;
			this.cronometro++;
					
			if(this.tempoSeg1 > 20)
			{
				this.alvo1_visivel = false;
			}
			if(this.tempoSeg1 > 50)
			{
				this.alvo1_visivel = true;
				this.alvo1_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo1_tamanho_w))+1);
				this.alvo1_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo1_tamanho_h))+1);
				this.tempoSeg1 = 0
			}
			if(this.tempoSeg2 > 40)
			{
				this.alvo2_visivel = false;
			}
			if(this.tempoSeg2 > 70)
			{
				this.alvo2_visivel = true;
				this.alvo2_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo2_tamanho_w))+1);
				this.alvo2_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo2_tamanho_h))+1);
				this.tempoSeg2 = 0
			}
			if(this.tempoSeg3 > 60)
			{
				this.alvo3_visivel = false;
			}
			if(this.tempoSeg3 > 90)
			{
				this.alvo3_visivel = true;
				this.alvo3_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo3_tamanho_w))+1);
				this.alvo3_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo3_tamanho_h))+1);
				this.tempoSeg3 = 0
			}
			if(this.tempoSeg4 > 80)
			{
				this.alvo4_visivel = false;
			}
			if(this.tempoSeg4 > 110)
			{
				this.alvo4_visivel = true;
				this.alvo4_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo4_tamanho_w))+1);
				this.alvo4_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo4_tamanho_h))+1);
				this.tempoSeg4 = 0
			}	
			
			if(this.cronometro > 1000)
			{	
				if(this.pontos >= 1000)
				{
					this.alvo1_visivel = false
					this.alvo2_visivel = false
					this.alvo3_visivel = false
					this.alvo4_visivel = false
					this.tempoSeg1 = 0
					this.tempoSeg2 = 0
					this.tempoSeg3 = 0
					this.tempoSeg4 = 0
					this.cronometro = 1000
					//som_fundo.pause();
					//som_vencer.play();
					this.game_win = true
				}
				else
				{
					this.alvo1_visivel = false
					this.alvo2_visivel = false
					this.alvo3_visivel = false
					this.alvo4_visivel = false
					this.tempoSeg1 = 0
					this.tempoSeg2 = 0
					this.tempoSeg3 = 0
					this.tempoSeg4 = 0
					this.cronometro = 1000
					//som_fundo.pause();
					//som_perder.play();
					this.game_over = true
				}
			}
			
			
	}


this.draw=function()
{

	
			
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
		
		if(this.fundo_visivel == true)
		{
			screen.drawImage(this.fundo_imagem, this.fundo_posicao_x, this.fundo_posicao_y);
		}
		if(this.alvo1_visivel == true)
		{ 
			screen.drawImage(this.alvo1_imagem, this.alvo1_posicao_x, this.alvo1_posicao_y);
		}	
		if(this.alvo2_visivel == true)
		{
			screen.drawImage(this.alvo2_imagem, this.alvo2_posicao_x, this.alvo2_posicao_y);;
		}
		if(this.alvo3_visivel == true)
		{
			screen.drawImage(this.alvo3_imagem, this.alvo3_posicao_x, this.alvo3_posicao_y);
		}
		if(this.alvo4_visivel == true)
		{
			screen.drawImage(this.alvo4_imagem, this.alvo4_posicao_x, this.alvo4_posicao_y);
		}
			
		screen.font = "40px Arial";
		screen.fillStyle="ED1C24";
		screen.fillText("Tempo: "+this.cronometro,  20, 40);
		screen.fillText("Pontos: "+this.pontos, 500, 40);
		
		if(this.game_win == true)
		{
			screen.font = "30px Arial";
			screen.fillStyle="FFFFFF";
			screen.fillText("Boa pontuação", 280, 200)
			screen.fillText("Salvou seu planeta. Qual a sensação de ser um heroi?", 30, 300)
		}
		else if(this.game_over == true)
		{
			screen.font = "30px Arial";
			screen.fillStyle="FFFFFF";
			screen.fillText("Pontuação a desejar", 250, 200)
			screen.fillText("Seria uma pena, seu planeta como uma colônia Alienígena!", 5, 300)
		}
		
		
			
	}


this.Loop=function()
{
	//console.log("Loop");

	this.update();
		
	this.draw();
	
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
    		this.cronometro = 0;
    		
    	 //som_fundo.pause(); 
		 //som_acertar.pause();
		 //som_errar.pause();
		 //som_perder.pause();
		 //som_vencer.pause();
    		
    		
		  
    	}

		
		if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo1_posicao_x, this.alvo1_posicao_y, this.alvo1_tamanho_w, this.alvo1_tamanho_h))
		{
			this.pontos+= 15;
			this.alvo1_visivel = false;
			//som_acertar.play();
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo2_posicao_x, this.alvo2_posicao_y, this.alvo2_tamanho_w, this.alvo2_tamanho_h))
		{
			this.pontos+= 25;
			this.alvo2_visivel = false;
			//som_acertar.play();
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo3_posicao_x, this.alvo3_posicao_y, this.alvo3_tamanho_w, this.alvo3_tamanho_h))
		{
			this.pontos+= 35;
			this.alvo3_visivel = false;
			//som_acertar.play();
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo4_posicao_x, this.alvo4_posicao_y, this.alvo4_tamanho_w, this.alvo4_tamanho_h))
		{
			this.pontos-= 10;
			this.alvo4_visivel = false;
			//som_errar.play();
		}
		else
		{
			this.pontos-= 5;
			//som_errar.play();
		}
	
			//break;
	}


}
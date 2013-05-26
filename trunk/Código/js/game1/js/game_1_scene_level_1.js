function Game1SceneLevel1()
{
		
		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
		
		
		this.button = new MyButton("imgs/close.png", 50, 50, 720, 10);
		//source
		this.fundo_move = new Game_1_fundo_move("imgs/game_1/fundo_move.png")
		this.fundo_janela = new Background ("imgs/game_1/janela_fundo.png")
	   
	    this.tela_tamanho_w = 800;
	    this.tela_tamanho_h = 600;
		
		//som do saco
		this.music_soco = new Audio();
		this.music_soco.src = "sounds/game_1/socos.mp3"
		this.music_soco.volume = 1.0
	    	    
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
		
		//Vítima
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
				
		//Vítima
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

		//Vítima
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

		//Bandido
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
		
		//Vítima
		this.alvo5_imagem = new Image();
		this.alvo5_carregada = false;
		this.alvo5_HP;
		this.alvo5_tamanho_w = 100;
		this.alvo5_tamanho_h = 100;
		this.alvo5_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo4_tamanho_w))+1);
		this.alvo5_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo4_tamanho_h))+1);
		this.alvo5_pontos = -15;
		this.alvo5_velocidade;
		this.alvo5_pemanecer = 25;
		this.alvo5_reaparecer = 20;
		this.alvo5_visivel = true;
		
		//Bandido
		this.alvo6_imagem = new Image();
		this.alvo6_carregada = false;
		this.alvo6_HP;
		this.alvo6_tamanho_w = 100;
		this.alvo6_tamanho_h = 100;
		this.alvo6_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo6_tamanho_w))+1);
		this.alvo6_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo6_tamanho_h))+1);
		this.alvo6_pontos = -15;
		this.alvo6_velocidade;
		this.alvo6_pemanecer = 25;
		this.alvo6_reaparecer = 20;
		this.alvo6_visivel = true;

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
	
	this.alvo4_imagem.src="imgs/game_1/bandido.png"
	this.alvo4_imagem.onload = function() { this.alvo4_carregada = true; 
	console.log("alvo4_imagem")}
	
	this.alvo5_imagem.src="imgs/game_1/alvo_7.png"
	this.alvo5_imagem.onload = function() { this.alvo5_carregada = true; 
	console.log("alvo4_imagem")}
	
	//this.alvo6_imagem.src="imgs/game_1/bandido.png"
	//this.alvo6_imagem.onload = function() { this.alvo6_carregada = true; 
	//console.log("alvo4_imagem")}
		
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
	this.fundo_move.update();
					
			
			
			
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
			if(this.tempoSeg3 > 90)
			{
				this.alvo3_visivel = true;
				this.alvo3_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo3_tamanho_w))+1);
				this.alvo3_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo3_tamanho_h))+1);
				this.tempoSeg3 = 0
			}
			if(this.tempoSeg4 > 20)
			{
				this.alvo4_visivel = true;
				this.alvo4_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo4_tamanho_w))+1);
				this.alvo4_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo4_tamanho_h))+1);
				this.tempoSeg4 = 0
			}	
			if(this.tempoSeg5 > 80)
			{
				this.alvo5_visivel = true;
				this.alvo5_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo5_tamanho_w))+1);
				this.alvo5_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo5_tamanho_h))+1);
				this.tempoSeg5 = 0
			}
			if(this.tempoSeg6 > 20)
			{
				this.alvo6_visivel = true;
				this.alvo6_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo6_tamanho_w))+1);
				this.alvo6_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo6_tamanho_h))+1);
				this.tempoSeg6 = 0
			}
			
			if(this.cronometro > 1000)
			{	
				if(this.pontos >= 100)
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
					if(this.game_win == true)
					{
					game1.currentGameScene = game1.GAMESCENE.THEEND;  
					this.pontos = 5;
					this.cronometro = 0;
					this.music.play();//som ao ser clicado pelo botão
					this.button.current_frame = 1;
					}

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
					
					if(this.game_over == true)
					{
					game1.currentGameScene = game1.GAMESCENE.GAMEOVER;  
					this.pontos = 5;
					this.cronometro = 0;
					this.music.play();//som ao ser clicado pelo botão
					this.button.current_frame = 1;
					}
				}
			}
			
			
	}


this.draw=function()
{			
		this.fundo_move.draw();
		
		this.fundo_janela.draw();
		
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
		if(this.alvo5_visivel == true)
		{
			screen.drawImage(this.alvo5_imagem, this.alvo5_posicao_x, this.alvo5_posicao_y);
		}
		if(this.alvo6_visivel == true)
		{
			screen.drawImage(this.alvo6_imagem, this.alvo6_posicao_x, this.alvo6_posicao_y);
		}
			
		screen.font = "40px Arial";
		screen.fillStyle="ED1C24";
		//screen.fillText("Tempo: "+this.cronometro,  20, 40);
		screen.fillText("Pontos: "+this.pontos, 20, 40);
		
		
			
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
			this.music.play();//som ao ser clicado pelo botão
			this.button.current_frame = 1;
    		
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
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo2_posicao_x, this.alvo2_posicao_y, this.alvo2_tamanho_w, this.alvo2_tamanho_h))
		{
			this.pontos+= 25;
			this.alvo2_visivel = false;
			//som_acertar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo3_posicao_x, this.alvo3_posicao_y, this.alvo3_tamanho_w, this.alvo3_tamanho_h))
		{
			this.pontos+= 35;
			this.alvo3_visivel = false;
			//som_acertar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		//Pontos bandido
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo4_posicao_x, this.alvo4_posicao_y, this.alvo4_tamanho_w, this.alvo4_tamanho_h))
		{
			this.pontos-= 20;
			this.alvo4_visivel = false;
			//som_errar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo5_posicao_x, this.alvo5_posicao_y, this.alvo5_tamanho_w, this.alvo5_tamanho_h))
		{
			this.pontos+= 20;
			this.alvo5_visivel = false;
			//som_errar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo6_posicao_x, this.alvo6_posicao_y, this.alvo6_tamanho_w, this.alvo6_tamanho_h))
		{
			this.pontos-= 20;
			this.alvo5_visivel = false;
			//som_errar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		else
		{
			this.pontos-= 5;
			//som_errar.play();
		}
	
			//break;
	}



	   	
	   
	
	    this.mouse_up=function(mouse)
    {
                //
        
    }
	
		this.mouse_move=function(mouse)
  	{
  		
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
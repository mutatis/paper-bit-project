function Game1SceneLevel1()
{
		
		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
		
		this.barra_pontos = new Click_pontos("imgs/game_1/barra_pontos.png",180,80,5,20);
		this.vida = new Click_pontos("imgs/game_1/vida.png",180,80,5,100);

		
		this.button = new MyButton("imgs/close.png", 50, 50, 720, 10);
		//source
		this.fundo_move = new Game_1_fundo_move("imgs/game_1/fundo_move.png")
		this.fundo_janela = new Background ("imgs/game_1/janela_fundo.png")
	   
	    this.tela_tamanho_w = 800;
	    this.tela_tamanho_h = 600;
		
		//som de fundo
		this.music_fundo = new Audio();
		this.music_fundo.src = "sounds/game_1/Ripe Hope.mp3"
		this.music_fundo.volume = 1.0
		
		//som do saco
		this.music_soco = new Audio();
		this.music_soco.src = "sounds/game_1/socos.mp3"
		this.music_soco.volume = 1.0
	    
			//tempo de cada alvo, pontos,cronometro, game_over e game_win	
		this.tempoSeg1 = 0;
		this.tempoSeg2 = 0;
		this.tempoSeg3 = 0;
		this.tempoSeg4 = 0;
		this.tempoSeg5=0;
		this.pontos = 0;
		this.cronometro = 0;
		this.game_over = false;
		this.game_win = false;
		this.life = 4;
		
		
		
		
		
		//Vítima
	    this.alvo1_imagem = new Image();
	    this.alvo1_carregada = false;
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
		this.alvo5_tamanho_w = 100;
		this.alvo5_tamanho_h = 100;
		this.alvo5_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo4_tamanho_w))+1);
		this.alvo5_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo4_tamanho_h))+1);
		this.alvo5_pontos = -15;
		this.alvo5_velocidade;
		this.alvo5_pemanecer = 25;
		this.alvo5_reaparecer = 20;
		this.alvo5_visivel = true;
		
		/*
		this.alvo6_imagem = new Image();
		this.alvo6_carregada = false;
		this.alvo6_tamanho_w = 100;
		this.alvo6_tamanho_h = 100;
		this.alvo6_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo6_tamanho_w))+1);
		this.alvo6_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo6_tamanho_h))+1);
		this.alvo6_pontos = -15;
		this.alvo6_velocidade;
		this.alvo6_pemanecer = 25;
		this.alvo6_reaparecer = 20;
		this.alvo6_visivel = true;
		*/

		
	
	//carregando as imagens dos alvos
	this.alvo1_imagem.src="imgs/game_1/alvo1_imagem.png"
	this.alvo1_imagem.onload = function() { this.alvo1_carregada = true; 
	}
	
	this.alvo2_imagem.src="imgs/game_1/alvo2_imagem.png"
	this.alvo2_imagem.onload = function() { this.alvo2_carregada = true; 
	}
	
	this.alvo3_imagem.src="imgs/game_1/alvo3_imagem.png"
	this.alvo3_imagem.onload = function() { this.alvo3_carregada = true; 
	}
	
	this.alvo4_imagem.src="imgs/game_1/bandido.png"
	this.alvo4_imagem.onload = function() { this.alvo4_carregada = true; 
	}
	
	this.alvo5_imagem.src="imgs/game_1/alvo_7.png"
	this.alvo5_imagem.onload = function() { this.alvo5_carregada = true; 
	}
	
	
	
	if((this.alvo1_carregada)&&(this.alvo2_carregada)&&(this.alvo3_carregada)&&(this.alvo4_carregada)&&(this.alvo5_carregada))
	{
		this.Loop();		
	}
	else
	

this.update=function()
{
	//update da imagem de fundo que se move por traz da janela
	this.fundo_move.update();
	//musica de fundo sendo tocada				
	this.music_fundo.play();
			
			//tempo de cada alvo e o cronometro
			this.tempoSeg1++;
			this.tempoSeg2++;
			this.tempoSeg3++;
			this.tempoSeg4++;
			this.tempoSeg5++;
			this.cronometro++;
				
			/*if(this.game_win == true)
			{
				game1.currentGameScene = game1.GAMESCENE.THEEND;  
					this.pontos = 0;
						this.cronometro = 0;
							this.music.play();//som ao ser clicado pelo botão
								this.button.current_frame = 1;
									this.music_fundo.pause();
										this.life = 3;
			}
			
			if(this.game_over == true)
			{
				game1.currentGameScene = game1.GAMESCENE.GAMEOVER;  
				this.pontos = 0;
					this.cronometro = 0;
						this.music.play();//som ao ser clicado pelo botão
							this.button.current_frame = 1;
								this.music_fundo.pause();
									this.life = 3;
				
			}	*/
						
			//se o tempo for maior que 20 o alvo vai ficar invisivel, e depois que ele desaparecer ele vai demorar 50 para ser desenhado de novo e um posiçao aleatoria	
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
			//se o tempo for maior que 20 o alvo vai ficar invisivel, e depois que ele desaparecer ele vai demorar 50 para ser desenhado de novo e um posiçao aleatoria
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
			//se o tempo for maior que 20 o alvo vai ficar invisivel, e depois que ele desaparecer ele vai demorar 50 para ser desenhado de novo e um posiçao aleatoria
			if(this.tempoSeg3 > 90)
			{
				this.alvo3_visivel = true;
				this.alvo3_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo3_tamanho_w))+1);
				this.alvo3_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo3_tamanho_h))+1);
				this.tempoSeg3 = 0
			}
			//se o tempo for maior que 20 o alvo vai ficar invisivel, e depois que ele desaparecer ele vai demorar 50 para ser desenhado de novo e um posiçao aleatoria
			if(this.tempoSeg4 > 20)
			{
				this.alvo4_visivel = true;
				this.alvo4_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo4_tamanho_w))+1);
				this.alvo4_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo4_tamanho_h))+1);
				this.tempoSeg4 = 0
			}	
			//se o tempo for maior que 20 o alvo vai ficar invisivel, e depois que ele desaparecer ele vai demorar 50 para ser desenhado de novo e um posiçao aleatoria
			if(this.tempoSeg5 > 80)
			{
				this.alvo5_visivel = true;
				this.alvo5_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo5_tamanho_w))+1);
				this.alvo5_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo5_tamanho_h))+1);
				this.tempoSeg5 = 0
			}
			//se o tempo for maior que 20 o alvo vai ficar invisivel, e depois que ele desaparecer ele vai demorar 50 para ser desenhado de novo e um posiçao aleatoria
			/*if(this.tempoSeg6 > 20)
			{
				this.alvo6_visivel = true;
				this.alvo6_posicao_x = Math.floor((Math.random()*(this.tela_tamanho_w - this.alvo6_tamanho_w))+1);
				this.alvo6_posicao_y = Math.floor((Math.random()*(this.tela_tamanho_h - this.alvo6_tamanho_h))+1);
				this.tempoSeg6 = 0
			}*/
			//se o cronometro for maior que 1000 e os pontos >= a 700 as imagens serao tiradas da tela, os tempos irao zerar, game_win sera true e vai mudar de cena
			//pausando a musica do jogo, zerando o cronometro e os pontos vao para 5, pois quando voce clica para começar o jogo ele reconhece, entao para resolver
			//esse problema colocamos o valor de 5 quando mudar de cena
			
			 if(this.pontos >= 400)
				{
					this.alvo1_visivel = false;
					this.alvo2_visivel = false;
					this.alvo3_visivel = false;
					this.alvo4_visivel = false;
					this.alvo5_visivel = false;
					this.tempoSeg1 = 0;
					this.tempoSeg2 = 0;
					this.tempoSeg3 = 0;
					this.tempoSeg4 = 0;
					this.tempoSeg5 = 0;
					this.cronometro = 1000;
					this.game_win = true;
					
						if(this.game_win == true)
						{
							game1.currentGameScene = game1.GAMESCENE.THEEND;  
							this.pontos = 0;
							this.cronometro = 0;
							this.music.play();//som ao ser clicado pelo botão
							this.button.current_frame = 1;
							this.music_fundo.pause();
							this.life = 3;
						}

					}	
				
				
				//se nao acontecerem os fatos acima, as imagens serao tiradas da tela, os tempos irao zerar, game_over sera true e vai mudar de cena
				//pausando a musica do jogo, zerando o cronometro e os pontos vao para 5, pois quando voce clica para começar o jogo ele reconhece, entao para resolver
				//esse problema colocamos o valor de 5 quando mudar de cena
				if (this.life == -1 && this.pontos <= 400 || this.cronometro == 500)
				
				{
					this.alvo1_visivel = false;
					this.alvo2_visivel = false;
					this.alvo3_visivel = false;
					this.alvo4_visivel = false;
					this.alvo5_visivel = false;
					this.tempoSeg1 = 0;
					this.tempoSeg2 = 0;
					this.tempoSeg3 = 0;
					this.tempoSeg4 = 0;
					this.tempoSeg5 = 0;
					this.cronometro = 1000;
					this.game_over = true;
					
					
						if(this.game_over == true)
						{
							game1.currentGameScene = game1.GAMESCENE.GAMEOVER;  
							this.pontos = 0;
							this.cronometro = 0;
							this.music.play();//som ao ser clicado pelo botão
							this.button.current_frame = 1;
							this.music_fundo.pause();
							this.life = 3;
					
						}
				
				}			
			
	}


this.draw=function()
{		
		
		
		//desenhando o fundo que se move
		this.fundo_move.draw();
		
		//desenhando a janela que fica na frente do fundo que se move
		this.fundo_janela.draw();
		
		//desenhando o botao
		this.button.draw();
		
		//desenhando a barra de pontos
		this.barra_pontos.draw();
		
		//barra de vida
		this.vida.draw();
		
		//se todas as imgens forem igual a verdadeiro, elas serao desenhadas em suas posiçoes
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
		/*if(this.alvo6_visivel == true)
		{
			screen.drawImage(this.alvo6_imagem, this.alvo6_posicao_x, this.alvo6_posicao_y);
		}*/
			
		screen.font = "40px Arial";
		screen.fillStyle="ffffff";
		//screen.fillText("Tempo: "+this.cronometro,  20, 40);
		screen.fillText(this.pontos+"", 60, 80);//desenhando os pontos
		screen.fillText(this.life,90, 155);
		//screen.fillText(this.cronometro, 100, 500);
			
	}

this.Loop=function()
{
	
	//chamando o update dentro do loop
	this.update();
	//chamando o draw dentro do loop
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
//vendo se o evendo "mouse_down"(clicar) acontece
window.addEventListener('mousedown', mouse_down, true);

this.mouse_down=function(mouse)
{
		
		//se clicar no botao, ele volta pra cena do menu, zerando o cronometro, pausando a musica
		if(this.button.clicked(mouse))
    	{
    		currentScene = SCENE.MENU;
    		game1.currentGameScene = game1.GAMESCENE.INTRO; 
    		//colocamos 5 porque ele perde pontos ao clicar na tela fora dos alvos...
    		this.pontos = 5;
    		this.cronometro = 0;
			this.music.play();//som ao ser clicado pelo botão
			this.button.current_frame = 1;
    		this.music_fundo.pause();
    	
    	}
		
		//se o alvo for clicado ele ganhara ou perdera pontos de acordo com cada um, o alvo ficara invisivel, e tocara um efeito sonoro
		if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo1_posicao_x, this.alvo1_posicao_y, this.alvo1_tamanho_w, this.alvo1_tamanho_h) && this.alvo1_visivel == true)
		{
			this.pontos+= 15;
			this.alvo1_visivel = false;
			//som_acertar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo2_posicao_x, this.alvo2_posicao_y, this.alvo2_tamanho_w, this.alvo2_tamanho_h)&& this.alvo2_visivel == true)
		{
			this.pontos+= 25;
			this.alvo2_visivel = false;
			//som_acertar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo3_posicao_x, this.alvo3_posicao_y, this.alvo3_tamanho_w, this.alvo3_tamanho_h)&& this.alvo3_visivel == true)
		{
			this.pontos+= 35;
			this.alvo3_visivel = false;
			//som_acertar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		//Pontos bandido
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo4_posicao_x, this.alvo4_posicao_y, this.alvo4_tamanho_w, this.alvo4_tamanho_h)&& this.alvo4_visivel == true)
		{
			this.pontos-= 20;
			this.alvo4_visivel = false;
			//som_errar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
			this.life-= 1;
		}
		else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo5_posicao_x, this.alvo5_posicao_y, this.alvo5_tamanho_w, this.alvo5_tamanho_h)&& this.alvo5_visivel == true)
		{
			this.pontos+= 20;
			this.alvo5_visivel = false;
			//som_errar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
		}
		/*else if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.alvo6_posicao_x, this.alvo6_posicao_y, this.alvo6_tamanho_w, this.alvo6_tamanho_h)&& this.alvo5_visivel == true)
		{
			this.pontos-= 20;
			this.alvo5_visivel = false;
			//som_errar.play();
			this.music_soco.play();//som ao ser clicado pelo botão
			this.life-= 1;
		}*/
		//se ele clicar errado, ele perder 5 pontos
		else
		{
			this.pontos-= 5;
			this.life -= 1;
			
		}	
	
			
	}



	   	
	   
		//vendo se o botao do mouse foi solto	
	    this.mouse_up=function(mouse)
    {
                //
        
    }

		//vendo onde o mouse ta na tela	
		this.mouse_move=function(mouse)
  	{
  		//vendo se o mouse passou em cima do botao, se passou desenha a outra parte da imagem, fazendo o botao"acender"
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
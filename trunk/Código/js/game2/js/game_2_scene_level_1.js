function SceneLevel01Game2()
{
	this.button_back = new MyButton("imgs/close.png", 50, 50, 700, 50);
		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
	
	this.fundo1 = new Fundo_paisagem("imgs/game_2/fundo2.png",800,600);
	
	this.fundo = new FundoGame2("imgs/game_2/fundo_catch.png", 0, 0)
		
	this.obstaculo = new Array();
	
	this.criarHeroi=function()
	{
		this.heroi = new PlayerGame2("imgs/game_2/bambu.png", 200, 100)
	}
	
	this.criarObstaculos=function()
	{
		this.obstaculo.push(new ObstaculoGame2("imgs/game_2/panda1.png", 100, 100, 20, 0));

		this.obstaculo.push(new ObstaculoGame2("imgs/game_2/panda2.png", 100, 100, 30, 0));

		this.obstaculo.push(new ObstaculoGame2("imgs/game_2/panda3.png", 70, 70, 5, 0));	

		this.obstaculo.push(new ObstaculoGame2("imgs/game_2/panda4.png", 70, 70, 10, 0));
	
		this.obstaculo.push(new ObstaculoGame2("imgs/game_2/vida.png", 200, 50, 0, 1));
	}
	
	this.som_win = new Audio();
	this.som_win.src = "sounds/game_2/som_vencer.mp3";
	this.som_win.load();
	this.som_win.loop = true; 
	this.som_win.volume = 1.0;
	
	this.som_over = new Audio();
	this.som_over.src = "sounds/game_2/som_vencer.mp3";
	this.som_over.load();
	this.som_over.loop = true; 
	this.som_over.volume = 1.0;
	
	this.criarObstaculos();
	
	this.criarHeroi();
	
	//função Reset, faz o jogo começar do 0.
	this.resetGame2=function()
	{		
		this.heroi.vida = 3;
		this.heroi.pontos = 0;
 		this.obstaculo = [];
		this.criarObstaculos();
		this.heroi = [];
		this.criarHeroi();		
	}	
	
	this.update = function()
	{
		this.fundo.update();
		
		this.heroi.update();
	
		for(var i = 0; i < this.obstaculo.length; i++)
		{
		//faz o pessoa cair. 
		this.obstaculo[i].update();
		
		//Faz pessoa colidir com heroi e ganhar pontos ou vida.
		if(Collide(this.obstaculo[i].posicao_x, this.obstaculo[i].posicao_y, this.obstaculo[i].tamanho_w, this.obstaculo[i].tamanho_h, this.heroi.posicao_x, this.heroi.posicao_y, this.heroi.tamanho_w, this.heroi.tamanho_h))	
		{
			this.obstaculo[i].reset();
			this.heroi.pontos += this.obstaculo[i].pontos;
			this.heroi.vida += this.obstaculo[i].vida;
		}
		
		//se a "obstaculo" cair/passar da tela volta pra cima.
		if(this.obstaculo[i].posicao_y > SCREENHEIGHT)		
		{
			this.heroi.vida -= 1;
			this.obstaculo[i].reset();
		}
		
		// se a vida do heroi chegar a 0, perde, logo vai para a cena Game Over.
		if(this.heroi.vida <= 0)
		{
			game2.currentScene = game2.SCENE.OVER;
			this.som_over.play();
			game2.Intro.som_fundo.pause();				
		}
		
		// se a pontos do heroi chegar a 1000, vence, logo vai para a cena Game Win.
		if(this.heroi.pontos >= 1000)
		{
			game2.currentScene = game2.SCENE.WIN;
			this.som_win.play();
			game2.Intro.som_fundo.pause();				
		}
		
		}
	
	}
	
	this.draw = function()
	{	
				
		//desenha o fundo.
		this.fundo.draw();

		
		//desenha o heroi em uma posição.
		screen.drawImage(this.heroi.imagem, this.heroi.posicao_x, this.heroi.posicao_y);
	
	    this.fundo1.draw();
		
	//desenha todos os "obstaculos" em posições diferentes.
	for(var i = 0; i < this.obstaculo.length; i++)
	{
		screen.drawImage(this.obstaculo[i].imagem, this.obstaculo[i].posicao_x, this.obstaculo[i].posicao_y);	
	}
		
		//escreve da tela e conta, vidas e pontos.
		screen.font = "40px Arial";
		screen.fillStyle = "ED1C24";
		screen.fillText("Vidas: " + this.heroi.vida, 20, 40);
		screen.fillText("Pontos: " + this.heroi.pontos, 550, 40);
		
		//desenha o botão pra voltar ao MENU/ESQUELETO.
		this.button_back.draw();
	
	}
	
    this.mouse_down=function(mouse)
    {
    	
		//se o botão for clicked, vai para o MENU/ESQUELETO.
		if(this.button_back.clicked(mouse))
		{//abre if
			console.log("mous x " + mouse.x, "mouse y " + mouse.y)	
			game2.currentScene = game2.SCENE.INTRO;
			currentScene = SCENE.MENU; 
			this.resetGame2();
			game2.Intro.som_fundo.pause();	
			this.music.play();//som ao ser clicado pelo botão
		}//fecha if
    };

    this.mouse_up=function(mouse)
    {
   	   	
    };

    this.key_down=function(key)
    {
   	   	
    	this.heroi.key_down(key);
   	    	
    };
   
    this.key_up=function(key)
    {
    	this.heroi.key_up(key);
  
    };  
    
	this.mouse_move=function(mouse)
  	{
  		//console.log("Game3 mouse X " + mouse.x + " mouse Y " + mouse.y );
  		
  		if(this.button_back.mouse_over(mouse))
  		{
  			
  			this.button_back.current_frame = 0;
  		}
  		else
  		{
  			this.button_back.current_frame = 1;
  		}
		
	};  
   
   
	this.CollideTest=function(x1, y1, w1, h1, x2, y2, w2, h2)
    {
	
	if((x1+w1<x2)||(x1>x2+w2)||(y1+h1<y2)||(y1>y2+h2))
	{
		return false;
	}
	else
	{
		return true;
	}
	
	};
 
}	

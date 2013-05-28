function SceneGameOverGame2()
{
	
	this.over = new FundoGame2("imgs/game_2/over.png", 800, 600); // Imagem de Fundo
	//Botões para o jogo e MENU/ESQUELETO.
	this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
	this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);

	//função Reset, faz o jogo começar do 0.
	this.resetGame2=function()
	{		
		game2.level01.heroi.vida = 3;
		game2.level01.heroi.pontos = 0;
 		game2.level01.obstaculo = [];
		game2.level01.criarObstaculos();
		game2.level01.heroi = [];
		game2.level01.criarHeroi();
	}
		
	this.update = function()
	{//abre update
		
		
	};//fecha update

	this.draw = function()
	{//abre draw
		
		//desenha o fundo Game Over
		this.over.draw();
		
		//desenha botão INTRO/CATCH.	
		this.button_start.draw();
		
		//desenha botão MENU/ESQUELETO.
		this.button_back.draw();
		
	}//fecha draw
	
	this.mouse_down = function(mouse)
	{//abre mouse down
	
		//se este botão clicked, vai direto para INTRO/CATCH.	
		if(this.button_start.clicked(mouse))
		{//abre if
			
			game2.currentScene = game2.SCENE.INTRO;
			game2.level01.som_over.pause();
			this.resetGame2()
			//game2.Intro.som_intro.play();	
			this.button_start.current_frame = 1;
			
		}//fecha if
		
		//se este botão clicked, vai direto para o MENU/ESQUELETO
		if(this.button_back.clicked(mouse))
		{//abre if
			
			currentScene = SCENE.MENU; 
			game2.currentScene = game2.SCENE.INTRO;
			game2.level01.som_over.pause();
			this.resetGame2();
			this.button_back.current_frame = 1;
			
		}//fecha if
		
			
	}//fecha mouse down
	
	this.key_down=function(key)
   {
   	
   };
   
   this.mouse_up=function(mouse)
   {
   	
   };
   
   this.key_up=function(key)
   {
   	
   };
   
   this.mouse_move=function(mouse)
  	{
  		console.log("Game3 mouse X " + mouse.x + " mouse Y " + mouse.y );
  		
  		if(this.button_start.mouse_over(mouse))
  		{
  			this.button_start.current_frame = 0;
  		}
  		else
  		{
  			this.button_start.current_frame = 1;
  		}
		
		if(this.button_back.mouse_over(mouse))
  		{
  			this.button_back.current_frame = 0;
  		}
  		else
  		{
  			this.button_back.current_frame = 1;
  		}
		
  	};
    
}
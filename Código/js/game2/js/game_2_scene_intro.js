function SceneIntroGame2()
{//abre SCENEIntro
	
	this.menu = new FundoGame2("imgs/game_2/menu.png", 0, 0)
	this.jacy = new FundoGame2("imgs/game_2/jacy.png", 0, 0)
	this.boca_move1 = new boca_move ("imgs/boca.png",127 , 80, 130, 225);
	this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
	this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);
	
	//som do botão ao ser clicado
	this.music = new Audio();
	this.music.src = "sounds/Mouse.mp3"
	this.music.volume = 1.0
	
	/*this.som_intro = new Audio();
	this.som_intro.src = "sounds/game_2/som_intro.mp3";
	this.som_intro.load();
	this.som_intro.loop = true; 
	this.som_intro.volume = 1.0;
	this.som_intro.play();*/	
	
	this.som_fundo = new Audio();
	this.som_fundo.src = "sounds/game_2/som_fundo.mp3";
	this.som_fundo.load();
	this.som_fundo.loop = true; 
	this.som_fundo.volume = 1.0;
		
	this.update = function()
	{//abre update
		
		
	};//fecha update

	this.draw = function()
	{//abre draw
		
		this.menu.draw();
			
		this.button_start.draw();
		
		this.button_back.draw();
		this.jacy.draw();
		this.boca_move1.draw();
		
	}//fecha draw
	
	this.mouse_down = function(mouse)
	{//abre mouse down
	
			
		if(this.button_start.clicked(mouse))
		{//abre if
			
			game2.currentScene = game2.SCENE.LEVEL01;
			this.som_fundo.play();	
			//this.som_intro.pause();
			this.music.play();//som ao ser clicado pelo botão
					
		}//fecha if
		
		if(this.button_back.clicked(mouse))
		{//abre if
			
			currentScene = SCENE.MENU; 
			//this.som_intro.pause();
			this.music.play();//som ao ser clicado pelo botão
		
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

}//fecha SCENEIntro
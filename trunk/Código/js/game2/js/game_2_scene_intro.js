function SceneIntro()
{//abre SCENEIntro
	
	this.menu = new FundoGame2("imgs/game_2/menu.png", 0, 0)
	this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
	this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);
	
	//som do botão ao ser clicado
	this.music = new Audio();
	this.music.src = "sounds/Mouse.mp3"
	this.music.volume = 1.0
	
		
	this.update = function()
	{//abre update
		
		
	};//fecha update

	this.draw = function()
	{//abre draw
		
		this.menu.draw();
			
		this.button_start.draw();
		
		this.button_back.draw();
		
	}//fecha draw
	
	this.mouse_down = function(mouse)
	{//abre mouse down
	
			
		if(this.button_start.clicked(mouse))
		{//abre if
			
			game2.currentScene = game2.SCENE.LEVEL01;
			this.music.play();//som ao ser clicado pelo botão
			
		}//fecha if
		
		if(this.button_back.clicked(mouse))
		{//abre if
			
			currentScene = SCENE.MENU;
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
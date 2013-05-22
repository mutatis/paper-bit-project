function SceneIntro()
{//abre SCENEIntro
	
	this.menu = new FundoGame2("imgs/game_2/menu.png", 0, 0)
	this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
	this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);
	
		
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
			
		}//fecha if
		
		if(this.button_back.clicked(mouse))
		{//abre if
			
			currentScene = SCENE.MENU;  
			
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
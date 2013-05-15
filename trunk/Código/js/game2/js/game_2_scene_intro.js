function SceneIntro()
{//abre SCENEIntro
	
	this.menu = new FundoGame2("imgs/game_2/menu.png", 0, 0)
	this.botao_start = new BotaoGame2("imgs/game_2/play.png", 443, 62, 100, 100)
	this.botao_back = new BotaoGame2("imgs/game_2/play.png", 443, 62, 100, 400)
	
		
	this.update = function()
	{//abre update
		
		
	};//fecha update

	this.draw = function()
	{//abre draw
		
		this.menu.draw();
			
		this.botao_start.draw();
		
		this.botao_back.draw();
		
	}//fecha draw
	
	this.mouse_down = function(mouse)
	{//abre mouse down
	
			
		if(this.botao_start.clicado(mouse))
		{//abre if
			
			game2.currentScene = game2.SCENE.LEVEL01;
			
		}//fecha if
		
		if(this.botao_back.clicado(mouse))
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

}//fecha SCENEIntro
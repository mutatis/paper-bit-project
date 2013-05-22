function SceneGame3()
{		
	this.intro = new Game3SceneIntro();
	this.level1 = new Game3SceneLevel1();
	this.theEnd = new Game3SceneTheEnd();
	//this.gameOver = new Game3SceneGameOver();


	
	this.GAMESCENE = { INTRO: 0, LEVEL1: 1, THEEND: 2, GAMEOVER: 3, INSTRU:4};
	
	this.currentGameScene = this.GAMESCENE.INTRO; 
	
	
	this.update=function()
	{			
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
					this.intro.update();
			break;
			case this.GAMESCENE.LEVEL1:
					this.level1.update();
			break;
			case this.GAMESCENE.THEEND:
				this.theEnd.update();
			break;
			case this.GAMESCENE.GAMEOVER:
				gameOver.update();
			break;
		}
	}

	this.draw=function()
	{		

		//this.button_start.draw();
		
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
				this.intro.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("", 20, 20);
			break;
			case this.GAMESCENE.LEVEL1:
				this.level1.draw();

			break;
			case this.GAMESCENE.THEEND:
				this.theEnd.draw();

			break;
			case this.GAMESCENE.GAMEOVER:
				gameOver.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("GAME1 GAMEOVER", 20, 20);
			break;
		}
	}
	
	this.mouse_down=function(mouse)
   	{
		
		switch(this.currentGameScene)
		{
				
			case this.GAMESCENE.INTRO:
				this.intro.mouse_down(mouse);
			break;
			case this.GAMESCENE.LEVEL1:
				this.level1.mouse_down(mouse);

			break;
			case this.GAMESCENE.THEEND:
				this.theEnd.mouse_down(mouse);

				
			break;
			case this.GAMESCENE.GAMEOVER:
				this.currentGameScene = this.GAMESCENE.INTRO;
				currentScene = SCENE.MENU;
				
			break;
		}	
	}
	
	this.mouse_up=function(mouse)
   	{
		
		switch(this.currentGameScene)
		{
				
			case this.GAMESCENE.INTRO:
				
			break;
			case this.GAMESCENE.LEVEL1:
				this.level1.mouse_up(mouse);

			break;
			case this.GAMESCENE.THEEND:
				this.theEnd.mouse_up(mouse);
				 
			break;
			case this.GAMESCENE.GAMEOVER:
				this.currentGameScene = this.GAMESCENE.INTRO;
				currentScene = SCENE.MENU;
			break;
		}	
	}
	
	this.key_down=function(key)
   	{
		
		switch(this.currentGameScene)
		{
				
			case this.GAMESCENE.INTRO:
				
			break;
			case this.GAMESCENE.LEVEL1:
				this.level1.key_down(key);

			break;
			
		}	
	}
	
	this.key_up=function(key)
   	{
		
		switch(this.currentGameScene)
		{
				
			case this.GAMESCENE.INTRO:
				
			break;
			case this.GAMESCENE.LEVEL1:
				this.level1.key_up(key);

			break;
			
			case this.GAMESCENE.GAMETHEEND:
				this.theEnd.key_up(key);
				
			break;

			
		}	
	}
	
	this.mouse_up=function(mouse)
  	{
	       //
  	}	
	//
	//
	//
	//
	//
	//
	
	this.mouse_move=function(mouse)
  	{
  		switch(this.currentGameScene)
		{		
			
			case this.GAMESCENE.INTRO:
			
				this.intro.mouse_move(mouse);

			break;
			
			case this.GAMESCENE.LEVEL1:
			
				this.level1.mouse_move(mouse);

			break;
						
		}	
  		
  	};
  	//
  	//
  	//
  	//
  	//
  	

}
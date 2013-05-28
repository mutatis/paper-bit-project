function SceneGame4()
{		
	this.intro = new Game4SceneIntro();
	this.level4 = new Game4SceneLevel4();
	this.theEnd = new Game4SceneTheEnd();
	this.gameOver = new Game4SceneGameOver();


	
	this.GAMESCENE = { INTRO: 0, LEVEL4: 1, THEEND: 2, GAMEOVER: 3, INSTRU:4};
	
	this.currentGameScene = this.GAMESCENE.INTRO; 
	
	this.update=function()
	{			
		switch(this.currentGameScene)
		{
			case this.GAMESCENE.INTRO:
					this.intro.update();
			break;
			case this.GAMESCENE.LEVEL4:
					this.level4.update();
			break;
			case this.GAMESCENE.THEEND:
				this.theEnd.update();
			break;
			case this.GAMESCENE.GAMEOVER:
				this.gameOver.update();
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
			case this.GAMESCENE.LEVEL4:
				this.level4.draw();

			break;
			case this.GAMESCENE.THEEND:
				this.theEnd.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("", 20, 20);
			break;
			case this.GAMESCENE.GAMEOVER:
				this.gameOver.draw();
				screen.font = "20px Comic Sans MS";
				screen.fillStyle="#000000";
				screen.fillText("", 20, 20);
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
			case this.GAMESCENE.LEVEL4:
				this.level4.mouse_down(mouse);

			break;
			case this.GAMESCENE.THEEND:
				this.theEnd.mouse_down(mouse);

				
			break;
			case this.GAMESCENE.GAMEOVER:
				this.gameOver.mouse_down(mouse);
				
			break;
		}	
	}
	
	this.mouse_up=function(mouse)
   	{
		
		switch(this.currentGameScene)
		{
				
			case this.GAMESCENE.INTRO:
				
			break;
			case this.GAMESCENE.LEVEL4:
				this.level4.mouse_up(mouse);

			break;
			case this.GAMESCENE.THEEND:
				this.currentGameScene = this.GAMESCENE.GAMEOVER;
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
			case this.GAMESCENE.LEVEL4:
				this.level4.key_down(key);

			break;
			
		}	
	}
	
	this.key_up=function(key)
   	{
		
		switch(this.currentGameScene)
		{
				
			case this.GAMESCENE.INTRO:
				
			break;
			case this.GAMESCENE.LEVEL4:
				this.level4.key_up(key);

			break;

			
		}	
	}
	
	this.mouse_move=function(mouse)
  	{
  		//console.log("Game4 mouse X " + mouse.x + " mouse Y " + mouse.y );
  		
		  		switch(this.currentGameScene)
		{		
			
			case this.GAMESCENE.INTRO:
			
				this.intro.mouse_move(mouse);

			break;
			
			case this.GAMESCENE.LEVEL4:
			
				this.level4.mouse_move(mouse);

			break;
			
			case this.GAMESCENE.THEEND:
			
				this.theEnd.mouse_move(mouse);

			break;
			
			case this.GAMESCENE.GAMEOVER:
			
				this.gameOver.mouse_move(mouse);

			break;
						
		}	
  	};

}
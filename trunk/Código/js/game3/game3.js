function SceneGame3()
{		
	this.intro = new Game3SceneIntro();
	this.level1 = new Game3SceneLevel1();
	//this.theEnd = new Game3SceneTheEnd();
	//this.gameOver = new Game3SceneGameOver();
	//this.button_start = new Button("imgs/game_3/play1.png", 250, 80, 575, 380);

	
	this.GAMESCENE = { INTRO: 0, LEVEL1: 1, THEEND: 2, GAMEOVER: 3};
	
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
			//case this.GAMESCENE.THEEND:
				//theEnd.update();
			//break;
			//case this.GAMESCENE.GAMEOVER:
				//gameOver.update();
			//break;
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
			//case this.GAMESCENE.THEEND:
				//theEnd.draw();
				//screen.font = "20px Comic Sans MS";
				//screen.fillStyle="#000000";
				//screen.fillText("GAME1 THEEND", 20, 20);
			//break;
			//case this.GAMESCENE.GAMEOVER:
				//gameOver.draw();
				//screen.font = "20px Comic Sans MS";
				//screen.fillStyle="#000000";
				//screen.fillText("GAME1 GAMEOVER", 20, 20);
			//break;
		}
	}
	
	this.mouse_down=function(mouse)
   	{
		
		switch(this.currentGameScene)
		{
				
				case this.GAMESCENE.INTRO:
				this.currentGameScene = this.GAMESCENE.LEVEL1;
			break;
			//case this.GAMESCENE.LEVEL1:
			//	this.currentGameScene = this.GAMESCENE.THEEND;
			//break;
			//case this.GAMESCENE.THEEND:
			//	this.currentGameScene = this.GAMESCENE.GAMEOVER;
			//break;
			//case this.GAMESCENE.GAMEOVER:
				//this.currentGameScene = this.GAMESCENE.INTRO;
				//currentScene = SCENE.MENU;
			//break;
		}	
	}

}
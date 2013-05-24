function SceneGame2()
{
	
	this.Intro = new SceneIntroGame2();

	this.level01 = new SceneLevel01Game2();
	
	this.win = new SceneGameWinGame2();
	
	this.over = new SceneGameOverGame2();
	
	this.SCENE = { INTRO: 0, LEVEL01: 1, WIN: 2, OVER: 3 }

	this.currentScene = this.SCENE.INTRO;
	
	this.update=function()
	{
		
		switch(this.currentScene)
		{
		case this.SCENE.INTRO:
		{
			this.Intro.update();	
		}
		break;
		case this.SCENE.LEVEL01:
		{
			this.level01.update();
		}
		break;		
		case this.SCENE.WIN:
		{
			this.win.update();
		}
		break;
		case this.SCENE.OVER:
		{
			this.over.update();
		}
		break;
		
		}	
		
	}
	
	this.draw=function()
	{
		
		
		switch(this.currentScene)
		{
		case this.SCENE.INTRO:
		{
			this.Intro.draw();
		}
		break;
		case this.SCENE.LEVEL01:
		{
			this.level01.draw();
		}
		break;
		case this.SCENE.WIN:
		{
			this.win.draw();
		}
		break;
		case this.SCENE.OVER:
		{
			this.over.draw();
		}
		break;
		
		}
	
	}
	
	this.mouse_down=function(mouse)
	{
		switch(this.currentScene)
		{
		case this.SCENE.INTRO:
		{
			this.Intro.mouse_down(mouse);
		}
		break;
		case this.SCENE.LEVEL01:
		{
			this.level01.mouse_down(mouse);
		}
		break;
		case this.SCENE.WIN:
		{
			this.win.mouse_down(mouse);
		}
		break;
		case this.SCENE.OVER:
		{
			this.over.mouse_down(mouse);
		}
		break;

		}
		
	}
	
	this.mouse_up=function(mouse)
	{
		
	}
	
	this.key_down=function(key)
	{
		
		switch(this.currentScene)
		{
		case this.SCENE.INTRO:
		{
			this.Intro.key_down(key);
		}
		break;
		case this.SCENE.LEVEL01:
		{
			this.level01.key_down(key);
		}
		break;
		case this.SCENE.WIN:
		{
			this.win.key_down(key);
		}
		break;
		case this.SCENE.OVER:
		{
			this.over.key_down(key);
		}
		break;		
	
		}
		
	}
	//nao to nem sabendo do q eles tao falando
	this.key_up=function(key)
	{		
		switch(this.currentScene)
		{
		case this.SCENE.INTRO:
		{
			this.Intro.key_up(key);
		}
		break;
		case this.SCENE.LEVEL01:
		{
			this.level01.key_up(key);
		}
		break;
		case this.SCENE.WIN:
		{
			this.win.key_up(key);
		}
		break;
		case this.SCENE.OVER:
		{
			this.over.key_up(key);
		}
		break;
		}

	
	}
	
	this.mouse_move=function(mouse)
  	{
  		console.log("Game2 mouse X " + mouse.x + " mouse Y " + mouse.y );
		
		switch(this.currentScene)
		{		
		case this.SCENE.INTRO:
		{	
			this.Intro.mouse_move(mouse);
		}
		break;
		case this.SCENE.LEVEL01:
		{	
			this.level01.mouse_move(mouse);
		}
		break;
		case this.SCENE.WIN:
		{
			this.win.mouse_move(mouse);
		}
		break;
		case this.SCENE.OVER:
		{
			this.over.mouse_move(mouse);
		}
		break;
		}
						
		
		
  	};
}
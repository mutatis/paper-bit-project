function SceneGame2()
{
	
	this.Intro = new SceneIntro();

	this.level01 = new SceneLevel01();

	this.SCENE = { INTRO: 0, LEVEL01: 1 }

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
		
		}
	
	}
	
	this.mouse_down=function(mouse)
	{
		
		console.log("mous x " + mouse.x, "mouse y " + mouse.y)	
	
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
	
		}
		
	}
	
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

		}
		
	}

	this.mouse_move=function(mouse)
  	{
  		console.log("Game2 mouse X " + mouse.x + " mouse Y " + mouse.y );
		
		switch(this.currentScene)
		{		
			
			case this.SCENE.INTRO:
			
				this.Intro.mouse_move(mouse);

			break;
			
			case this.SCENE.LEVEL01:
			
				this.level01.mouse_move(mouse);

			break;
						
		}
		
  	};
	
	
}
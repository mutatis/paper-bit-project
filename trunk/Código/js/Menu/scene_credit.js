function SceneCredit()
{
	this.fundo_move = new Fundo_creditos("imgs/credits.png");

	this.background = new Image();
	this.background.src="imgs/creditos.png";
	this.loaded = false;		
	
    this.button_back = new MyButton("imgs/button_back.png", 70, 70, 720, 500);
    
	this.update=function()
   	{
   	 this.fundo_move.update();
   	};
   
   	this.draw=function()
   	{
		
	
   		screen.drawImage(this.background, 0, 0);
   		
   		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("CREDIT", 20, 20);
   		
   		this.button_back.draw();
		this.fundo_move.draw();
   	};
   
   
   	this.mouse_down=function(mouse)
   	{
   		if(this.button_back.clicked(mouse))
    	{
    		currentScene = SCENE.MENU;
    	}
   	};
   
   	this.key_down=function(key)
   
   	{
   		
   	};
	
		this.mouse_up=function(mouse)
	{
		
	}
	
	  	this.mouse_move=function(mouse)
  	{
  		console.log("Creditos mouse X " + mouse.x + " mouse Y " + mouse.y );
  		
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
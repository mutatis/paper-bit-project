function SceneMenu()
{
	this.background = new Fundo_move_menu("imgs/fundo.png");		
    
    this.button_credit = new MyButton("imgs/cre.png", 196, 51);
    this.button_credit.position_x = 50;
    this.button_credit.position_y = 500;
    
    this.button_game_1 = new Button("imgs/button_game_1.png", 150, 150);
    this.button_game_1.position_x = 018;
    this.button_game_1.position_y = 010;
    
    this.button_game_2 = new Button("imgs/button_game_2.png", 150, 150);
    this.button_game_2.position_x = 170;
    this.button_game_2.position_y = 010;
        
    this.button_game_3 = new MyButton("imgs/button_game_3.png", 150, 150);
    this.button_game_3.position_x = 322;
    this.button_game_3.position_y = 10;
    
    this.button_game_4 = new MyButton("imgs/button_game_4.png", 150, 150);
    this.button_game_4.position_x = 474;
    this.button_game_4.position_y = 10;
    
    this.button_game_5 = new Button("imgs/button_game_5.png", 295, 82);
    this.button_game_5.position_x = 627;
    this.button_game_5.position_y = 010;
	
	this.name_grupo = new Name ("imgs/nome.png",100, 50, 650, 500);
    
	this.update=function()
   	{
   	this.background.update();
   	};
   
   	this.draw=function()
	{
		this.background.draw();
		
		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("", 20, 20);
		
		this.button_credit.draw();
		this.button_game_1.draw();
		this.button_game_2.draw();
		this.button_game_3.draw();
		this.button_game_4.draw();
		this.button_game_5.draw();
		this.name_grupo.draw();
	};
  
   	this.key_down=function(key)
   	{
   		
   	};
   	   	
  	this.key_up=function(key)
  	{
  		
   	};
  	  	 
   	this.mouse_down=function(mouse)
   	{   		
    	
    	if(this.button_credit.clicked(mouse))
    	{
    		currentScene = SCENE.CREDIT;		
    	}
    	
    	if(this.button_game_1.clicked(mouse))
    	{
    		currentScene = SCENE.GAME1;		
    	}

		if(this.button_game_2.clicked(mouse))
    	{
    		currentScene = SCENE.GAME2;		
    	}
    	
    	if(this.button_game_3.clicked(mouse))
    	{
    		currentScene = SCENE.GAME3;		
    	}
    	
    	if(this.button_game_4.clicked(mouse))
    	{
    		currentScene = SCENE.GAME4;		
    	}
    	
    	if(this.button_game_5.clicked(mouse))
    	{
    		currentScene = SCENE.GAME5;		
    	}
    	
    };
   	
   	this.mouse_up=function(mouse)
  	{  		
  		
  	};
    	
  	this.mouse_move=function(mouse)
  	{
  		console.log("MENU mouse X " + mouse.x + " mouse Y " + mouse.y );
  		
  		if(this.button_credit.mouse_over(mouse))
  		{
  			this.button_credit.current_frame = 0;
  		}
  		else
  		{
  			this.button_credit.current_frame = 1;
  		}
		
		if(this.button_game_3.mouse_over(mouse))
  		{
  			this.button_game_3.current_frame = 0;
  		}
  		else
  		{
  			this.button_game_3.current_frame = 1;
  		}
		
		if(this.button_game_4.mouse_over(mouse))
  		{
  			this.button_game_4.current_frame = 0;
  		}
  		else
  		{
  			this.button_game_4.current_frame = 1;
  		}
  	};
   
}
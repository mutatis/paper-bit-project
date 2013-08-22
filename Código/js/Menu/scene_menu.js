function SceneMenu()
{
	
	//som do botão ao ser clicado
	this.music = new Audio();
	this.music.src = "sounds/Mouse.mp3"
	this.music.volume = 1.0
	
	//som do menu
	this.music_fundo = new Audio();
	this.music_fundo.src ="sounds/fundo_menu.mp3"
	this.music_fundo.volume = 1.0
	
	
	this.background = new Fundo_move_menu("imgs/fundo.png");		
    
    this.button_credit = new MyButton("imgs/cre.png", 196, 51);
    this.button_credit.position_x = 50;
    this.button_credit.position_y = 500;
    
    this.button_game_1 = new MyButton("imgs/button_game_1.png", 150, 150);
    this.button_game_1.position_x = 018;
    this.button_game_1.position_y = 010;
    
    this.button_game_2 = new MyButton("imgs/button_game_2.png", 150, 150);
    this.button_game_2.position_x = 170;
    this.button_game_2.position_y = 010;
        
    this.button_game_3 = new MyButton("imgs/button_game_3.png", 150, 150);
    this.button_game_3.position_x = 322;
    this.button_game_3.position_y = 10;
    
    this.button_game_4 = new MyButton("imgs/button_game_4.png", 150, 150);
    this.button_game_4.position_x = 474;
    this.button_game_4.position_y = 10;
    
    this.button_game_5 = new MyButton("imgs/button_game_5.png", 150, 150);
    this.button_game_5.position_x = 627;
    this.button_game_5.position_y = 010;
	
	this.name_grupo = new Name ("imgs/nome.png",150, 150, 630, 440);
    
	this.update=function()
   	{
   	
   	this.music_fundo.play();	
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
		if(completouJogo1 && completouJogo2 && completouJogo3 && completouJogo4)
		{
			this.button_game_5.draw();/////////////////liberado
		}
		else
		{
			this.button_game_5.draw();//travado normal
		}
		
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
    		this.music.play();//som ao ser clicado pelo botão
			this.music_fundo.pause();//som pausado ao trocar de cena
			this.button_credit.current_frame = 1;
    	}
    	
    	if(this.button_game_1.clicked(mouse))
    	{
    		
    		currentScene = SCENE.GAME1;
       		this.music.play();//som ao ser clicado pelo botão
			this.music_fundo.pause();
			this.button_game_1.current_frame = 1;
    	}

		if(this.button_game_2.clicked(mouse))
    	{
    		currentScene = SCENE.GAME2;		
     		this.music.play();//som ao ser clicado pelo botão
			this.music_fundo.pause();
			this.button_game_2.current_frame = 1;
    	}
    	
    	if(this.button_game_3.clicked(mouse))
    	{
    		currentScene = SCENE.GAME3;		
     		this.music.play();//som ao ser clicado pelo botão
			this.music_fundo.pause();
			this.button_game_3.current_frame = 1;
    	}
    	
    	if(this.button_game_4.clicked(mouse))
    	{
    		currentScene = SCENE.GAME4;		
    		this.music.play();//som ao ser clicado pelo botão
			this.music_fundo.pause(); 
			this.button_game_4.current_frame = 1;
    	}
    	
    	if(this.button_game_5.clicked(mouse))
    	{
    		showUnity();
    	}
    	
    	  if(this.name_grupo.clicado(mouse))
    	{
			window.open("https://www.facebook.com/PaperBitProductions?ref=ts&fref=ts")
    	}
    	
    };
   	
   	this.mouse_up=function(mouse)
  	{  		
  		
  	};
    	
  	this.mouse_move=function(mouse)
  	{
  		
  		if(this.button_credit.mouse_over(mouse))
  		{
  			this.button_credit.current_frame = 0;
  		}
  		else
  		{
  			this.button_credit.current_frame = 1;
  		}
		
		if(this.button_game_1.mouse_over(mouse))
  		{
  			this.button_game_1.current_frame = 0;
  		}
  		else
  		{
  			this.button_game_1.current_frame = 1;
  		}
		
		if(this.button_game_2.mouse_over(mouse))
  		{
  			this.button_game_2.current_frame = 0;
  		}
  		else
  		{
  			this.button_game_2.current_frame = 1;
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
		
		//		if(this.button_game_5.mouse_over(mouse))
  		//{
  		//	this.button_game_5.current_frame = 0;
  		//}
  		//else
  		//{
  		//	this.button_game_5.current_frame = 1;
  		//}
  	};
   
}
function SceneCredit()
{

	//som do botão ao ser clicado
	this.music = new Audio();
	this.music.src = "sounds/Mouse.mp3"
	this.music.volume = 1.0
	
	//som o fundo Créditos
	this.music_fundo = new Audio();
	this.music_fundo.src ="sounds/Queen.mp3"
	this.music_fundo.volume = 1.0
	
	this.fundo_move = new Fundo_creditos("imgs/credits.png");

	this.background = new Image();
	this.background.src="imgs/creditos.png";
	this.loaded = false;		
	
    this.button_back = new MyButton("imgs/button_back.png", 70, 70, 720, 500);
    
	this.update=function()
   	{
   	 this.fundo_move.update();
	 this.music_fundo.play();
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
			this.music.play();//som ao ser clicado pelo botão
			this.music_fundo.pause();//som pausado ao trocar de cena
			this.button_back.current_frame = 1;
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
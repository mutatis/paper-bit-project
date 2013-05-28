function Game1SceneGameOver()

{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_1/point.png", 600, 800, 0, 0);
		this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
		this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);

		//som do fundo da intro
		this.music_fundo = new Audio();
		this.music_fundo.src = "sounds/perdeu.mp3"
		this.music_fundo.volume = 1.0
		
		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
		
       	this.update=function()
	{			
		this.button_start.update
		this.button_back.update
		
		this.music_fundo.play();
	
    };
    
    this.draw=function()
    {                        
		this.fundo.draw();				

        this.button_start.draw();
		this.button_back.draw();
        
				          
    }
    
	this.mouse_down=function(mouse)
   	{   		
	if(this.button_start.clicked(mouse))
        {
        	game1.currentGameScene = game1.GAMESCENE.INTRO;  //botão para o game
			this.music_fundo.pause();
			this.music.play();//som ao ser clicado pelo botão
        }
		
		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	currentScene = SCENE.MENU;
			game1.currentGameScene = game1.GAMESCENE.INTRO;
			this.music_fundo.pause();
			this.music.play();//som ao ser clicado pelo botão
			
        	this.player.points = 0;
        
        	this.reset();
        }
        
    }
    
    this.key_down=function(key)
    {
                //
    }
    
    this.mouse_up=function(mouse)
    {
                //
        
    }
    
    this.key_up=function(key)
    {
                //
    }
	
  	this.mouse_move=function(mouse)
  	{
  		//console.log("Game3 mouse X " + mouse.x + " mouse Y " + mouse.y );
  		
  		if(this.button_start.mouse_over(mouse))
  		{
  			this.button_start.current_frame = 0;
  		}
  		else
  		{
  			this.button_start.current_frame = 1;
  		}
		
		if(this.button_back.mouse_over(mouse))
  		{
  			this.button_back.current_frame = 0;
  		}
  		else
  		{
  			this.button_back.current_frame = 1;
  		}
		
  	};
    
}//fecha Intro
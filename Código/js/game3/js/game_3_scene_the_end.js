function Game3SceneTheEnd()
{
    this.reset=function()
	{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_3/venceu.png", 600, 800, 0, 0);
		this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
		this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);
		
		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0

       	this.update=function()
	{			

    };
    
	}//fecha reset
	
	this.reset(); 
	
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

        	game3.currentGameScene = game3.GAMESCENE.LEVEL1;  //botão para o game
			this.music.play();//som ao ser clicado pelo botão
			//this.music_fundo.pause();

        }
		
		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	
        	currentScene = SCENE.MENU;
			game3.currentGameScene = game3.GAMESCENE.INTRO;
			this.music.play();//som ao ser clicado pelo botão
			//this.music_fundo.pause();

        }
        
        
    }
    
    this.key_down=function(key)
    {
                //
    }
	
	    this.key_up=function(key)
    {
                //
    }
    
    this.mouse_up=function(mouse)
    {
                //
        
    }

  	this.mouse_move=function(mouse)
  	{
  		
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
function Game3SceneIntro ()
{
    this.reset=function()
	{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_3/intro_fundo.png", 600, 800, 0, 0);
		this.Raquel = new Fundo("imgs/game_3/raquel.png", 600, 800, 0, 0);
		this.boca_move1 = new boca_move ("imgs/boca.png",127 , 80, 130, 220);
		this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
		this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);
		this.balao1 = new balao ("imgs/3.png", 204, 215,250,30);
		
		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
		
		//som do fundo da intro
		//this.music_fundo = new Audio();
		//this.music_fundo.src = "sounds/game_3/Dunderpatrullen.mp3"
		//this.music_fundo.volume = 1.0
	}
	this.reset();
		
       	this.update=function()
	{			
	//som tocando na intro
	//this.music_fundo.play();
    };
    
    this.draw=function()
    {                        
		this.fundo.draw();				
        this.button_start.draw();
		this.button_back.draw();
		this.Raquel.draw();
		this.boca_move1.draw();
		this.balao1.draw();
  		          
    }
    
	this.mouse_down=function(mouse)
   	{   		
        if(this.button_start.clicked(mouse))
        {
        	game3.currentGameScene = game3.GAMESCENE.LEVEL1;  //botão para o game
        	this.music.pause();
			this.music.play();//som ao ser clicado pelo botão
			//this.music_fundo.pause();
			this.button_start.current_frame = 1;
			this.reset();
        }
		
		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	currentScene = SCENE.MENU  
        	this.music.pause();
			this.music.play();//som ao ser clicado pelo botão
			//this.music_fundo.pause();
			this.button_back.current_frame = 1;
			this.reset();
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

	//
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
  	
  	//
    
}//fecha Intro

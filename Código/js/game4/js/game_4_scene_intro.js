function Game4SceneIntro ()

{
	this.reset=function()
	{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_4/menu.png", 600, 800, 0, 0);
		this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
		this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);
		this.L�o = new Fundo("imgs/game_4/l�o.png", 600, 800, 0, 0);
		this.boca_move1 = new boca_move ("imgs/boca.png",127 , 80, 130, 200);
		this.balao1 = new Fundo ("imgs/4.png", 204, 215,250,30);
		
		//som do bot�o ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
		}
		
		this.reset();
		
       	this.update=function()
	{			

    };
    
    this.draw=function()
    {                        
		this.fundo.draw();				

        this.button_start.draw();
		this.button_back.draw();
		this.L�o.draw();
		this.boca_move1.draw();
		this.balao1.draw();
        
				          
    }
    
	this.mouse_down=function(mouse)
   	{   		
        if(this.button_start.clicked(mouse))
        {
        	game4.currentGameScene = game4.GAMESCENE.LEVEL4;
			this.music.play();//som ao ser clicado pelo bot�o
			this.button_start.current_frame = 1;
			this.reset();
        }
		
		if(this.button_back.clicked(mouse)) //bot�o para voltar o menu
        {
        	currentScene = SCENE.MENU 
			this.music.play();//som ao ser clicado pelo bot�o
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
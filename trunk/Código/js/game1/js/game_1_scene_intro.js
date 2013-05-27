function Game1SceneIntro ()
{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/creditos.png", 600, 800, 0, 0);
		this.Sara = new Fundo("imgs/game_1/sara.png", 800, 600, 0, 0);
		this.boca_move1 = new boca_move ("imgs/boca.png",127 , 80, 130, 210);
		this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
		//this.button_instru = new Button("imgs/instrucao.png",500, 90, 575, 450);
		this.button = new MyButton("imgs/play2.png",166, 72, 575, 450);
	
		
		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
       	
       	
       	this.update=function()
	{			

    };
    
    this.draw=function()
    {                        
		this.fundo.draw();				

        this.button_start.draw();
        
        this.button.draw();
		this.Sara.draw();
		this.boca_move1.draw();
        
				          
    }
    
	this.mouse_down=function(mouse)
   	{   		
        if(this.button_start.clicked(mouse))
        {
        	game1.currentGameScene = game1.GAMESCENE.LEVEL1;  
			this.music.play();//som ao ser clicado pelo botão
			this.button_start.current_frame = 1;
        }
        
        if(this.button.clicked(mouse))
    	{
    		currentScene = SCENE.MENU;
			this.music.play();//som ao ser clicado pelo botão
			this.button.current_frame = 1;
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
		
		if(this.button.mouse_over(mouse))
  		{
  			this.button.current_frame = 0;
  		}
  		else
  		{
  			this.button.current_frame = 1;
  		}
		
  	};

    
}//fecha Intro

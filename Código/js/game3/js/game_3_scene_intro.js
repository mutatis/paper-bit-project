function Game3SceneIntro ()
{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_3/intro_fundo.png", 600, 800, 0, 0);
		this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
		this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);

       	this.update=function()
	{			

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
        	game3.currentGameScene = game3.GAMESCENE.LEVEL1;  //botão para o game
        }
		
		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	currentScene = SCENE.MENU  
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
  	
  	//
    
}//fecha Intro

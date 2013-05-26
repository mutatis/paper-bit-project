function Game1SceneGameOver()

{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_3/game_over.png", 600, 800, 0, 0);
		this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
		this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);

       	this.update=function()
	{			
		this.button_start.update
		this.button_back.update
	
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
        }
		
		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	currentScene = SCENE.MENU;
        	
        	 
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

        
    }
    
}//fecha Intro
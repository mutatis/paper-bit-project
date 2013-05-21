function Game4SceneIntro ()

{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_4/menu.png", 600, 800, 0, 0);
		this.button_start = new Button("imgs/padrão/play1.png", 250, 80, 575, 350);
		this.button_back = new Button("imgs/padrão/play2.png",500, 90, 575, 450);

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
        	game4.currentGameScene = game4.GAMESCENE.LEVEL4;  
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
    
    this.mouse_up=function(mouse)
    {
                //
        
    }
    
    this.key_up=function(key)
    {
                //
    }

    
}//fecha Intro
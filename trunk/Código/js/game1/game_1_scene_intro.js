function Game1SceneIntro ()
{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/menu.png", 600, 800, 0, 0);
		this.button_start = new Button("imgs/button_credit.png", 250, 80, 575, 380);
		//this.button_instru = new Button("imgs/instrucao.png",500, 90, 575, 450);
		
		//this.currentGameScene = this.GAMESCENE.INTRO; 

       	this.update=function()
	{			

    };
    
    this.draw=function()
    {                        
		this.fundo.draw();				

        this.button_start.draw();
        
				          
    }
    
	this.mouse_down=function(mouse)
   	{   		
        if(this.button_start.clicked(mouse))
        {
        	game1.currentGameScene = game1.GAMESCENE.LEVEL1;  
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

function Game1SceneTheEnd()
{

		this.fundo = new Background("imgs/menu.png")
		this.button_start = new Button("button_credit.png", 196, 51, 200, 450)
		this.button_menu = new Button("button_credit.png", 196, 51, 200, 380)

		
this.update=function()
		{
			
		}
		
		this.draw=function()
		{
			
			this.fundo.draw();
			
			this.button.draw();
			
		}
		
this.mouse_down=function(mouse)
   	{   		
        if(this.button_restart.clicked(mouse))
        {
        	game1.currentGameScene = game1.GAMESCENE.LEVEL1;  
        }
        
        //if(this.button_menu.clicked(mouse))
        //{
        //	game1.currentGameScene = game1.GAMESCENE.LEVEL1;  
        //}
        
        
        if(this.button_menu.clicked(mouse))
    	{
    		currentScene = SCENE.MENU;
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
		
		
		

	    

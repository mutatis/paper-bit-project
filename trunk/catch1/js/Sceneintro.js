function SceneIntro()
{//abre Intro
        //file, size_x, size_y, pos_x, pos_y
       this.button_start = new Button("imgs/play1.png", 250, 80, 50, 50);
        this.button_credits = new Button("imgs/play_cre.png", 166, 72, 200, 200);
                
                
    this.update=function()
    {
        //
    };
    
    this.draw=function()
    {
        screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
                screen.fillText("Intro", 20, 20);
                                
        this.button_credits.draw();

        this.button_start.draw();
                                          
    }
    
    this.mouse_down=function(mouse)
    {//abre down
        
        if(this.button_start.clicked(mouse))
        {
                currentScene = SCENES.LEVEL01;  
        }
        
        if(this.button_credits.clicked(mouse))
        {
                currentScene = SCENES.CREDITS;  
        }
    }//fecha down
    
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
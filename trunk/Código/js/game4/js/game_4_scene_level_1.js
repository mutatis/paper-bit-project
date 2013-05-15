function Game4SceneLevel4()
{//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_4/fundo1.png", 600, 800, 0, 0);
		//this.toy = new Player ("imgs/game_3/spencer_boy.png", 60, 70, ((SCREENWIDTH-94)/2)-40, 0);
		//this.fundo = new Fundo_move ("imgs/game_3/fundo_move.png",1200, 800, 0, 0);
		this.nave1 = new Player4("imgs/game_4/nave.png", 60, 40, 10, 200);
		this.ast = new Asteroide("imgs/game_4/asteroid.png", 40, 32,400,300);

		
    this.update=function()
    {
		
        this.nave1.update();
		//this.fundo.update();
		
		
		
    };
    
    this.draw=function()
    {
		this.fundo.draw();
		this.nave1.draw();
		this.ast.draw();
		

		
        screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
		screen.fillText("gAME4 porra", 20, 20);
                
				
        //this.button_credits.draw();

        //this.button_start.draw();
		
		//this.button_instru.draw();
				          
    }
    
    this.mouse_down=function(mouse)
    {//abre down
        
			//
		
    }//fecha down
    
    this.mouse_up=function(mouse)
    {
                //
        
    }
    
    this.key_down=function(key)
    {
       this.nave1.key_down(key)
    }
    
    this.key_up=function(key)
    {
        this.nave1.key_up(key)
    }

    
}//fecha Intro

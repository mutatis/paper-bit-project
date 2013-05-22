function Game4SceneLevel4()
{//abre Intro
		this.reset=function()
	    {
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_4/fundo1.png", 600, 800, 0, 0);
		//this.toy = new Player ("imgs/game_3/spencer_boy.png", 60, 70, ((SCREENWIDTH-94)/2)-40, 0);
		//this.fundo = new Fundo_move ("imgs/game_3/fundo_move.png",1200, 800, 0, 0);
		this.nave1 = new Player4("imgs/game_4/nave.png", 60, 40, 10, 200);
		//file, size_x, size_y, pos_x, pos_y, vel_x, vel_y
		this.ast = new Asteroide("imgs/game_4/asteroid.png", 40, 32,400,300,-2,2);
		this.button_back = new MyButton("imgs/close.png", 50, 50, 700, 50);
		
		}//fim reset
		
		this.reset();
		
    this.update=function()
    {
		
        this.nave1.update();
		this.ast.update();
		
		
		
    };
    
    this.draw=function()
    {
		this.fundo.draw();
		this.nave1.draw();
		this.ast.draw();
		this.button_back.draw();
		

		
        screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
		screen.fillText("Pontos:", 20, 20);
                
				
        //this.button_credits.draw();

        //this.button_start.draw();
		
		//this.button_instru.draw();
				          
    }
    
    this.mouse_down=function(mouse)
    {//abre down
      		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	currentScene = SCENE.MENU;
        	
        	game4.currentGameScene = game4.GAMESCENE.INTRO;
        	 
        	//this.player.points = 0;
        
        	this.reset();
        }  
			
		
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

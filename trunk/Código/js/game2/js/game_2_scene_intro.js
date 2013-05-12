function Game2SceneIntro ()

{//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_3/intro_fundo.png", 600, 800, 0, 0);
        //this.button_start = new Button("imgs/game_3/play1.png", 250, 80, 575, 380);
		//this.button_instru = new Button("imgs/instrucao.png",500, 90, 575, 450);
		
		//this.currentGameScene = this.GAMESCENE.INTRO; 

       	this.update=function()
	{			

    };
    
    this.draw=function()
    {
        screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
		screen.fillText("AQUI", 20, 20);
                
		this.fundo.draw();
				

        //this.button_start.draw();
		
		//this.button_instru.draw();
				          
    }
    
	this.mouse_down=function(mouse)
   	{
		switch(this.currentGameScene)
		{

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
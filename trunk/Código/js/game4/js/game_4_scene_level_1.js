function Game4SceneLevel4()
{
		this.reset=function()
	    {
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_4/fundo1.png", 600, 800, 0, 0);
		//this.toy = new Player ("imgs/game_3/spencer_boy.png", 60, 70, ((SCREENWIDTH-94)/2)-40, 0);
		//this.fundo = new Fundo_move ("imgs/game_3/fundo_move.png",1200, 800, 0, 0);
		this.nave1 = new Player4("imgs/game_4/nave.png", 60, 40, 40, 500);
		this.pontos = 0;

		//file, size_x, size_y, posicao_x, posicao_y, velocity_y
		this.barra = new Fundo ("imgs/game_4/barra.png",180,80,20,20)
		
		this.ast = new Array();

		//file, size_x, size_y, pos_x, pos_y, vel_x, vel_y
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -5,5));
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -5,-2));
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -5,5));
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -5,-2));
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -5,5));
		
		this.button_back = new MyButton("imgs/close.png", 50, 50, 700, 50);
		//som do bot�o ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
		
		//som do fundo da intro
		this.music_fundo = new Audio();
		this.music_fundo.src = "sounds/game_4/trains.mp3"
		this.music_fundo.volume = 1.0;
		this.draw_ast = false;
		
		}//fim reset
		
		this.reset();
		
    this.update=function()
    {
		
        this.nave1.update();
		this.music_fundo.play()
		
		for(var i = 0; i < this.ast.length; i++)
		{
			this.ast[i].update();
			
			if(Collide
					(this.nave1.position_x_dst,
			 		 this.nave1.position_y_dst,
			 		 this.nave1.size_x_dst,
			 		 this.nave1.size_y_dst,
			 		 this.ast[i].position_x,
			 		 this.ast[i].position_y,
			 		 this.ast[i].size_x,
			 		 this.ast[i].size_y
			 		))
					{	
						if(this.ast[i].visible&&this.nave1.visible)
						{
							this.ast[i].visible = false;
							this.nave1.visible = false;	
							game4.currentGameScene = game4.GAMESCENE.GAMEOVER;
							this.music_fundo.pause()
							this.reset();						
						}
						
					}
		}
	
		for(var i = 0; i < this.nave1.shoots.length; i++)
		{
			for(var j = 0; j < this.ast.length; j++)
			{	
				if(Collide
					(this.nave1.shoots[i].position_x,
			 		 this.nave1.shoots[i].position_y,
			 		 this.nave1.shoots[i].size_x,
			 		 this.nave1.shoots[i].size_y,
			 		 this.ast[j].position_x,
			 		 this.ast[j].position_y,
			 		 this.ast[j].size_x,
			 		 this.ast[j].size_y
			 		))
					{	
						if(this.ast[j].visible&&this.nave1.shoots[i].visible)
						{
							this.ast[j].visible = false;
							this.nave1.shoots[i].visible = false;
							this.pontos+=1;
							
						}
						
					}
			}//fecha for inimigos
		}//fecha for tiros
		
		
				
		//venceu no Aster�ide
	   	if(this.pontos >= 100) //Pontuação para vencer 100 pontos
		{
			game4.currentGameScene = game4.GAMESCENE.THEEND;
			this.music_fundo.pause()
			this.reset();
			
		}
		
		
		
    };
    
    this.draw=function()
    {
		this.fundo.draw();
		this.nave1.draw();
		this.button_back.draw();
		this.barra.draw();
		
		for(var j = 0; j < this.ast.length; j++)

		
		for(var i = 0; i < this.ast.length; i++)
		{
			this.ast[i].draw();
		}

		
        screen.font = "40px Arial";
        screen.fillStyle="#FFFFFF";
		screen.fillText(""+this.pontos, 100, 70);
                
		
		

		if(this.draw_ast == true)
			{
				this.ast[j].draw();
			}
		
				
		
	}
    
    this.mouse_down=function(mouse)
    {//abre down
      		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	currentScene = SCENE.MENU;
        	
        	game4.currentGameScene = game4.GAMESCENE.INTRO;
			this.music.play();//som ao ser clicado pelo bot�o
			this.music_fundo.pause();
			this.button_back.current_frame = 1;
        	 
        	//this.player.points = 0;
        
        	this.reset();
        }  
			
		
    }//fecha down
    
    this.mouse_up=function(mouse)
    {
                //
        
    }
    
    		this.mouse_move=function(mouse)
  	{
  		//console.log("Game4 mouse X " + mouse.x + " mouse Y " + mouse.y );
  		
  		if(this.button_back.mouse_over(mouse))
  		{
  			
  			this.button_back.current_frame = 0;
  		}
  		else
  		{
  			this.button_back.current_frame = 1;
  		}
		
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

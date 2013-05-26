function Game4SceneLevel4()
{
		this.reset=function()
	    {
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_4/fundo1.png", 600, 800, 0, 0);
		//this.toy = new Player ("imgs/game_3/spencer_boy.png", 60, 70, ((SCREENWIDTH-94)/2)-40, 0);
		//this.fundo = new Fundo_move ("imgs/game_3/fundo_move.png",1200, 800, 0, 0);
		this.nave1 = new Player4("imgs/game_4/nave.png", 60, 40, 10, 200);
		this.pontos = 0;

		this.ast = new Array();

		//file, size_x, size_y, pos_x, pos_y, vel_x, vel_y
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -2,2));
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -2,2));
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -2,2));
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -2,2));
		this.ast.push(new Asteroide("imgs/game_4/asteroid.png", 40, 32, -2,2));
		
		this.button_back = new MyButton("imgs/close.png", 50, 50, 700, 50);
		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
		
		//som do fundo da intro
		this.music_fundo = new Audio();
		this.music_fundo.src = "sounds/game_4/trains.mp3"
		this.music_fundo.volume = 1.0
		this.draw_ast = false;
		
		}//fim reset
		
		this.reset();
		
    this.update=function()
    {
		
        this.nave1.update();
		//this.ast.update();
		//som tocando na intro
	    this.music_fundo.play()
		
		for(var i = 0; i < this.ast.length; i++)
		{
			this.ast[i].update();
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
							this.pontos+=10;
							
						}
						
						
						
						
					}
			}//fecha for inimigos
		}//fecha for tiros
		
				
		//venceu no Asteróide
	   	if(this.pontos >= 10) //PontuaÃ§Ã£o para vencer 200 pontos
		{
			game4.currentGameScene = game4.GAMESCENE.THEEND;
			this.reset();
			this.music_fundo.pause();
			this.music_fundo.pause();
		}
		
		//perdeu no Fall
		//if(this.player.position_y_dst > 600) //Quando o player caire passar de 600_y = Game over
		//{
		//	game3.currentGameScene = game3.GAMESCENE.GAMEOVER;
		//	this.reset();
		//}
		
    };
    
    this.draw=function()
    {
		this.fundo.draw();
		this.nave1.draw();
		//this.ast.draw();
		this.button_back.draw();
		
		for(var j = 0; j < this.ast.length; j++)

		
		for(var i = 0; i < this.ast.length; i++)
		{
			this.ast[i].draw();//img, this.ast[i].position_x, this.ast[i].position_y);	
		}

		
        screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
		screen.fillText("Pontos:"+this.pontos, 20, 20);
                
				
        //this.button_credits.draw();

        //this.button_start.draw();
		
		//this.button_instru.draw();
		

		if(this.draw_ast == true)
			{
				this.ast[j].draw();
			}
		
				
		
	}
    
    this.mouse_down=function(mouse)
    {//abre down
      		if(this.button_back.clicked(mouse)) //botÃ£o para voltar o menu
        {
        	currentScene = SCENE.MENU;
        	
        	game4.currentGameScene = game4.GAMESCENE.INTRO;
			this.music.play();//som ao ser clicado pelo botão
			this.music_fundo.pause();
			this.music_fundo.pause();
        	 
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

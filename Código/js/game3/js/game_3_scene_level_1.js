function Game3SceneLevel1()
{
	this.reset=function()
	{
		//file, size_x, size_y, position_x, position_y, velocity_y
		this.player = new Player ("imgs/game_3/spencer_boy.png", 60, 70, ((SCREENWIDTH-74)/2)-40, 0);
		
		this.fundo = new Fundo_move ("imgs/game_3/fundo_move.png",1200, 800, 0, 0);
		this.fundo_front = new Fundo3 ("imgs/game_3/fundo_front.png",600,800);
		this.button_back = new MyButton("imgs/close.png", 50, 50, 700, 50);
		this.gato = new Gato ("imgs/game_3/gato.png",42,53,10)
		this.gato_placa = new Gato_pontos ("imgs/game_3/placa_gato.png",180,80,0,0);
		this.player.points = -20;
		//this.win;
		//this.loser;
		
		this.gato_list = new Array();
		
		this.Gato_variados = function()
		{
		
		var gato1 = new Gato("imgs/game_3/gato.png", 42,53,10);
        var gato2 = new Gato("imgs/game_3/gato.png", 42,53,10);
        var gato3 = new Gato("imgs/game_3/gato.png", 42,53,10);
		var gato4 = new Gato("imgs/game_3/gato.png", 42,53,10);
		var gato5 = new Gato("", 42,53,10);
		
		this.gato_list.push(gato1);
		this.gato_list.push(gato2);	
		this.gato_list.push(gato3);	
		this.gato_list.push(gato4);	
		this.gato_list.push(gato5);			
			
		}	
		
		this.Gato_variados();	
					
		this.obstaculos_list = new Array(); 
		
		this.Obstaculos_variados = function()
		{
		 
        							//(file, size_x, size_y, pos_x, pos_y, vel_x, vel_y)
        var obstaculo1 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 50, 100, 0, 2.5);
        var obstaculo2 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 300, 400, 0, 2.5);
        var obstaculo3 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 150, 200, 0, 2.5);
		var obstaculo4 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 200, 300, 0, 2.5);
		var obstaculo5 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 500, 0, 0, 2.5);
		
		this.obstaculos_list.push(obstaculo1);
		this.obstaculos_list.push(obstaculo2);	
		this.obstaculos_list.push(obstaculo3);	
		this.obstaculos_list.push(obstaculo4);	
		this.obstaculos_list.push(obstaculo5);			

		
		}
		
		this.Obstaculos_variados();

	}//fim do reset
	
	this.reset();
		
    this.update=function()
    {

		
        this.player.update();
		this.fundo.update();
		
			//pegar o gato com o player
		for(var i = 0; i < this.gato_list.length ; i++)
		{
			
			if(Collide(
				this.player.position_x_dst,
				this.player.position_y_dst,
				this.player.size_x_dst*this.player.scale_x,
				this.player.size_y_dst*this.player.scale_x,
				this.gato_list[i].position_x,
				this.gato_list[i].position_y,
				this.gato_list[i].size_x,
				this.gato_list[i].size_y
			))

			{
				if(this.gato_list[i].visible)
				{
				this.player.points +=10;
				this.gato_list[i].visible = false;
				}
			}
			
					

		}


		//faz as plataformas cairem e o player colidir
		for(var i = 0; i < this.obstaculos_list.length ; i++)
		{
			this.obstaculos_list[i].update();
			
			        
        	if(Collide(
                this.player.position_x_dst,
                this.player.position_y_dst,
                this.player.size_x_dst*this.player.scale_x,
                this.player.size_y_dst*this.player.scale_y,
                this.obstaculos_list[i].position_x,
                this.obstaculos_list[i].position_y,
                this.obstaculos_list[i].size_x,
                this.obstaculos_list[i].size_y
       		))
       		{
        		//alert("oioi");
        		this.player.can_jump = true;
                this.player.velocity_y = this.obstaculos_list[i].velocity_y;
        	}
        	
        	
        	//quando a plataforma sair completamente por baixo
        	//fazemos ela voltar para logo acima da tela
        	if(this.obstaculos_list[1].position_y > SCREENHEIGHT)
			{
				this.obstaculos_list[1].position_y = -this.obstaculos_list[1].size_y;
				
				this.obstaculos_list[1].position_x = Math.floor((Math.random()*(SCREENWIDTH-this.obstaculos_list[1].size_x)));
				
				this.gato_list[1].visible = true;
				
			}	
				
        	if(this.obstaculos_list[2].position_y > SCREENHEIGHT)
			{
				this.obstaculos_list[2].position_y = -this.obstaculos_list[2].size_y;
				
				this.obstaculos_list[2].position_x = Math.floor((Math.random()*(SCREENWIDTH-this.obstaculos_list[2].size_x)));
				
				this.gato_list[2].visible = true;				
				
			}
			
			if(this.obstaculos_list[3].position_y > SCREENHEIGHT)
			{
				this.obstaculos_list[3].position_y = -this.obstaculos_list[3].size_y;
				
				this.obstaculos_list[3].position_x = Math.floor((Math.random()*(SCREENWIDTH-this.obstaculos_list[3].size_x)));
				
				this.gato_list[3].visible = true;				
				
			}
			
			if(this.obstaculos_list[4].position_y > SCREENHEIGHT)
			{
				this.obstaculos_list[4].position_y = -this.obstaculos_list[4].size_y;
				
				this.obstaculos_list[4].position_x = Math.floor((Math.random()*(SCREENWIDTH-this.obstaculos_list[4].size_x)));
				
				this.gato_list[4].visible = true;				
				
			}

		}
		
		for(var i = 0; i < this.gato_list.length ; i++)
		{	
			//console.log("gato update");
			
			//obstaculo1
			this.gato_list[1].position_x = this.obstaculos_list[1].position_x+60;
				
			this.gato_list[1].position_y = this.obstaculos_list[1].position_y-50;
			
			//obstaculo2
			this.gato_list[2].position_x = this.obstaculos_list[2].position_x+60;
				
			this.gato_list[2].position_y = this.obstaculos_list[2].position_y-50;	
			
			//obstaculo3
			this.gato_list[3].position_x = this.obstaculos_list[3].position_x+60;
				
			this.gato_list[3].position_y = this.obstaculos_list[3].position_y-50;
			
			//obstaculo4
			this.gato_list[4].position_x = this.obstaculos_list[4].position_x+60;
				
			this.gato_list[4].position_y = this.obstaculos_list[4].position_y-50;

			
			this.gato_list[i].update();
			
			if(Collide(
                this.player.position_x_dst,
                this.player.position_y_dst,
                this.player.size_x_dst*this.player.scale_x,
                this.player.size_y_dst*this.player.scale_y,
                this.gato_list[i].position_x,
                this.gato_list[i].position_y,
                this.gato_list[i].size_x,
                this.gato_list[i].size_y
       		))
       		
       		
			{
			//	this.gato_list[0].position_y = this.obstaculos_list[0].position_y-5;
			//	
			//	this.gato_list[0].position_x =this.obstaculos_list[0].position_y+20;

			}
       		
		}
		
		
		//perdeu no Fall
		if(this.player.position_y_dst > 600)
		{
			game3.currentGameScene = game3.GAMESCENE.GAMEOVER;
		}		
		
		//venceu no fall
	   	if(this.player.points >= 50)
		{
			game3.currentGameScene = game3.GAMESCENE.THEEND;		
		}
	
		
	}

    this.draw=function()
    {
		this.fundo.draw();
		this.fundo_front.draw();
		
		this.button_back.draw();
		
		this.player.draw();
		this.gato_placa.draw();
					
		
		for(var i = 0; i < this.obstaculos_list.length ; i++)
		{
			screen.drawImage(this.obstaculos_list[i].img, this.obstaculos_list[i].position_x, this.obstaculos_list[i].position_y);		
		}	
				
					for(var i = 0; i < this.gato_list.length ; i++)
		{
			if(this.gato_list[i].visible)
			screen.drawImage(this.gato_list[i].img, this.gato_list[i].position_x, this.gato_list[i].position_y);		

		}
		
		
        screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
		screen.fillText("" + this.player.points, 70, 45);
		          
    }
    
    this.mouse_down=function(mouse)
    {        		
		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	currentScene = SCENE.MENU;
        	
        	game3.currentGameScene = game3.GAMESCENE.INTRO;
        	 
        	//this.player.points = 0;
        
        	this.reset();
        }
    }
    
    this.mouse_up=function(mouse)
    {
        
    }
	
	this.mouse_move=function(mouse)
  	{
  		//console.log("Game3 mouse X " + mouse.x + " mouse Y " + mouse.y );
  		
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
        this.player.key_down(key);
    }
    
    this.key_up=function(key)
    {
        this.player.key_up(key);
    }

    
};
function Game3SceneLevel1()
{
		this.player = new Player ("imgs/game_3/spencer_boy.png", 60, 70, ((SCREENWIDTH-74)/2)-40, 0);
		this.fundo = new Fundo_move ("imgs/game_3/fundo_move.png",1200, 800, 0, 0);
		this.button_back = new Button("imgs/close.png",500, 90, 720, 10);
		this.gato = new Gato ("imgs/game_3/gato.png",42,53,10)
		this.player.points = 0;
		
		this.gato_list = new Array();
		
		this.Gato_variados = function()
		{
		
		var gato1 = new Gato("imgs/game_3/gato.png", 42,53,10);
        var gato2 = new Gato("imgs/game_3/gato.png", 42,53,10);
        var gato3 = new Gato("imgs/game_3/gato.png", 42,53,10);
		var gato4 = new Gato("imgs/game_3/gato.png", 42,53,10);
		var gato5 = new Gato("imgs/game_3/gato.png", 42,53,10);
		
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
        var obstaculo1 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 50, 0, 0, 2);
        var obstaculo2 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 300, 300, 0, 2);
        var obstaculo3 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 150, 450, 0, 2);
		var obstaculo4 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 200, 200, 0, 2);
		var obstaculo5 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 500, 200, 0, 2);
		
		this.obstaculos_list.push(obstaculo1);
		this.obstaculos_list.push(obstaculo2);	
		this.obstaculos_list.push(obstaculo3);	
		this.obstaculos_list.push(obstaculo4);	
		this.obstaculos_list.push(obstaculo5);			

		
		}
		
		this.Obstaculos_variados();
		
		
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
        	if(this.obstaculos_list[i].position_y > SCREENHEIGHT)
			{
				this.obstaculos_list[i].position_y = -this.obstaculos_list[i].size_y;
				
				this.obstaculos_list[i].position_x = Math.floor((Math.random()*(SCREENWIDTH-this.obstaculos_list[i].size_x)));
			}

		}
		
		for(var i = 0; i < this.gato_list.length ; i++)
		{	
			//console.log("gato update");
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
       		
       		if(this.gato_list[i].position_y > SCREENHEIGHT)
			{
				this.gato_list[i].position_y = -this.gato_list[i].size_y;
				
				this.gato_list[i].position_x = Math.floor((Math.random()*(SCREENWIDTH-this.gato_list[i].size_x)));
			}
       		
		}
		
	}

    this.draw=function()
    {
		this.fundo.draw();
		this.player.draw();
		this.button_back.draw();
					
		
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
		screen.fillText("Pontos:" + this.player.points, 20, 20);
                
				
				          
    }
    
    this.mouse_down=function(mouse)
    {        		
		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	currentScene = SCENE.MENU  
        }
    }
    
    this.mouse_up=function(mouse)
    {
        
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
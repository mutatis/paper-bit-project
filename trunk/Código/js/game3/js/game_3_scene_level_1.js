function Game3SceneLevel1()
{
		this.fundo = new Fundo("", 600, 800, 0, 0);
		this.toy = new Player ("imgs/game_3/spencer_boy.png", 60, 70, ((SCREENWIDTH-94)/2)-40, 0);
		this.fundo = new Fundo_move ("imgs/game_3/fundo_move.png",1200, 800, 0, 0);
		this.button_back = new Button("imgs/game_3/close.png",500, 90, 720, 10);
		
		this.gato_list = new Array();
		
		this.Gato_criar = function()
		{			
			this.gato_list.push(new Gato("imgs/game_3/gato.png", 45, 55, 10));			
		}	
					
		this.obstaculos_list = new Array(); 
		
		this.Obstaculos_variados = function()
		{
		 
        							//(file, size_x, size_y, pos_x, pos_y, vel_x, vel_y)
        var obstaculo1 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 50, 0, 0, 2);
        var obstaculo2 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 50, 300, 0, 2);
        var obstaculo3 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 50, 450, 0, 2);
		var obstaculo4 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 50, 200, 0, 2);
		var obstaculo5 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 50, 200, 0, 2);
		
		this.obstaculos_list.push(obstaculo1);
		this.obstaculos_list.push(obstaculo2);	
		this.obstaculos_list.push(obstaculo3);	
		this.obstaculos_list.push(obstaculo4);	
		this.obstaculos_list.push(obstaculo5);			

		
		}
		
		this.Obstaculos_variados();
		this.Gato_criar();
		
    this.update=function()
    {
		
        this.toy.update();
		this.fundo.update();
		
		
		for(var i = 0; i < this.obstaculos_list.length ; i++)
		{
			this.obstaculos_list[i].update();
			
			        
        	if(Collide(
                this.toy.position_x_dst,
                this.toy.position_y_dst,
                this.toy.size_x_dst*this.toy.scale_x,
                this.toy.size_y_dst*this.toy.scale_y,
                this.obstaculos_list[i].position_x,
                this.obstaculos_list[i].position_y,
                this.obstaculos_list[i].size_x,
                this.obstaculos_list[i].size_y
       		))
        	{
        		//alert("oioi");
        		this.toy.can_jump = true;
                this.toy.velocity_y = this.obstaculos_list[i].velocity_y;
        	}
        	
        	//quando a plataforma sair completamente por baixo
        	//fazemos ela voltar para logo acima da tela
        	if(this.obstaculos_list[i].position_y > SCREENHEIGHT)
			{
				this.obstaculos_list[i].position_y = -this.obstaculos_list[i].size_y;
				
				this.obstaculos_list[i].position_x = Math.floor((Math.random()*(SCREENWIDTH-this.obstaculos_list[i].size_x)));
			}
		}
		
	}

    
    this.draw=function()
    {
		this.fundo.draw();
		this.toy.draw();
		this.button_back.draw();
		
		for(var i = 0; i < this.obstaculos_list.length ; i++)
		{
			screen.drawImage(this.obstaculos_list[i].img, this.obstaculos_list[i].position_x, this.obstaculos_list[i].position_y);		
		}	
		
        //screen.font = "20px Comic Sans MS";
        //screen.fillStyle="#000000";
		//screen.fillText("gAME", 20, 20);
                
				
				          
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
        this.toy.key_down(key);
    }
    
    this.key_up=function(key)
    {
        this.toy.key_up(key);
    }

    
};
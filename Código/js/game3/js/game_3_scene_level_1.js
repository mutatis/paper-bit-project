function Game3SceneLevel1()
{
	this.reset=function()
	{
		//file, size_x, size_y, position_x, position_y, velocity_y
		this.player = new Player3 ("imgs/game_3/raq.png", 60, 125, ((SCREENWIDTH-74)/2)-40, 0);
		
		this.fundo = new Fundo_move ("imgs/game_3/fundo_move.png",1200, 800, 0, 0);
		this.fundo_front = new Fundo3 ("imgs/game_3/fundo_front.png",600,800);
		
		this.button_back = new MyButton("imgs/close.png", 50, 50, 700, 50);
		//som do botão ao ser clicado
		this.music_botao = new Audio();
		this.music_botao.src = "sounds/Mouse.mp3"
		this.music_botao.volume = 1.0
		
		this.gato = new Gato ("imgs/game_3/gato.png",42,53,10)
		this.gato_placa = new Gato_pontos ("imgs/game_3/placa_gato.png",180,80,0,0);
		
		//som do fundo da intro
		this.music_fundo = new Audio();
		this.music_fundo.src = "sounds/game_3/fundo.mp3"
		this.music_fundo.volume = 1.0
		
		//som do gato 
		this.music = new Audio();
		this.music.src = "sounds/game_3/gatinho.mp3"
		this.music.volume = 1.0
	
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
        var obstaculo1 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 50, 120, 0, 3);
        var obstaculo2 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 300, 240, 0, 3);
        var obstaculo3 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 150, 360, 0, 3);
		var obstaculo4 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 200, 480, 0, 3);
		var obstaculo5 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 500, 600, 0, 3);
		
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

		this.music_fundo.play();
        this.player.update();
		this.fundo.update();
		
			//Collide do gato com o player
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
				this.music.play();
				this.player.points += 10; //Pontos para gato
				this.gato_list[i].visible = false; //Quando colidir o gato some
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
                this.obstaculos_list[i].size_y-140 //collide só nos pés do player
       		))
       		{
        		//alert("oioi");
        		this.player.can_jump = true; //Quando colidir no obstaculo, ele pode pular novamente
                this.player.velocity_y = this.obstaculos_list[i].velocity_y; //Player ficar na mesma velocidade do obstaculo (parado)
        	}
        	
        	
        	//quando a plataforma sair completamente por baixo
        	//fazemos ela voltar para logo acima da tela
        	if(this.obstaculos_list[i].position_y > SCREENHEIGHT)
			{
				this.obstaculos_list[i].position_y = -this.obstaculos_list[i].size_y;
				
				this.obstaculos_list[i].position_x = Math.floor((Math.random()*(SCREENWIDTH-this.obstaculos_list[i].size_x)));
				
				this.gato_list[i].visible = true;
				
			}	
			


		}
		
		for(var i = 0; i < this.gato_list.length ; i++)
		{
			//obstaculo1
			this.gato_list[i].position_x = this.obstaculos_list[i].position_x+60;
				
			this.gato_list[i].position_y = this.obstaculos_list[i].position_y-50;
			
		}
		
		
		//perdeu no Fall
		if(this.player.position_y_dst > 600) //Quando o player caire passar de 600_y = Game over
		{
			this.player.position_y_dst = 0;
			game3.currentGameScene = game3.GAMESCENE.GAMEOVER;
			this.music_fundo.pause();
			this.reset();
		}		
		
		//venceu no fall
	   	if(this.player.points >= 200) //Pontuação para vencer 200 pontos
		{
			game3.currentGameScene = game3.GAMESCENE.THEEND;
			this.music_fundo.pause();
			this.reset();
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
	
        screen.font = "40px Arial";
        screen.fillStyle="#ffffff";
		screen.fillText("" + this.player.points, 50, 65);
		          
    }
    
    this.mouse_down=function(mouse)
    {        		
		if(this.button_back.clicked(mouse)) //botão para voltar o menu, dentro do level1
        {
        	currentScene = SCENE.MENU;
        	
        	game3.currentGameScene = game3.GAMESCENE.INTRO;
			this.music_fundo.pause();
        	this.reset();
			this.music_botao.play();//som ao ser clicado pelo botão
			this.button_back.current_frame = 1;
        }
    }
    
    this.mouse_up=function(mouse)
    {
        
    }
	
	this.mouse_move=function(mouse)
  	{
  		
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
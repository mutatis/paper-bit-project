function SceneLevel01()
{
         
	this.fundo = new Background("imgs/fundo1.png", 400, 800, 0, 0);
	this.player = new Player("imgs/boneco.png", 100, 200, 400, 600);
	
	this.pontos = 0
	

	//this.obs = new Obstaculo("imgs/pou.png",100, 51, 0,0);
	
		obstaculos_list = new Array(); 
		 
		function Obstaculos_variados()
		{
		 
        //file, size_x, size_y, pos_x, pos_y, vel_x, vel_y
        this.obstaculo1 = new Obstaculo("imgs/obstaculo1.png", 150, 30, 100, 100, 0, 20, 1, 1);
        this.obstaculo2 = new Obstaculo("imgs/obstaculo1.png", 150, 30, 300, 300, 0, 20, 1, 1);
        this.obstaculo3 = new Obstaculo("imgs/obstaculo1.png", 150, 30, 450, 450, 0, 20, 1, 1);
		//this.obstaculo4 = new Obstaculo("imgs/obstaculo1.png", 150, 30, 550, 200, 0, 20, 1, 1);
		//this.obstaculo5 = new Obstaculo("imgs/obstaculo1.png", 150, 30, 80, 200, 0, 20, 1, 1);
		
		obstaculos_list.push(obstaculo1);		
		obstaculos_list.push(obstaculo2);
		obstaculos_list.push(obstaculo3);
		//obstaculos_list.push(obstaculo4);
		//obstaculos_list.push(obstaculo5);
		
		}
		
		Obstaculos_variados();
	
	
	
    this.update=function()
    {
    
	this.player.update();
	//this.obs();	
	
			for(var i = 0; i < obstaculos_list.length ; i++)
		{
			obstaculos_list[i].update();
                
        if(Collide(
                this.player.position_x_dst,
                this.player.position_y_dst,
                this.player.size_x_dst*this.player.scale_x,
                this.player.size_y_dst*this.player.scale_x,
                
                obstaculos_list[i].position_x,
                obstaculos_list[i].position_y,
                obstaculos_list[i].size_x,
                obstaculos_list[i].size_y
				
				
        ))
		
				{
					obstaculos_list[i].reset();
					Player.pontos += obstaculos_list[i].pontos;
					Player.life += obstaculos_list[i].life;		
				}
				
        
        			
			if(obstaculos_list[i].position_y > 600)
			{
				obstaculos_list[i].position_y = 200;
				obstaculos_list[i].position_x = Math.floor((Math.random()*(SCREENWIDTH-obstaculos_list[i].size_x))+1);
				Player.pontos -= 1;	
				
			}		
			
        
		}
 
    };
    
    this.draw=function()
    {           
						
				this.fundo.draw();
				this.player.draw();
				//this.obs();
				
		for(var i = 0; i < obstaculos_list.length ; i++)
		{
			screen.drawImage(obstaculos_list[i].img, obstaculos_list[i].position_x, obstaculos_list[i].position_y);		
		}
				
		    screen.font = "20px Comic Sans MS"
			screen.fillStyle="#000000"
			screen.fillText("Vida: " + Player.life + " Pontos = " + Player.ponto, 20, 20)
    };
        
    this.mouse_down=function(mouse)
    {
        //console.log("LEVEL 01 mouse X " + mouse.x + " mouse Y " + mouse.y );
    };

    this.mouse_up=function(mouse)
    {
        
        
    };

    this.key_down=function(key)
    {
        //console.log("LEVEL 01 keyCode " + key.keyCode );
		this.player.key_down(key);
                
    };
    
    this.key_up=function(key)
    {
        this.player.key_up(key);
    };    
}
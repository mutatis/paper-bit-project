function Game5SceneLevel1()

{//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("", 600, 800, 0, 0);
		this.toy = new Player ("imgs/game_3/spencer_boy.png", 60, 70, ((SCREENWIDTH-94)/2)-40, 0);
		
		obstaculos_list = new Array(); 
		function Obstaculos_variados()
		{
		 
        //file, size_x, size_y, pos_x, pos_y, vel_x, vel_y
        var obstaculo1 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 100, 100, 0, 2);
        var obstaculo2 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 300, 300, 0, 2);
        var obstaculo3 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 450, 450, 0, 2);
		var obstaculo4 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 550, 200, 0, 2);
		var obstaculo5 = new Obstaculo("imgs/game_3/obstaculo1.png", 150, 30, 80, 200, 0, 2);
		
		obstaculos_list.push(obstaculo1);		
		obstaculos_list.push(obstaculo2);
		obstaculos_list.push(obstaculo3);
		obstaculos_list.push(obstaculo4);
		obstaculos_list.push(obstaculo5);
		
		}
		
		Obstaculos_variados();
		
    this.update=function()
    {
        this.toy.update();
		
		for(var i = 0; i < obstaculos_list.length ; i++)
		{
			obstaculos_list[i].update();
                
        if(Collide(
                this.toy.position_x_dst,
                this.toy.position_y_dst,
                this.toy.size_x_dst*this.toy.scale_x,
                this.toy.size_y_dst*this.toy.scale_x,
                
                obstaculos_list[i].position_x,
                obstaculos_list[i].position_y,
                obstaculos_list[i].size_x,
                obstaculos_list[i].size_y
				
				
        ))
        {
        		this.toy.can_jump = true;
                this.toy.velocity_y = 0;
        }
        else
        {
                //this.spencer.velocity_y = 5;     
        }
        
        			
			if(obstaculos_list[i].position_y > 600)
			{
				obstaculos_list[i].position_y = 0;
				obstaculos_list[i].position_x = Math.floor((Math.random()*(SCREENWIDTH-obstaculos_list[i].size_x))+1);
			}		
			
        
		}
		
		
    };
    
    this.draw=function()
    {
	
		this.toy.draw();
		
		for(var i = 0; i < obstaculos_list.length ; i++)
		{
			screen.drawImage(obstaculos_list[i].img, obstaculos_list[i].position_x, obstaculos_list[i].position_y);		
		}	
		
        screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
		screen.fillText("gAME", 20, 20);
                
		this.fundo.draw();
				
        //this.button_credits.draw();

        //this.button_start.draw();
		
		//this.button_instru.draw();
				          
    }
    
    this.mouse_down=function(mouse)
    {//abre down
        
			//
		
    }//fecha down
    
    this.key_down=function(key)
    {
        this.toy.game3.key_down(key);
    }
    
    this.mouse_up=function(mouse)
    {
                //
        
    }
    
    this.key_up=function(key)
    {
        this.toy.game3.key_up(key);
    }

    
}//fecha Intro	

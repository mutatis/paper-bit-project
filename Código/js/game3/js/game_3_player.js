function Player(file, size_x, size_y, position_x, position_y, velocity_y)
{//abre spencer

    this.image = new Image();
    this.image.src=file;
        
    this.visible = true;
	
	this.ponints = 0;
                
    this.position_x_dst = position_x; 
    this.position_y_dst = position_y;
    
    this.scale_x = 1;
    this.scale_y = 1;
    
    this.size_x_src = size_x;
    this.size_y_src = size_y;
        
    this.size_x_dst = this.size_x_src;
    this.size_y_dst = this.size_y_src;
        
    this.position_x_src = 0; 
    this.position_y_src = 0;
    
    this.velocity_x = 5;
    this.velocity_y = 1;   
    
    this.gravity_x = 0;
    
    this.gravity_y = 2000; //velocidade ao cair 
        
    this.jump_move = false;
	
	this.jumping = false;
	
	this.can_jump = false;
	
	this.jumping_velocity_y = -2000;  //velocidade do pulo   
    
    this.current_frame = 0;
        
    this.frames = 0;        
        
    this.fps = 0;   
    this.time_per_frame = 1000/this.fps;    
    this.setFPS=function(newFPS)
        
        {
        this.fps = newFPS;      
        this.time_per_frame = 1000/this.fps;    
        }
        
    this.delta_time = 0;
    this.acumulated_delta_time = 0;     
    this.last_draw_time = 0;        
        
    this.right = false;
    
    this.left = false;
    
    this.up = false;
    
    this.down = false;
    
    this.update=function()
    {//abre update
	
		//console.log("VELOCIDADE " + this.velocity_y);
		
        this.position_y_dst += this.velocity_y;
        
        this.velocity_y += this.gravity_y;
        
        this.move();
      
     
     this.keepInScreen();
        
    }//fecha update
    
    this.move=function()
    {//abre move
        if(this.right)
        {
                this.position_x_dst += this.velocity_x;
        }
        if(this.left)
        {
                this.position_x_dst -= this.velocity_x;
        }

    }//fecha move
    
    this.keepInScreen=function()
    {//abre keep
        //saida pela esquerda
        if(this.position_x_dst < 0)
        {
                this.position_x_dst = 0;
        }
        
        //saida por cima
        if(this.position_y_dst < 0)
        {
                this.position_y_dst = 0;
        }
        
        //saida pela esquerda
        if(this.position_x_dst > SCREENWIDTH - this.size_x_dst*this.scale_x)
        {
                this.position_x_dst = SCREENWIDTH - this.size_x_dst*this.scale_x;
        }
        
       //saida por baixo
       if(this.position_y_dst > SCREENHEIGHT - this.size_y_dst*this.scale_y)//o player passar do canvas e sumir
       {
             this.position_y_dst = SCREENHEIGHT - this.size_y_dst*this.scale_y;
       }
	   
    }//fecha keep

    
    this.draw=function()
    {//abre draw                  
        if(this.visible)
        screen.drawImage(this.image,
        this.size_x_src*this.current_frame,
        this.position_y_src,
        this.size_x_src, 
        this.size_y_src, 
        this.position_x_dst, 
        this.position_y_dst, 
        this.size_x_dst*this.scale_x,
        this.size_y_dst*this.scale_y);
                
        this.delta_time = Date.now() - this.last_draw_time;
                
        if(this.acumulated_delta_time > this.time_per_frame)
        {
            this.acumulated_delta_time = 0;
            this.current_frame++;
            if(this.current_frame>=this.frames)
            {
                this.current_frame = 0;
            }
        }
          else
            {
                this.acumulated_delta_time += this.delta_time;
            }
                
        this.last_draw_time = Date.now();
                
                
    }//fecha draw
    
    this.key_down=function(key)
    {//abre key_down
    
    			
                if(key.keyCode == 39)
                {
                        this.right = true;
                }
                else if(key.keyCode == 37)
                {
                        this.left = true;
                }
        
                if(key.keyCode == 32)
                {
                        this.up = true;
                        if(this.can_jump)
                        {
                        	this.can_jump = false; //Quando o player collide com obstaculo pode apetar o can_jump novamente
                        	this.velocity_y = -100;
                        }
                }
                else if(key.keyCode == 40)
                {
                        this.down = true;
                }
        
    }//fecha key_down
    
    this.key_up=function(key)
    {//abre key up
                if(key.keyCode == 39)
                {
                        this.right = false;
                }
                else if(key.keyCode == 37)
                {
                        this.left = false;
                }
        
                if(key.keyCode == 38)
                {
                        this.up = false;
                }
                else if(key.keyCode == 40)
                {
                        this.down = false;
                }
                
    }//fecha key_up          

}//fecha spencer
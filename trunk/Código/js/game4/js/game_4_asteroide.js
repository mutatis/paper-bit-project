function Asteroide(file, size_x, size_y, pos_x, pos_y, vel_x, vel_y)
{
	this.img = new Image();
    this.img.src = file;
        
    this.visible = true;
        
    this.size_x = size_x;
    this.size_y = size_y;
    this.position_x = pos_x;
    this.position_y = pos_y;
    this.velocity_x =  vel_x;
    this.velocity_y =  vel_y;
    this.velocity_MAX = 15;
    
    this.update=function()
    { //abre update    

		
    	this.Boundaries();
		
        this.position_x += this.velocity_x;     

        this.position_y += this.velocity_y;  
                
    } //fecha update
	
	   
    /*{
    	//saida pela direita volta pra esquerda
    	if(this.position_x + this.size_x*this.scale_x < 0)
    	{
    		this.position_x = SCREENWIDTH;
    	}
    	
    	//saida por cima volta por baixo
    	if(this.position_y + this.size_y*this.scale_y < 0)
    	{
    		this.position_y = SCREENHEIGHT;
    	}
    	
    	//saida pela esquerda volta pela direita
    	if(this.position_x > SCREENWIDTH)
    	{
    		this.position_x = - this.size_x*this.scale_x;
    	}
    	
    	//saida por baixo volta por cima
    	if(this.position_y > SCREENHEIGHT)
    	{
    		this.position_y = - this.size_y*this.scale_y;
    	}
		 
    }*/
    
    this.Boundaries=function()
    {
    	//saida pela direita volta pra esquerda
    	if(this.position_x + this.size_x*this.scale_x < 0)
    	{
    		this.position_x = SCREENWIDTH;
    	}
    	
    	//saida por cima volta por baixo
    	if(this.position_y + this.size_y*this.scale_y < 0)
    	{
    		this.position_y = SCREENHEIGHT;
    	}
    	
    	//saida pela esquerda volta pela direita
    	if(this.position_x > SCREENWIDTH)
    	{
    		this.position_x = - this.size_x*this.scale_x;
    	}
    	
    	//saida por baixo volta por cima
    	if(this.position_y > SCREENHEIGHT)
    	{
    		this.position_y = - this.size_y*this.scale_y;
    	}
		 
    }
    
    
    this.draw=function()
    { //abre draw
        if(this.visible)
        screen.drawImage(this.img, this.position_x, this.position_y);
    } //fecha draw
	    
}
function Fundo_creditos(source)
{
	this.img = new Image();
	this.img.src = source;
	this.loaded = false;
	this.visible = true;
		
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe BACKGROUND" + loaded);
	};
	
	this.size_x = 600;
    this.size_y = 1500;
    this.position_x = 100;
    this.position_y = 0;
    this.velocity_x = 0;
    this.velocity_y = -1;
    this.velocity_MAX = 15;
    
    this.update=function()
    {
    
    	this.position_x += this.velocity_x;
    	
    	this.position_y += this.velocity_y;
    	
    	if(this.position_y >= 0)
    	{
    		this.position_x = SCREENHEIGHT - this.size_y;
    	}
    	
    };
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.position_x, this.position_y);
    };
    
    this.mouse_down=function(mouse)
    {
    	
    };
    
    
    this.key_down=function(key)
    {
    	   	
    	
    };
    
        
    this.mouse_up=function(mouse)
    {
    	
    	
    };
    
    this.key_up=function(key)
    {
    	
    	
    };

    
    
 
 }
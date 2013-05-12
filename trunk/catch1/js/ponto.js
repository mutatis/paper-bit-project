function Obstaculo(file, size_x, size_y, pos_x, pos_y, vel_x, vel_y, pontos, life)
{//abre obstaculo
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
	
	this.pontos = pontos;
	
	this.life = life;
    
    this.update=function()
    { //abre update          
        this.position_x += this.velocity_x;     

        this.position_y += this.velocity_y;     
                        
        if(this.position_y < 0)
                {
                        this.visible = false;   
                }
                
                
		this.reset = function()
    
    {           
        this.position_y = 0;
        this.position_x = Math.floor((Math.random()*(SCREENWIDTH-this.size_x))); 
        this.velocity_y = Math.floor((Math.random()*1)+10);
        //this.pontos = 0;
    }
	
    } //fecha update
    
    this.draw=function()
    { //abre draw
        if(this.visible)
        screen.drawImage(this.img, this.position_x, this.position_y);
    } //fecha draw


 
 }//fecha obstaculo

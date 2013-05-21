//gato.js

SCREEN_WIDTH = 800;
SCREEN_HEIGHT = 600;

function Gato ( file , size_x, size_y, pontos)
{
	this.img = new Image
	this.img.src = file;
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
		lodaded = true;
		
	};	
	
	this.size_x = 90;
    this.size_y = 90;
    this.position_x = Math.floor((Math.random()*(SCREEN_WIDTH-this.size_x))); 
    this.position_y = Math.floor((Math.random()*(SCREEN_HEIGHT-this.size_x))); 
    this.velocity_x = 0;// Math.floor((Math.random()*5)+1);
    this.velocity_y = Math.floor((Math.random()*0.5)+1);
    
    this.velocity_MAX = 15;
    
    this.points = pontos;
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.size_x, this.size_y);
    };
    
    this.update=function()
	
	 {
        this.position_x += this.velocity_x;     

        this.position_y += this.velocity_y;     
    };
	
	  this.reset = function()
    
    {           
        this.position_y = 0;
        this.position_x = Math.floor((Math.random()*(SCREEN_WIDTH-this.size_x))); 
        this.velocity_y = Math.floor((Math.random()*1)+1);
        this.pontos = 0;
    }

   
   }


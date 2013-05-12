//hamburguer.js
function Hamburguer(file, size_x, size_y, pontos, life)
{
        this.img = new Image();
        this.img.src 	= file;
        this.loaded = false;
        this.visible = true;
        
        this.img.onload = function()
        {
                loaded = true; 
                //console.log("carregamento pela classe hamburguer " + loaded);
        };
        
        this.size_x = 90;
    this.size_y = 90;
    this.position_x = Math.floor((Math.random()*(SCREEN_WIDTH-this.size_x))); 
    this.position_y = 0;
    this.velocity_x = 0;// Math.floor((Math.random()*5)+1);
    this.velocity_y = Math.floor((Math.random()*0.5)+1);
    
    this.velocity_MAX = 15;
    
    this.pontos = pontos;
    
    this.life = life; 
    
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
        //this.pontos = 0;
    }

   
   }


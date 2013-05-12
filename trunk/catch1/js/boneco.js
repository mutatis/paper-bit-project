//boneco.js
function boneco()
{//abre funcao
        this.img = new Image();
        this.img.src="boneco.png";
        this.loaded = false;
        this.visible = true;
                
        this.img.onload = function()
        {
                loaded = true; 
                //console.log("carregamento pela classe boneco" + loaded);
        };
        
        this.size_x = 100;
		this.size_y = 200;
		this.position_x = (SCREEN_WIDTH - this.size_x)/2;
		this.position_y = SCREEN_HEIGHT - this.size_y;
		this.velocity_x = 5;
		this.velocity_y = 5;
		this.velocity_max = 15;
		
		this.pontos = 0;
    
		this.right = false;
    
		this.left = false;
    
		this.life = 3;
				
		this.update=function()
		{
        if(this.right)
        {
        this.position_x += this.velocity_x;
        }
        if(this.left)
        {
        this.position_x -= this.velocity_x;
        }
        
        if(this.position_x < 0)
        {
        this.position_x = 0;
        }
        
        if(this.position_x > SCREEN_WIDTH - this.size_x)
        {
        this.position_x = SCREEN_WIDTH - this.size_x;
        }
		};
    
		this.key_down = function(key)
		{
        if(key.keyCode == 39 )//direita
        {
        this.right = true
        }
        else if(key.keyCode == 37 )//esquerda
        {
        this.left = true;
        }
        }
        
		this.key_up = function(key)
		{
        if(key.keyCode == 39 )//direita
        {
        this.right = false
        }
        else if(key.keyCode == 37 )//esquerda
        {
        this.left = false;
        }
		}
 
		}//fecha funcao
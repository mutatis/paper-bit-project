function Fundo3(file, size_x, size_y, posicao_x, posicao_y)
{//abre fundo
	
	this.img = new Image();
	this.img.src = file;
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
	loaded = true;
	}
	
	this.size_w = 800;
	this.size_h = 600;
	this.posicao_x = 0;
	this.posicao_y = 0;
	this.velocity_x = 5;
    this.velocity_y = 5; 
	this.draw = function()
	{
	
		screen.drawImage(this.img, this.posicao_x, this.posicao_y)
		
	}
	
 this.keepInScreen=function()
    {
    	//saida por cima
    	if(this.posicao_ < 0)
    	{
    		this.posicao_x = 0;
    	}
    	
    }
	
}//fecha fundo
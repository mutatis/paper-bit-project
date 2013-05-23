function BotaoGame2(arquivo, tamanho_w, tamanho_h, posicao_x, posicao_y)
{//abre botao
	
	this.imagem = new Image();
	this.imagem.src = arquivo;
	
	this.visivel = true;

	this.tamanho_w = tamanho_w;
	this.tamanho_h = tamanho_h;
	
	this.posicao_x = posicao_x;
	this.posicao_y = posicao_y;
		
	this.Update = function()
	{//abre update
		
		
		
	}//fecha update
	
	this.draw = function()
	{//abre draw
		
		if(this.visivel)
		screen.drawImage(this.imagem, this.posicao_x, this.posicao_y, this.tamanho_w, this.tamanho_h)
		
	}//fecha draw
	
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
   
   this.mouse_move=function(mouse)
   {
   	
   	
   };
   
	
	this.clicado = function(mouse)
	{//abre botao clicado
		
		if(Collide(mouse.x-10, mouse.y-30, 1, 1,
					this.posicao_x, this.posicao_y, this.tamanho_w, this.tamanho_h))
		{
		
			return true;
			
		}
		
		return false;
		
	}//fecha botao clicado
	
}//fecha botao

function obstaculo(file, tamanho_w, tamanho_h)
{

	SCREENWIDTH = 800
	SCREENHEIGHT = 600;

	this.img = new Image();
	this.img.src = file;
	this.posicao_x = Math.floor((Math.random()*(SCREENWIDTH - this.tamanho_w))+1);
	this.poiscao_y = Math.floor((Math.random()*(SCREENHEIGHT - this.tamanho_h))+1);
	this.tamanho_w = tamanho_w;
	this.tamanho_h = tamanho_h;
	this.pontos = 10;
	this.permanecer = 20;
	this.reaparecer = false;
	this.visible = true;
	this.tempoSeg = 0	
	this.paused = false;
	
	
	this.upadate=function ()
	{
		if(tempoSeg > 20)
		{
			this.visible = false;
		}
		
		if(tempoSeg > 50)
		{
			this.visible = true;
			this.posicao_x = Math.floor((Math.random()*(SCREENWIDTH - this.tamanho_w))+1);
			this.poiscao_y = Math.floor((Math.random()*(SCREENHEIGHT - this.tamanho_h))+1);
		}
		
		if(this.pontos == 100)
		{
			this.paused = true;
			
		}
		
}

this.draw=function()
{

			screen.clearRect(0,0,800,600);
			
			if(this.visible == true)
			{
			
			  screen.drawImage(this.img, this.posicao_x, this.posicao_y);
			  
			 }
			 
			 
			 screen.font ="20px Arial";
			 screen.fillText("tempo:"+tempoSeg, 20, 40);
			 this.fillText("Pontos:"+pontos, 500, 40);
			 
			 if(this.pontos == 100)
			 {
			 
				screen.font = "30px Arial";
				screen.fillStyle="FFFFFF";
				screen.fillText("Voce venceu", 280, 200)
				
				this.paused = true;
				
				}
				
				else
				{
				screen.font = "30px Arial";
				screen.fillStyle="FFFFFF";
				screen.fillText("Voce perdeu", 250, 200)
				
				}
				
}				
				
				this.mouse_down=function(mouse)
				{
			  		  

		console.log("down X " + mouse.x + " down Y " + mouse.y);
	
		if(Collide(mouse.x-10, mouse.y-30, 1, 1, this.posicao_x, this.posicao_y, this.tamanho_w, this.tamanho_h))
		{
			pontos+= pontos;
			this.visivel = false;
			
		};
				//else
			//{
			//pontos-= 5;
			//}
		
				}		
				
}
			 
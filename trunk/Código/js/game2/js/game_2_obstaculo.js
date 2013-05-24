function ObstaculoGame2(arquivo, tamanho_w, tamanho_h, pontos, vida)
{
	this.imagem = new Image();
	this.imagem.src = arquivo;
	this.carregar = false;
	this.visivel = true;
	
	this.imagem.onload = function()
	{
		carregar = true; 
		//console.log("Uhuul Pessoas u.u" + carregar);
	};
	
	this.tamanho_w = tamanho_w;
    this.tamanho_h = tamanho_h;
    this.posicao_x = Math.floor((Math.random()*(SCREENWIDTH-this.tamanho_w))); 
    this.posicao_y = 0;
    this.velocidade_x = 0;
    this.velocidade_y = Math.floor((Math.random()*10)+5);
    
    this.velocidade_MAX = 15;
    
    this.pontos = pontos;
    
    this.vida = vida;
    
    this.update=function()
    {
    	//console.log("update pessoas");
    	
    	this.posicao_x += this.velocidade_x;	

    	this.posicao_y += this.velocidade_y;	
           		
    };
    
    this.reset=function()
    {   
    	//console.log("reset pessoas");

		this.posicao_y = -this.tamanho_h;
		this.posicao_x = Math.floor((Math.random()*(SCREENWIDTH-this.tamanho_w))); 
		this.velocidade_y = Math.floor((Math.random()*10)+5);
    	
    };
 
 }
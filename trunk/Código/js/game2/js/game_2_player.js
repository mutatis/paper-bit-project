function PlayerGame2(arquivo, tamanho_w, tamanho_h)
{
	this.imagem = new Image();
	this.imagem.src = arquivo;
	this.carregar = false;
	this.visivel = true;
		
	this.imagem.onload = function()
	{
		carregar = true; 
		//console.log("Uhuul Heroi u.u" + carregar);
	};
	
	this.tamanho_w = tamanho_w;
    this.tamanho_h = tamanho_h;
    this.posicao_x = (SCREENWIDTH - this.tamanho_w)/2;
    this.posicao_y = SCREENHEIGHT - this.tamanho_h;
    this.velocidade_x = 5;
    this.velocidade_y = 5;
    this.velocidade_MAX = 15;
    
    this.direita = false;
    
    this.esquerda = false;

    this.vida = 5;
    
    this.pontos = 0;
    
    this.update = function()
    {
    	if(this.direita)
    	{
    		this.posicao_x += this.velocidade_x;
    	}
    	if(this.esquerda)
    	{
    		this.posicao_x -= this.velocidade_x;
    	}
    	
    	if(this.posicao_x < 0)
    	{
    		this.posicao_x = 0;
    	}
    	
    	if(this.posicao_x > SCREENWIDTH - this.tamanho_w)
    	{
    		this.posicao_x = SCREENWIDTH - this.tamanho_w;
    	}
    };
    
    this.key_down = function(key)
    {
    	if(key.keyCode == 39 )
		{
			this.direita = true;
		}
		else if(key.keyCode == 37 )
		{
			this.esquerda = true;
		}
    }
        
    this.key_up = function(key)
    {
    	if(key.keyCode == 39 )
		{
			this.direita = false;
		}
		else if(key.keyCode == 37 )
		{
			this.esquerda = false;
		}
    }
 
 }
 function Fundo_paisagem(arquivo, posicao_x, posicao_y)
{

	this.imagem = new Image();
	this.imagem.src = arquivo;
	this.carregar = false;
	this.visivel = true;

	this.imagem.onload = function()
	{

		carregar = true;
		console.log("carregou" + carregar);

	}

	this.tamanho_w = 800;
	this.tamanho_h = 600;
	this.posicao_x = posicao_x;
	this.posicao_y = posicao_y;

	this.draw = function()
	{

	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)

}

}
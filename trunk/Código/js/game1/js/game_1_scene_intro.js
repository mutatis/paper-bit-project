function Game1SceneIntro ()
{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/menu.png", 600, 800, 0, 0);
		this.Sara = new Fundo("imgs/game_1/sara.png", 800, 600, 0, 0);
		this.boca_move1 = new boca_move ("imgs/boca.png",127 , 80, 130, 210);
		this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
		//this.button_instru = new Button("imgs/instrucao.png",500, 90, 575, 450);
		this.button = new MyButton("imgs/play2.png",166, 72, 575, 450);
		this.balao1 = new Fundo("imgs/1.png", 204, 215,400,30);
	
		
		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
       	
       	
       	this.update=function()
	{			

    };
    
    this.draw=function()
    {                        
		//mandando o fundo desenhar
		this.fundo.draw();				
		//mandando o botao start desenhar
        this.button_start.draw();
        //mandando o botao voltar desenhar
        this.button.draw();
		//mandando a Sara ser desenhada(menina que esta na intro)
		this.Sara.draw();
		//mandando a boca dela desenhar
		this.boca_move1.draw();
		//mandando desenhar o balao de fala que sai da boca dela
		this.balao1.draw();
        
				          
    }
    
    //vendo se o botao do mouse foi pressionado	
	this.mouse_down=function(mouse)
   	{
		//se o botao start for clicado, ele vai pro jogo e sai um efeito sonoro 
		if(this.button_start.clicked(mouse))
        {
        	game1.currentGameScene = game1.GAMESCENE.LEVEL1;  
			this.music.play();//som ao ser clicado pelo botão
			this.button_start.current_frame = 1;
        }
   		//se o botao voltar for clicado, ele vai pro menu e sai um efeito sonoro
        if(this.button.clicked(mouse))
    	{
    		currentScene = SCENE.MENU;
			this.music.play();//som ao ser clicado pelo botão
			this.button.current_frame = 1;
    	}
      

    }
    
    //vendo se alguma tecla foi pressionada
    this.key_down=function(key)
    {
                //
    }
    
    
    //vendo se o botao do mouse foi solto
	this.mouse_up=function(mouse)
    {
                //
        
    }
    
 
    //vendo se alguma tecla foi solta    
	this.key_up=function(key)
    {
                //
    }
	
  	//vendo onde o mouse ta na tela
	this.mouse_move=function(mouse)
  	{
  		
		//vendo se o mouse passou em cima do botao, se passou desenha a outra parte da imagem, fazendo o botao"acender"
  		if(this.button_start.mouse_over(mouse))
  		{
  			
  			this.button_start.current_frame = 0;
  		}
  		else
  		{
  			this.button_start.current_frame = 1;
  		}
		
		if(this.button.mouse_over(mouse))
  		{
  			this.button.current_frame = 0;
  		}
  		else
  		{
  			this.button.current_frame = 1;
  		}
		
  	};

    
}//fecha Intro

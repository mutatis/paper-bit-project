function Game1SceneTheEnd()
{
    this.reset=function()
	{
	//abre Intro
        //file, size_x, size_y, pos_x, pos_y
		this.fundo = new Fundo("imgs/game_1/venceu.png", 600, 800, 0, 0);
		this.button_start = new MyButton("imgs/play1.png", 166, 72, 575, 350);
		this.button_back = new MyButton("imgs/play2.png",166, 72, 575, 450);

		//som do botão ao ser clicado
		this.music = new Audio();
		this.music.src = "sounds/Mouse.mp3"
		this.music.volume = 1.0
		
		//som do fundo da intro
		this.music_fundo = new Audio();
		this.music_fundo.src = "sounds/venceu.mp3"
		this.music_fundo.volume = 1.0
		
       	this.update=function()
	{			
	this.button_start
	this.button_back
	this.music_fundo.play();
    };
    
	}//fecha reset
	
	this.reset(); 
	
    this.draw=function()
    {    
		//mandando fundo ser desenhado
		this.fundo.draw();				
        //mandando botao de start ser desenhado
		this.button_start.draw();
		//mandando botao de voltar ser desenhado
		this.button_back.draw();
  		          
    }
    
    //vendo se o botao do mouse foi pressionado
	this.mouse_down=function(mouse)
   	{   		
        //se o botao start for clicado, ele vai pro jogo e sai um efeito sonoro 
		if(this.button_start.clicked(mouse))
        {
        	game1.currentGameScene = game1.GAMESCENE.LEVEL1;  //botão para o game
			this.button_start.current_frame = 1;
			this.music.play();//som ao ser clicado pelo botão
			this.music_fundo.pause();
        }
		//se o botao voltar for clicado, ele vai pro menu e sai um efeito sonoro
		if(this.button_back.clicked(mouse)) //botão para voltar o menu
        {
        	currentScene = SCENE.MENU;
			game1.currentGameScene = game1.GAMESCENE.INTRO;
			this.button_back.current_frame = 1;
			this.music.play();//som ao ser clicado pelo botão
			this.music_fundo.pause();
        	
        	 
        	
        
        	this.reset();
        }
        
    }
    
    //vendo se alguma tecla foi pressionada    
	this.key_down=function(key)
    {
                //
    }


	//vendo se alguma tecla foi solta    
	this.key_up=function(key)
    {
                //
    }
    
    
    //vendo se o botao do mouse foi solto
	this.mouse_up=function(mouse)
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
		
		if(this.button_back.mouse_over(mouse))
  		{
  			this.button_back.current_frame = 0;
  		}
  		else
  		{
  			this.button_back.current_frame = 1;
  		}
		
  	};
    
}//fecha Intro	
		
		
		

	    

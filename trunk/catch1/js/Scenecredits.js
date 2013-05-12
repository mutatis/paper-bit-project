function SceneCredits()
{
        
    
    this.update=function()
    {
        
    };
    
    this.draw=function()
    {
        
        screen.font = "20px Comic Sans MS";
                screen.fillStyle="#000000";
                screen.fillText("CREDITS", 20, 20);
    };
    
    
    this.mouse_down=function(mouse)
    {
        console.log("CREDITS mouse X " + mouse.x + " mouse Y " + mouse.y );
        
        currentScene = SCENES.INTRO;
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

    
}
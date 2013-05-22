function MyButton(file, frame_x, frame_y, pos_x, pos_y)
{
	this.image = new Image();
	this.image.src = file;
	this.loaded = false;
	this.visible = true;
	
	this.size_x = frame_x;
    this.size_y = frame_y;
    this.position_x = pos_x;
    this.position_y = pos_y;
    
    this.position_y_src = 0;
    
    this.current_frame = 1;
    
    this.scale_x = 1;
    this.scale_y = 1;

	this.image.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	//screen.drawImage(this.image, this.position_x, this.position_y);
    	
    	if(this.visible)
        screen.drawImage(this.image,
        this.size_x*this.current_frame,
        this.position_y_src,
        this.size_x, 
        this.size_y, 
        this.position_x, 
        this.position_y, 
        this.size_x*this.scale_x,
        this.size_y*this.scale_y);
    };
    
    this.clicked = function(mouse)
    {
    	if(Collide(
    		mouse.x,
    		mouse.y,
    		1,
    		1,
    		this.position_x,
    		this.position_y,
    		this.size_x,
    		this.size_y
    	))
    	{
    		return true;
    	}
    	
    	return false;
    };
    
    this.mouse_over = function(mouse)
    {
    	console.log("MyButton");
    	if(Collide(
    		mouse.x,
    		mouse.y,
    		1,
    		1,
    		this.position_x,
    		this.position_y,
    		this.size_x,
    		this.size_y
    	))
    	{
    		return true;
    	}
    	
    	return false;
    };
}
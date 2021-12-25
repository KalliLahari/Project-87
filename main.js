canvas=new fabric.Canvas("myCanvas");
// Create canvas variable
 block_y=0;
 block_x=0;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image,function(Img){
		block_img_object=Img;
		
		block_img_object.scaleToWidth(900);
		block_img_object.scaleToHeight(600);
		block_img_object.set({top:block_y,left:block_x});
  
		canvas.add(block_img_object);
	  });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x =0;
		// upload red ranger
		new_image("rr.jpg");
		console.log("r");

	}
	if(keyPressed == '71')
	{
		block_x = 300;
	    new_image("gr.png");
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =500;
		new_image("yr.png");
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 800;
		new_image("pr.png");
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 900;
	    new_image("br.png");
		console.log("b");
	}
	
}


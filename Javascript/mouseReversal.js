
//constants to offset images by width and height so nothing overlaps the edge of the screen
const imgWidth = 400;
const imgHeight = 130;
const homeOffset = 30;
//gets the size of the webpage
const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;
//grabs the fake mouse pointer image
const pointer = document.getElementById("pointer");
//grabs scam image
const image = document.getElementById("image");
//grabs hidden image and sets it on the opposite side of the screen as the scam image
const hidden = document.getElementById("hidden");
hidden.style.transform = "translate("+(viewportWidth-imgWidth)+"px,"+(viewportHeight-imgHeight)+"px)";
//sets the position of the home link
document.getElementById("home").style.transform = "translate("+(viewportWidth/2+homeOffset)+"px,"+(viewportHeight/2+homeOffset)+"px)";
//calles mouseController when the real mouse moves around the page 
document.getElementById("mouseMovement").onmousemove = function(event){
    //finds the coordinates of the real mouse and then calculates where the fake mouse pointer should be translated to
    let pointerx = viewportWidth - event.clientX;
    let pointery = viewportHeight - event.clientY;
    //moves fake pointer to the calculated position
    pointer.style.transform = "translate("+pointerx+"px,"+pointery+"px)";
}
//when your real mouse clicks on the hidden image, this is run
document.getElementById("hidden").onclick = function(event){
    //generates random coordinates for the scam image to move to 
    let imgx = Math.floor(Math.random() * (viewportWidth-imgWidth));
    let imgy = Math.floor(Math.random() * (viewportHeight-imgHeight));
    //translates scam image to those coordinates
    hidden.style.transform = "translate("+imgx+"px,"+imgy+"px)";
    //translates hidden image to coordinates opposit of the scam image
    image.style.transform = "translate("+(viewportWidth-(imgx+imgWidth))+"px,"+(viewportHeight-(imgy+imgHeight))+"px)";
}
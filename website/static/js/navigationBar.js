//Making Navigation Bar responsive
function responsiveNavigation() 
{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") 
    {
        x.className += " responsive";
    } 
    else 
    {
        x.className = "topnav";
    }
}

//Making Navigation Bar sticky
window.onscroll = function() {stickyNavigation()};
        
var navbar = document.getElementById("nav-sticky");
var sticky = navbar.offsetTop;
        
function stickyNavigation() 
{
    if (window.pageYOffset >= sticky) 
    {
        navbar.classList.add("sticky")
    } 
    else 
    {
        navbar.classList.remove("sticky");
    }
}
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

function dropdownMenu(event)
{
    x = event.path;
    console.log(x);
    for (i=0; i<x.length; i++)
    {
        y = x[i].lastElementChild;
        if (typeof y != "undefined" && y.className == "dropdown-content")
        {
            if (y.style.display == "")
            {
                y.style.display = "block";
            }
            else
            {
                y.style.display = "";
            }
        }
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
---
id: doc7
title: Navigation Bar
---

## Introduction

Making responsive navigation bar for your page may be problematic. That's why we created classes to let you do it in seconds. Before you start, you have to learn, how to prepare structure of your menu. You will need 2 files, which are needed to include in your code. First thing you should do, is including those CSS file to your HTML __head__ section and JavaScript file at the end of your __body__:

```html
<head>
    ...
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    ...
</head>
<body>
    ...
    <script src="https://ddeexx3.github.io/UI_Kit/js/navigationBar.js"></script>
</body>
```
Navigation bar created with our classes is built from unordered list. We can devide it for 2 main parts: topnav and dropdown. 
<br>
First part named __topnav__ contains all of the menu options.
<br> 
If you want any option to have a dropdown menu, this is a second part named __dropdown__. This is separate, nested list containing addidtinal stuff. Example navigation menu may look like this:
<br>

![NavigationBar](https://ddeexx3.github.io/UI_Kit/img/navigationBar1.png "topnav")

Of course, dropdown part is optional and may be added to every menu option.
<br>

Your navigation bar HTML code should look exactly like this below:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
    <!-- LINK TO CSS FILE CONTAINING ICONS USED IN NAVIGATION BAR -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <!-- IN THIS DIV YOU WILL ADD ALL OF OUR STYLING CLASSES -->
    <div>
         <!-- UNORDERED LIST WITH CLASS "topnav" CONTAINING ALL OF THE MENU OPTIONS" -->
        <ul class="topnav" id="myTopnav">
            <!-- ANY OPTION OF MENU WITH LINK TO ANOTHER PAGE (CLASS "active" WILL BE DESCRIBED LATER) -->
            <li class="active"><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <!-- OPTION with class "dropdown" CONTAINING DROPDOWN MENU WITH ADDITIONAL OPTIONS -->
            <li onclick="dropdownMenu(event)" class="dropdown">
                <div class="dropbtn">Dropdown
                    <!-- ICON SHOWING THIS OPTION IS DROPDOWN MENU -->
                    <i class="fa fa-caret-down"></i>
                </div>
                <!-- NESTED LIST CONTAINING OPTIONS OF DROPDOWN MENU -->
                <ul class="dropdown-content">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </li>
            <li><a href="#about">About</a></li>
            <!-- ELEMENT WITH ICON FOR RESPONSIVE NAVIGATION BAR - IT ALWAYS MUST BE ADDED AS LAST OPTION OF THE MENU -->
            <li class="icon" onclick="responsiveNavigation()"><a href="javascript:void(0);">&#9776;</a></li>
        </ul>
    </div>
<!-- LINK TO SCRIPT NEEDED FOR PROPER WORK OF RESPONSIVE NAVIGATION BAR -->     
<script src="https://ddeexx3.github.io/UI_Kit/js/navigationBar.js"></script>
</body>
</html>
```
As you can see above, there are some classes and elements that you have to contain to your navigation bar, if you want it to work properly:
- whole navigation bar should be packed in __div element__, where you can add our styling classes,
- __ul__ element, beeing main part of your navigation bar, must contain __class="topnav"__ and __id="myTopnav"__,
- if you want any option of your navigation bar to have dropdown menu, you have to add __class="dropdown"__ to it with all of the stuff (__important thing is to add classes: "dropdown", "fa", "fa-caret-down", "dropdown-content" and also add onclick="dropdownMenu(event)" function in proper place__):
```html 
<li onclick="dropdownMenu(event)" class="dropdown">
    <div class="dropbtn">Dropdown
        <i class="fa fa-caret-down"></i>
    </div>
    <ul class="dropdown-content">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
    </ul>
</li>
```
- in the end of the navigation bar code, you should add element responsible for navigation menu responisvity:
```html
<ul>
    ...
    <li class="icon" onclick="responsiveNavigation()"><a href="javascript:void(0);">&#9776;</a></li>
</ul>
```

- adding __class="active"__ to any menu option lets you see how it looks, when window with this option is active on your site. You can later add some JavaScript code adding class="active" to any option which is opened at the moment. In our examples, we added class="active" to the first menu option.
<br>

If you have your navigation bar structure prepared, it should now look like this:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="VoryPj" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 1">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/VoryPj/">
  NavigationBar example 1</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Size
First group of classes is responsible for size and appearance of your navigation bar. This class look like below:
```sass
.nav-$size
```
Where:
- $size - size of your navigation bar. You can replace $size with values: __the-smallest__, __small__, __medium-small__, __medium__, __big__ and __the-biggest__. 
<br>

We prepared 6, fully responsive sizes of menu. Differences between them are shown in table below: 

| Class name  | Minimal width of menu option on desktop screen  |  Minimal width of menu option on tablet screen | Minimal width of dropdown menu (on every screen)  | Padding top & bottom  |  Padding right & left |  Font size |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| nav-the-smallest  | 30px  | 20px  |  100px | 14px  | 12px  | 9px - 11px  |   
|  nav-small |  60px | 40px  | 125px  |  14px |  16px |  11px - 14px |   
|  nav-medium-small | 90px  | 60px  | 185px  |  18px |  20px |  14px - 16px |   
|  nav-medium | 120px  | 80px  |  240px | 22px  |  24px |  16px - 20px |   
|  nav-big | 150px  | 100px  | 295px  | 26px  |  28px | 20px - 24px  |   
| nav-the-biggest  | 180px  |  120px |  355px | 30px  | 32px  |  24px - 28px |  

__Important note!__
<br>

We recommend you to use "nav-the-biggest" class for max 3 menu options and "nav-big" class for max 4 menu option. Otherwise, it may not display properly in some screens.

In example below, we set to our div class "nav-medium". If you want to see other sizes, you can simply edit the code with adding rest of the classes.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="nav-medium">
        <ul class="topnav" id="myTopnav">
            <li class="active"><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li onclick="dropdownMenu(event)" class="dropdown">
                <div class="dropbtn">Dropdown
                    <i class="fa fa-caret-down"></i>
                </div>
                <ul class="dropdown-content">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li class="icon" onclick="responsiveNavigation()"><a href="javascript:void(0);">&#9776;</a></li>
        </ul>
    </div>
<script src="https://ddeexx3.github.io/UI_Kit/js/navigationBar.js"></script>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="RXjJdE" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 2">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/RXjJdE/">
  NavigationBar example 2</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Colors
Let's move to colors of your navigation bar. You can set them in 2 ways: 
- very fast by adding only one class to your div and setting colors by deafult,
- longer by adding 10 classes to your div, but styling every element of your navigation bar separately.
<br>

### Color of every element
We will start from the second method. We created 10 different classes to style every element of your navigation bar. You should remember, that if you decide to use this method, you are required to contain all of 10 classes in your navigation bar! Otherway, colors may not display properly. 
<br>

All of the classes use __$color__ variable. To remember it, [come back to typography section >](doc2#links).

You can see all of the color classes in table below:
| Class name  | Desctription  |
|:-:|:-:|
| nav-$color  | Sets background color of navigation bar  |
| nav-font-$color  | Sets font color of navigation bar  |
| active-$color  | Sets background color of active menu option  |
|  active-font-$color| Sets font color of active menu option  |
| nav-hover-$color | Sets background color of navigation bar when you mouse over it  |
| nav-font-hover-$color   | Sets font color of navigation bar when you mouse over it  |
| dropdown-$color  | Sets background color of dropdown menu  |
| dropdown-font-$color  |  Sets font color of dropdown menu |
| dropdown-hover-$color  | Sets background color of dropdown menu when you mouse over it  |
| dropdown-font-hover-$color  |  Sets font color of dropdown menu when you mouse over it |

![NavigationBar2](https://ddeexx3.github.io/UI_Kit/img/navigationBar2.png "topnav2")

__Important note!__
<br>

We set hover color values to be 10% lighten than themselves. That's why you can use the same color for background and hover.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="nav-medium nav-link nav-font-primary active-success active-font-primary nav-hover-link nav-font-hover-primary dropdown-primary dropdown-font-link dropdown-hover-link dropdown-font-hover-primary">
        <ul class="topnav" id="myTopnav">
            <li class="active"><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li onclick="dropdownMenu(event)" class="dropdown">
                <div class="dropbtn">Dropdown
                    <i class="fa fa-caret-down"></i>
                </div>
                <ul class="dropdown-content">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li class="icon" onclick="responsiveNavigation()"><a href="javascript:void(0);">&#9776;</a></li>
        </ul>
    </div>
<script src="https://ddeexx3.github.io/UI_Kit/js/navigationBar.js"></script>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="NQwLQE" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 3">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/NQwLQE/">
  NavigationBar example 3</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Default color
As we said at the beggining of this section, you can also set color of you navigation bar faster, using only one class below:
```sass
.nav-default-color
```
There is no posibility to set every element's color, it's done by default theme created by us. You can see color of every navigation element in the table below:
| Navigation bar element  |  Default color |
|:-:|:-:|
| Background color of navigation bar  | Secondary  |
|  Font color of navigation bar |  Primary |
| Background-color of active menu option  | Teritary  |
| Font color of active menu option  | Primary  |
| Background color of navigation bar when you mouse over it  | 10% lighter than secondary  |
| Font color of navigation bar when you mouse over it  | Primary  |
| Background color of dropdown menu  | Primary  |
|  Font color of dropdown menu | Secondary  |
| Background color of dropdown menu when you mouse over it  | 10% lighter than secondary  |
| Font color of dropdown menu when you mouse over it  | Primary  | 

```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="nav-medium nav-default-color">
        <ul class="topnav" id="myTopnav">
            <li class="active"><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li onclick="dropdownMenu(event)" class="dropdown">
                <div class="dropbtn">Dropdown
                    <i class="fa fa-caret-down"></i>
                </div>
                <ul class="dropdown-content">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li class="icon" onclick="responsiveNavigation()"><a href="javascript:void(0);">&#9776;</a></li>
        </ul>
    </div>
<script src="https://ddeexx3.github.io/UI_Kit/js/navigationBar.js"></script>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="NQwERN" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 4">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/NQwERN/">
  NavigationBar example 4</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Radius level
In your navigation bar you can also set level of its border radius. We created class below:
```sass
.nav-$radiusValue
```
Where:
<br>

$radiusValue - a radius, you can set in your menu. You can replace $radiusValue with: __no-radius__ (default), __small-radius__, __medium-radius__ and __big-radius__. To see more informations about it, [see Buttons section >](doc4#radius-level).
<br>

In the example, we set radius to "medium" value. You can easily change it, by adding another class.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="nav-medium nav-default-color nav-medium-radius">
        <ul class="topnav" id="myTopnav">
            <li class="active"><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li onclick="dropdownMenu(event)" class="dropdown">
                <div class="dropbtn">Dropdown
                    <i class="fa fa-caret-down"></i>
                </div>
                <ul class="dropdown-content">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li class="icon" onclick="responsiveNavigation()"><a href="javascript:void(0);">&#9776;</a></li>
        </ul>
    </div>
<script src="https://ddeexx3.github.io/UI_Kit/js/navigationBar.js"></script>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="YmERYo" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 5">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/YmERYo/">
  NavigationBar example 5</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Menu options align
Next thing, you can set is align of options in your navigation bar. All of the content inside your menu, can be aligned to __right__, __left__ and __center__. You can use group of classes, that you got to know before:
```sass
.text-$direction
```
Where:
<br>

- $direction - side to which navigation bar content is aligned. You can replace $direction with: __right__, __left__ and __center__.
<br>

In the example, we set navigation bar to be center-aligned.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <div class="nav-medium nav-default-color nav-medium-radius text-center">
        <ul class="topnav" id="myTopnav">
            <li class="active"><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li onclick="dropdownMenu(event)" class="dropdown">
                <div class="dropbtn">Dropdown
                    <i class="fa fa-caret-down"></i>
                </div>
                <ul class="dropdown-content">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li class="icon" onclick="responsiveNavigation()"><a href="javascript:void(0);">&#9776;</a></li>
        </ul>
    </div>
<script src="https://ddeexx3.github.io/UI_Kit/js/navigationBar.js"></script>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="mNqQve" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 6">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/mNqQve/">
  NavigationBar example 6</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Visibility
There are 3 options to display your navigation bar:
- __hidden__ - navigation bar is hidden when you scroll the page (it behaves as every element on the page) - this is default value, you dont have to set additional class:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="voWvOL" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 7">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/voWvOL/">
  NavigationBar example 7</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

- __fixed__ - navigation bar is always fixed to the top of your site (even if there's any text under it). To create fixed menu, simply add class:
```
.nav-fixed
```
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="bXYOeY" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="bXYOeY">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/bXYOeY/">
  bXYOeY</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

- __sticky__ - it's a kind of hidden and fixed mix. Menu behaves as "hidden" to the moment it's on top of the site. Then it becames "fixed". Other world: navigation bar will stick to the top when you reach its scroll position. To create sticky menu, you should __add id="nav-sticky"__ to your div:
```sass
#nav-sticky
```
__VERY IMPORTANT NOTE!__
<br>

As you can see there is an exception. Till now, we've always added classes to our elements. For making your navigation menu "sticky", you have to __add "id" instead of "class"__. It's becouse it uses some JavaScript code (in particural getElementById method).

<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="gVXZzG" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 9">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/gVXZzG/">
  NavigationBar example 9</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Logo space
When it comes to navigation bar, there is often a situation that you want to place your logo iniside it. You can use our classes to do that.
### Squared logo
You have much less work to do, if your logo is squared. For this situation, we created classes that fits automatically to your navigation bar. You can use class:
```sass
.nav-logo-$side-$size
```
Where:
<br>

- $side - side of navigation bar to which your logo will be aligned. You can replace $side with __right__ and __left__.
- $size - size of navigation bar to which you want to add your logo. You can replace $size with __the-smallest__, __small__, __medium-small__, __small__, __medium__, __big__ and __the-biggest__.

Sizes of logos, according to class are shown in table below:

|  $size value |  Logo width (icon font size) on desktop screen | Margin on desktop screen  | Logo width (icon font size) on tablet screen  | Margin on tablet screen  | Logo width (icon font size) on mobile screen  | Margin on mobile screen  |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| the-smallest  | 26px  | 8px  | 24px  |  7.5px | 24px  | 7.5px  |
| small  | 28px  | 9px  | 26px  |  8px | 26px  |  8px |
| medium-small  |  36px |  10px |  34px |  10px |  28px |  9px |
|  medium |  44px |  13px | 40px  | 12px  | 30px  | 9px  |
| big  | 51px  | 16px  | 48px  | 15px  | 32px  | 11px  |
|  the-biggest |  60px | 18px  | 57px  |  17px | 37px  |  11px |

As we said before, to use this class, your logo __must be squared__ (it means it must have the same width and height). Second important thing is to know, where to place your "img" file inside navigation bar (it may be also icon - "i" HTML element). You __always should add it at the end of the navigation bar content__:
```html
<ul class="topnav" id="myTopnav">
    ...
    <li class="icon" onclick="responsiveNavigation()"><a href="javascript:void(0);">&#9776;</a></li>
    <!--YOU PLACE YOUR LOGO(S) HERE, E.G.: -->
    <img class="nav-logo-left-medium-small" src="https://ddeexx3.github.io/UI_Kit/img/appleLogo.png">
    <i class="fa fa-facebook-square nav-logo-right-medium-small input-font-primary"></i>
    <i class="fa fa-instagram nav-logo-right-medium-small input-font-primary"></i> 
</ul>
```
Look at this two examples with using that class:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="vopVQj" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 10">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/vopVQj/">
  NavigationBar example 10</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="rXpqRM" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 11">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/rXpqRM/">
  NavigationBar example 11</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### Other logo
When your logo isn't squared you have a little bit more work to do. We were not able to create class making responsive logo for every size and shape. In this situation you should use class:
```sass
.nav-logo-$side
```
Where:
<br>

- $side - side of navigation bar to which your logo will be aligned. You can replace $side with __right__ and __left__.
<br>

As you can see above, this class is limited to logo align. Size of it, you have to define on your own. Of course you can use for that all of our width, height, margin and padding classes. To see more information [go to Grid Layout section >](doc3#paddings-margins-width-and-height-sizes)
<br>
After few minutes of work with that classes, you can reach satisfying effect too:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="XvVorB" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NavigationBar example 12">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/XvVorB/">
  NavigationBar example 12</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

[See demo page showing navigation bar styles >](/UI_Kit/navigationDemo.html)
---
id: doc3
title: Grid Layout
---

## Introduction

Next thing we made are classes describing position of the elements on your page. We used for this CSS Grid. We divided area of any div for 12 equal columns. This makes you have unlimited positioning of elements in your page:

![Grid CSS](https://ddeexx3.github.io/UI_Kit/img/gridLayout1.png "Grid")

## Preparation

Before you start, you have to know that element you want to display as a grid must be specified in your CSS file. First thing you need to do is write this lines of CSS to every class name, you want to display as a grid:

```css
.class_name
{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px;
}
```

Third element: "grid-gap" is optional and specifies gap between every div in a grid.

## Grid classes

To get your work easier we created classes describing position of the element. Every class has its name according to a pattern:

```scss
$gridClass = "col-$screenResolution-$columnsNumber";
```

Where:
\
\
$columnNumber - ammount of columns in which div is expanded, for example: when $columnNumber = 4, it means that div is 4 columns width.
\
\
$screenResolution - kind of screen resolution where class is used. This parameter gets 3 values: 
- sm (for mobile screens - below 735px),
- md (for tablet screens - between 735 and 1068px),
- lg (for desktop screens - above 1068px).

For example:
\
\
class "col-sm-4" means that div is 4 of 12 columns width on mobile screens.

![Grid Div](https://ddeexx3.github.io/UI_Kit/img/gridLayout2.png "Grid Divs")

## How to use them

To understand how our grid classes work, let's start from basic example. We created div with class "container". This container will be our grid. Inside it, we have a div with class "box". We want it to be 6 columns width in desktop screen, 8 columns width in tablet screen and 10 columns width in mobile screen. According to pattern above, we have to give our div 3 classes:
- "col-lg-6"
- "col-md-8"
- "col-sm-10"
<br/>

Apart from this we use class "big" to set font size inside our div to "big". See the code and result of executing it to understand how it works:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
</head>
<body>
<!--STYLING DIVS -->
    <style>
    .container
    {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 10px;
    }
    .box
    {
    	background-color: green;
        text-align: center;
        color: white;
        padding: 0;
        height: 200px;
    }
    </style>
<!--END -->
	<div class="container">
		<div class="box big col-lg-6 col-md-8 col-sm-10">Content</div>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="VoZzoa" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 1">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/VoZzoa/">
  GridLayout - example 1</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<!--[See effect of executed code >](https://www.w3schools.com/code/tryit.asp?filename=G5XEWM7HBT7K)-->

## Another example

Now, let's imagine that we have 6 identical divs. It could be pictures for example. We want to display them in one line on a dekstop screen, 3 of them in one line on tablet screen and 2 of them in one line in mobile screen.
\
As we remember, our grid has 12 columns, so it's easy to calculate that:
- in desktop screen our div must be 2 columns width,
- in tablet screen our div must be 4 columns width,
- in mobile screen our div must be 6 column width.
<br/>

So, our divs must contain following classes:
- "col-lg-2",
- "col-md-4",
- "col-sm-6".

Let's check the code and see how easy it is!:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
</head>
<body>
<!--STYLING DIVS -->
    <style>
    .container
    {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 10px;
    }
    .box
    {
    	background-color: green;
        text-align: center;
        color: white;
        padding: 0;
        height: 200px;
    }
    </style>
<!--END -->
	<div class="container">
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="NQKaPY" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 2">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/NQKaPY/">
  GridLayout - example 2</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<!--[See effect of executed code >](https://www.w3schools.com/code/tryit.asp?filename=G5XFCVHUHN1U)-->

## Harder example

Let's complicate a little bit our code. Before our six divs we want to add another one, named "header". It will be div with header text and two divs "logo". We want "header" div to be centered and 10 columns width in every screen. We must add empty, 1 column width div before and after "header" div. It's becouse sum of columns in one line must be 12.

```html
<div class="container">
    <div class="col-lg-1 col-md-1 col-sm-1"></div>
    <div class="header col-lg-10 col-md-10 col-sm-10"></div>
    <div class="col-lg-1 col-md-1 col-sm-1"></div>
</div>
```

Our "header" div will be now new grid with 12 equal columns. We have to add to our css (remembering that "grid-gap" is optional):

```css
.header
{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px;
}
```

Inside "header" div, as we said before, we want to put 2 "logo" divs and header text between them. Divs with logo will be 1, 2 or 3 colums width, depending on screen size:

```html
<div class="container">
    <div class="col-lg-1 col-md-1 col-sm-1"></div>
    <div class="header col-lg-10 col-md-10 col-sm-10">
        <div class="logo col-lg-1 col-md-2 col-sm-3">LOGO</div>
        <h2 class="col-lg-10 col-md-8 col-sm-6">HEADER</h2>
        <div class="logo col-lg-1 col-md-2 col-sm-3">LOGO</div>
    </div>

    ...
</div>
```

Final code is like this below. Follow it and see how it works:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
</head>
<body>
<!--STYLING DIVS -->
    <style>
    .container
    {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 10px;
    }
    .box
    {
    	background-color: green;
        text-align: center;
        color: white;
        padding: 0;
        height: 200px;
    }
    .header
    {
    	display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 10px;
    	background-color: lightblue;
        text-align: center;
        color: black;
        height: 100px;
    }
    .logo
    {
    	background-color: yellow;
        height: 80px;
        margin: 10px;
    }
    </style>
<!--END -->
	<div class="container">
    	<div class="col-lg-1 col-md-1 col-sm-1"></div>
    	<div class="header col-lg-10 col-md-10 col-sm-10">
        	<div class="logo col-lg-1 col-md-2 col-sm-3">LOGO</div>
        	<h2 class="col-lg-10 col-md-8 col-sm-6">HEADER</h2>
            <div class="logo col-lg-1 col-md-2 col-sm-3">LOGO</div>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1"></div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="MNgEjx" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 3">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/MNgEjx/">
  GridLayout - example 3</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<!--[See effect of executed code >](https://www.w3schools.com/code/tryit.asp?filename=G5XGCZU2A4XN)-->

## Important note

Pay attention that sizes in one line must sum up to 12. Otherwise everything may crash. Let's see an the example:
\
\
Let's return to our example with 6 identic divs. Now, one of them is 7 columns width in desktop screen (instead of 6) and 5 columns width in tablet screen (instead of 4). See what happened:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
</head>
<body>
<!--STYLING DIVS -->
    <style>
    .container
    {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 10px;
    }
    .box
    {
    	background-color: green;
        text-align: center;
        color: white;
        padding: 0;
        height: 200px;
    }
    </style>
<!--END -->
	<div class="container">
		<div class="box big col-lg-2 col-md-5 col-sm-7">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
		<div class="box big col-lg-2 col-md-4 col-sm-6">Content</div>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="LwPzxZ" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 4">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/LwPzxZ/">
  GridLayout - example 4</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<!--[See effect of executed code >](https://www.w3schools.com/code/tryit.asp?filename=G5XGLXEGN2DX)-->
<br/>

## Paddings, margins, width and height sizes

We created huge ammount of classes to let you set fastly: padding, margin, height and width of any element.
First group of classes is responsible for sizes of whole property:
```sass
.$property-$size$unit
``` 
Where:
- $property - any property you want to set size of. You can replace $property with: __padding__, __margin__, __width__ and __height__.
- $unit - unit used to changing size of any property. You can replace $unit with: __px__ (which means size is set in pixels) or __percent__ (which means size is set in percents).
- $size - size of any property you want to change. You can set values __from 1 to 1000__ for pixels and __from 1 to 100__ for percents.
<br>

For example, if you add class "margin-20px" to your element, it means that every margin of this element will be 20px big. Class "margin-20percent" will set this margin to be 20% big.
<br>
You can also add class below to your element:
```sass
.$property-auto
```
It will set any property size automatically.
<br>

When it comes to margins and paddings you can also set size of every property side separately. To do that use class below:
```sass
.$property-$side-$size$unit
```
Where:
- $property - any property you want to set size of. You can replace $property with: __padding__ or __margin__.
- $side - any side of property, which size you want to change. You can replace $side with: __top__, __bottom__, __right__ and __left__.
<br>

$size and $unit values are exactly the same as above.
<br>

Of course, in this situation you can also set size values automatically. Simply add to any element class below:
```sass
.$property-$side-auto
```
For example, if you add class "margin-top-20px" to your element it means that top margin of this element will be 20px big. Class "margin-top-20percent" will set this margin to be 20% big.
<br>

See more examples to get to know how it works:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
</head>
<body>
    <style>
        .element
        {
            background-color: green;
            color: white;
        }
    </style>
    <div class="element width-200px height-200px margin-20px">1</div>
    <div class="element width-200px height-200px margin-top-20px margin-bottom-20px">2</div>
    <div class="element width-200px height-200px margin-left-auto margin-right-20px">3</div>
    <div class="element width-200px height-200px margin-left-auto margin-right-auto margin-bottom-20px">4</div>
    <div class="element width-50percent height-30px margin-auto">5</div>
    <div class="element width-50percent height-100px margin-auto padding-left-15percent">6</div>
    <div class="element width-50percent height-100px margin-auto padding-top-5percent">7</div>
</body>
</html>
```
See result of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="jgBKRe" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 5">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/jgBKRe/">
  GridLayout - example 5</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Radius level and background color of any element
If you want to change border radius level of any element (E.g. divs) you can use button radius class:
```sass
.button-$radiusLevel
```
To read more about it, [go to buttons section](doc4#radius-level).
<br>

You can also change background color of any element to one from 7 default values. You should use forms input classes:
```sass
.input-background-$color
```
To read more about it, [go to forms section](doc6#colors).
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/css/ui_kit.css">
</head>
<body>
    <style>
    .container
    {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 10px;
    }
    </style>
    <div class="text-center input-font-primary  container">
        <div class="medium height-200px input-background-link col-lg-2 col-md-4 col-sm-6">No radius, link color</div>
        <div class="medium height-200px input-background-error button-small-radius button-no-radius col-lg-2 col-md-4 col-sm-6">Small radius, error color</div>
        <div class="medium height-200px input-background-warning button-medium-radius col-lg-2 col-md-4 col-sm-6">Medium radius, warning color</div>
        <div class="medium height-200px input-background-secondary button-big-radius col-lg-2 col-md-4 col-sm-6">Big radius, secondary color</div>
        <div class="medium height-200px input-background-success button-oval col-lg-2 col-md-4 col-sm-6">Oval <br> radius, success color</div>
        <div class="medium height-200px input-background-teritary col-lg-2 col-md-4 col-sm-6">No radius defined (no radius by default), teritary color</div>
    </div>
</body>
</html>
```
See result of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="QepYBr" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 6">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/QepYBr/">
  GridLayout - example 6</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

[See demo page showing grid layout >](/UI_Kit/layoutDemo.html)
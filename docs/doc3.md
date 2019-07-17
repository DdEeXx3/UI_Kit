---
id: doc3
title: Grid Layout
---

## Introduction

Next thing we made are classes describing position of the elements on your page. We used for this CSS Grid. We divided area of any div for 12 equal columns. This makes you have unlimited positioning of elements in your page:

![Grid CSS](https://i.ibb.co/j3pX25g/Zrzut-ekranu-2019-07-12-o-14-43-40.png "Grid")

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
$gridClass = "col_$screenResolution_$columnsNumber";
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
class "col_sm_4" means that div is 4 of 12 columns width on mobile screens.

![Grid Div](https://i.ibb.co/d5fV3rn/Zrzut-ekranu-2019-07-12-o-15-45-43.png "Grid Divs")

## How to use them

To understand how our grid classes work, let's start from basic example. We created div with class "container". This container will be our grid. Inside it, we have a div with class "box". We want it to be 6 columns width in desktop screen, 8 columns width in tablet screen and 10 columns width in mobile screen. According to pattern above, we have to give our div 3 classes:
- "col_lg_6"
- "col_md_8"
- "col_sm_10"
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
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/ui_kit.css">
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
		<div class="box big col_lg_6 col_md_8 col_sm_10">Content</div>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="css,result" data-user="ddeexx3" data-slug-hash="VoZzoa" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 1">
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
- "col_lg_2",
- "col_md_4",
- "col_sm_6".

Let's check the code and see how easy it is!:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/ui_kit.css">
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
		<div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="html,result" data-user="ddeexx3" data-slug-hash="NQKaPY" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 2">
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
    <div class="col_lg_1 col_md_1 col_sm_1"></div>
    <div class="header col_lg_10 col_md_10 col_sm_10"></div>
    <div class="col_lg_1 col_md_1 col_sm_1"></div>
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
    <div class="col_lg_1 col_md_1 col_sm_1"></div>
    <div class="header col_lg_10 col_md_10 col_sm_10">
        <div class="logo col_lg_1 col_md_2 col_sm_3">LOGO</div>
        <h2 class="col_lg_10 col_md_8 col_sm_6">HEADER</h2>
        <div class="logo col_lg_1 col_md_2 col_sm_3">LOGO</div>
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
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/ui_kit.css">
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
    	<div class="col_lg_1 col_md_1 col_sm_1"></div>
    	<div class="header col_lg_10 col_md_10 col_sm_10">
        	<div class="logo col_lg_1 col_md_2 col_sm_3">LOGO</div>
        	<h2 class="col_lg_10 col_md_8 col_sm_6">HEADER</h2>
            <div class="logo col_lg_1 col_md_2 col_sm_3">LOGO</div>
        </div>
        <div class="col_lg_1 col_md_1 col_sm_1"></div>
		<div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="html,result" data-user="ddeexx3" data-slug-hash="MNgEjx" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 3">
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
    <link rel="stylesheet" type="text/css" href="https://ddeexx3.github.io/UI_Kit/ui_kit.css">
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
		<div class="box big col_lg_2 col_md_5 col_sm_7">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
        <div class="box big col_lg_2 col_md_4 col_sm_6">Content</div>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="html,result" data-user="ddeexx3" data-slug-hash="LwPzxZ" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GridLayout - example 4">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/LwPzxZ/">
  GridLayout - example 4</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<!--[See effect of executed code >](https://www.w3schools.com/code/tryit.asp?filename=G5XGLXEGN2DX)-->
<br/>

[See demo page showing grid layout >](/UI_Kit/layoutDemo.html)
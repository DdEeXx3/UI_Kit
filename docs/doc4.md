---
id: doc4
title: Buttons
---

## Introduction

Now you will learn how to use our styling buttons classes. We devided this section for 4 different areas to give you unlimited personalisation abilities.

## Size
There are 3 different classes decribing sizes of buttons, which could be used. We created claasses named:
- "button_small",
- "button_medium",
- "button_big".
<br/>

Depending on chosen class, button sizes are specified as below:

|  Class |  Padding top & down |  Padding right & left | Marging top & down  | Font size |
|:-:|:-:|:-:|:-:|:-:|
|  button_small | 5px  | 12px  |  5px | 9px - 11px |
| button_medium  | 10px  | 25px  |  10px | 11px - 16px |
|  button_big |  20px |   50px | 20px | 16px - 24px  | 

Find differences between this three classes (there is another class - "button_white" used, it will be described later):

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
    <div class="text_center">
        <button class="button_small button_white">This is small button</button>
        <button class="button_medium button_white">This is medium button</button>
        <button class="button_big button_white">This is big button</button>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="html,result" data-user="ddeexx3" data-slug-hash="mNbXJW" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 1">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/mNbXJW/">
  Buttons - example 1</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Radius level

Second area of styling buttons is their border radius level. We created 5 types of it. Classes names are shown in table below:
| Class  |  Border radius |
|:-:|:-:|
| button_no_radius  | 0  |
| button_small_radius  |  0.5em |
| button_medium_radius  | 1em  |
| button_big_radius  | 2em  |
| button_oval  |  50% |

There is an example:
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
    <div class="text_center">
        <button class="button_medium button_no_radius button_white">This is no radius button</button>
        <button class="button_medium button_small_radius button_white">This is small radius button</button>
        <button class="button_medium button_medium_radius button_white">This is medium radius button</button>
        <button class="button_medium button_big_radius button_white">This is big radius button</button>
        <button class="button_medium button_oval button_white">This is oval button</button>
    </div>
</body>
</html>
```

See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="html,result" data-user="ddeexx3" data-slug-hash="oKvEQw" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 2">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/oKvEQw/">
  Buttons - example 2</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Color

Next thing is color of the button. We created 10 classes with commonly used colors. Every class describes color of its name:
- "button_white",
- "button_gray",
- "button_green",
- "button_red",
- "button_blue",
- "button_yellow",
- "button_orange",
- "button_pink",
- "button_brown".

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
    <div class="text_center">
        <button class="button_medium button_medium_radius button_white">This is white button</button>
        <button class="button_medium button_medium_radius button_gray">This is gray button</button>
        <button class="button_medium button_medium_radius button_black">This is black button</button>
        <button class="button_medium button_medium_radius button_green">This is green button</button>
        <button class="button_medium button_medium_radius button_red">This is red button</button>
    <br>
        <button class="button_medium button_medium_radius button_blue">This is blue button</button>
        <button class="button_medium button_medium_radius button_yellow">This is yellow button</button>
        <button class="button_medium button_medium_radius button_orange">This is orange button</button>
        <button class="button_medium button_medium_radius button_pink">This is pink button</button>
        <button class="button_medium button_medium_radius button_brown">This is brown button</button>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="html,result" data-user="ddeexx3" data-slug-hash="YmKaza" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 3">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/YmKaza/">
  Buttons - example 3</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Hover effect

Last area of styling buttons is their hover effect. We created 6 types of them:
- "button_hover_opacity"
- "button_hover_shadow_$color",
- "button_hover_up",
- "button_hover_down",
- "button_hover_left",
- "button_hover_right".

As you can see, there is posibillity to chose any of shadow color of the button hover. You can replace $color in that class with every of 10 available colors.

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
    <div class="text_center">
        <button class="button_medium button_medium_radius button_blue button_hover_opacity">This is hover opacity</button>
        <button class="button_medium button_medium_radius button_blue button_hover_shadow_blue">This is hover shadow</button>
        <button class="button_medium button_medium_radius button_blue button_hover_up">This is hover up</button>
        <button class="button_medium button_medium_radius button_blue button_hover_down">This is hover down</button>
        <button class="button_medium button_medium_radius button_blue button_hover_left">This is hover left</button>
        <button class="button_medium button_medium_radius button_blue button_hover_right">This is hover right</button>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="html,result" data-user="ddeexx3" data-slug-hash="gVYeLZ" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 4">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/gVYeLZ/">
  Buttons - example 4</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Combining all of the classes

As you could see, we used few classes to one button. It's possible to combine our styling button classes as you want. That makes you unlimited oportunities to create beautiful buttons in just seconds!
<br/>
<br/>
You can also define your own font size in every button using font-size classes from the first chapter. See examples of combining classes below:

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
    <div class="text_center">
        <button class="button_medium button_medium_radius button_gray button_hover_shadow_yellow">This is medium, medium radius,<br> gray, yellow hover shadow button</button>
        <button class="button_big button_no_radius button_pink button_hover_up">This is big, no radius,<br> pink, hover up button</button>
        <button class="button_small button_oval button_orange button_hover_opacity button_hover_right">This is small, oval, <br>orange, hover opacity <br> hover right button</button>
    <br>
        <button class="big button_big button_big_radius button_blue button_hover_shadow_green">OK</button>
        <button class="medium button_big button_no_radius button_yellow button_hover_opacity">Medium font</button>
        <button class="medium_small button_small button_oval button_red button_hover_shadow_red">X</button>
        <button class="medium_small button_small button_oval button_green button_hover_shadow_green">+</button>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="html,result" data-user="ddeexx3" data-slug-hash="wVwmEB" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 5">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/wVwmEB/">
  Buttons - example 5</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

Of course you are allowed to edit buttons on your own (for example changing their height and width) to make them more personalised.
<br>

[See demo page showing button styles >](/UI_Kit/buttonsDemo.html)
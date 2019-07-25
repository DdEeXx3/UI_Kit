---
id: doc4
title: Buttons
---

## Introduction

Now you will learn how to use our styling buttons classes. We devided this section for 4 different areas to give you unlimited personalisation abilities.

## Size
There are 3 different classes decribing sizes of buttons, which could be used. We created claasses named:
- "button-small",
- "button-medium",
- "button-big".
<br/>

Depending on chosen class, button sizes are specified as below:

|  Class |  Padding top & down |  Padding right & left | Marging top & down  | Font size |
|:-:|:-:|:-:|:-:|:-:|
|  button-small | 5px  | 12px  |  5px | 9px - 11px |
| button-medium  | 10px  | 25px  |  10px | 11px - 16px |
|  button-big |  20px |   50px | 20px | 16px - 24px  | 

Find differences between this three classes (there is another class - "button-primary" used, it will be described later):

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
    <div class="text-center"><br>
        <button class="button-small button-primary">This is small button</button>
        <button class="button-medium button-primary">This is medium button</button>
        <button class="button-big button-primary">This is big button</button>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="mNbXJW" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 1">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/mNbXJW/">
  Buttons - example 1</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Radius level

Second area of styling buttons is their border radius level. We created 5 types of it. Classes names are shown in table below:
| Class  |  Border radius |
|:-:|:-:|
| button-no-radius  | 0  |
| button-small-radius  |  0.5em |
| button-medium-radius  | 1em  |
| button-big-radius  | 2em  |
| button-oval  |  50% |

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
    <div class="text-center"><br>
        <button class="button-medium button-no-radius button-primary">This is no radius button</button>
        <button class="button-medium button-small-radius button-primary">This is small radius button</button>
        <button class="button-medium button-medium-radius button-primary">This is medium radius button</button>
        <button class="button-medium button-big-radius button-primary">This is big radius button</button>
        <button class="button-medium button-oval button-primary">This is oval button</button>
    </div>
</body>
</html>
```

See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="oKvEQw" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 2">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/oKvEQw/">
  Buttons - example 2</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Color

Next thing is color of the button. We created by default 6 classes with colors used on your page. Every class describes color of its name. Every color can be changed and it will be described in the next chapters:
- "button-primary",
- "button-secondary",
- "button-teritary",
- "button-success",
- "button-error",
- "button-warning".

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
    <div class="text-center">
        <button class="button-medium button-medium-radius button-primary">This is primary color button</button>
        <button class="button-medium button-medium-radius button-secondary">This is secondary color button</button>
        <button class="button-medium button-medium-radius button-teritary">This is teritary color button</button>
    <br>
        <button class="button-medium button-medium-radius button-success">This is success color button</button>
        <button class="button-medium button-medium-radius button-error">This is error color button</button>
        <button class="button-medium button-medium-radius button-warning">This is warning button</button>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="YmKaza" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 3">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/YmKaza/">
  Buttons - example 3</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>
IMPORTANT NOTE!
<br>
<br>
As you can see, primary color is a bright one. We proked the concept that it has font and border color of secondary one. Whereas, font color of other buttons is primary. That's why, primary color should be bright and secondary - dark.

## Hover effect

Last area of styling buttons is their hover effect. We created 6 types of them:
- "button-hover-opacity"
- "button-hover-shadow-$color",
- "button-hover-up",
- "button-hover-down",
- "button-hover-left",
- "button-hover-right".

As you can see, there is posibillity to chose any of shadow color of the button hover. You can replace $color in that class with every of 6 available colors.

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
    <div class="text-center">
        <button class="button-medium button-medium-radius button-secondary button-hover-opacity">This is hover opacity</button>
        <button class="button-medium button-medium-radius button-secondary button-hover-shadow-secondary">This is hover shadow</button>
        <button class="button-medium button-medium-radius button-secondary button-hover-up">This is hover up</button>
        <button class="button-medium button-medium-radius button-secondary button-hover-down">This is hover down</button>
        <button class="button-medium button-medium-radius button-secondary button-hover-left">This is hover left</button>
        <button class="button-medium button-medium-radius button-secondary button-hover-right">This is hover right</button>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="gVYeLZ" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 4">
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
    <div class="text-center">
        <button class="button-medium button-medium-radius button-teritary button-hover-shadow-secondary">This is medium, medium radius,<br> teritary color,<br> secondary color hover shadow button</button>
        <button class="button-big button-no-radius button-warning button-hover-up">This is big, no radius,<br> warning color, hover up button</button>
        <button class="button-small button-oval button-error button-hover-opacity button-hover-right">This is small, oval, <br>error color, hover opacity <br> hover right button</button>
    <br>
        <button class="big button-big button-big-radius button-secondary button-hover-shadow-success">OK</button>
        <button class="medium button-big button-no-radius button-primary button-hover-down button-hover-opacity">Medium font</button>
        <button class="medium-small button-small button-oval button-error button-hover-shadow-error">X</button>
        <button class="medium-small button-small button-oval button-success button-hover-shadow-success">+</button>
    </div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="wVwmEB" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Buttons - example 5">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/wVwmEB/">
  Buttons - example 5</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

Of course you are allowed to edit buttons on your own (for example changing their height and width) to make them more personalised.
<br>

Important note!
<br>

If you want to use our class to other buttons, for example __submit__ in form, you have to add additional class __"button"__ to it. HTML "button" type has some properties added by default, for other buttons you have to add it by using class __"button"__
<br>

[See demo page showing button styles >](/UI_Kit/buttonsDemo.html)
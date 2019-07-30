---
id: doc6
title: Forms
---

## Introduction

Forms are important and often used part of every website. That's why we created some classes to style inputs of every form. 

## Size

First group of classes is for sizing inputs of a form. It's very similar to buttons but we added one more argument to do it more flexible. Structure of class is shown below:

```sass
.input-$size-$width
```
Where:
- $size - size of input based on paddings, margins and font size. This parameter may get 3 values: __small__, __medium__ and __big__. Differences between them are displayed in the table below:

| $size parameter value  | Padding top & down  |  Padding right & left |  Margin |  Font size |
|:-:|:-:|:-:|:-:|:-:|
| small  |  2px | 10px  |  5px | 9px - 11px  |
| medium  |  4px |  20px | 10px  | 11px - 16px  |
|  big | 6px  |  30px |  20px | 16px - 24px  |

- $width - percentage value of input width in reference to div, in which this input has been created. You can replace $width with values __from 1 to 100__. You can also set it to __default__, what fits width of input automatically in reference to its size.

For example, when you set class of your input on "input-medium-50", that means it's medium size and 50% width of its parent div width.
Check more examples to see how it's work:

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
    <form>
        <div class="text-center form-div">
            <input class="input-small-default" type="text" placeholder="Default width small input">
            <input class="input-medium-default" type="text" placeholder="Default width medium imput">
            <input class="input-big-default" type="text" placeholder="Default width big input">
            <br>
            <input class="input-small-10" type="text" placeholder="10% width small input">
            <input class="input-medium-10" type="text" placeholder="10% width medium imput">
            <input class="input-big-25" type="text" placeholder="10% width big input">
            <br>
            <input class="input-small-30" type="text" placeholder="30% width small input">
            <input class="input-medium-30" type="text" placeholder="30% width medium imput">
            <input class="input-big-30" type="text" placeholder="30% width big input">
            <br>
            <input class="input-small-100" type="text" placeholder="100% width small input">
            <input class="input-medium-100" type="text" placeholder="100% width medium imput">
            <input class="input-big-100" type="text" placeholder="100% width big input">
        </div>
</form>
</body>
</html>
```
See result of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="eqzVaW" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Forms - example 1">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/eqzVaW/">
  Forms - example 1</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Border radius

Border radius classes were made exactly the same like in buttons. You can use class:

```sass
.input-$radiusValue
```
Where:
- $radiusValue - this parameter gets 5 values: __no-radius__, __small-radius__, __medium-radius__, __big-radius__, __oval__.

To get more information about it, see [Buttons section](doc4#radius-level).

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
    <form>
        <div class="text-center form-div">
            <input class="input-big-default input-no-radius" type="text" placeholder="No radius input">
            <input class="input-big-default input-small-radius" type="text" placeholder="Small radius input">
            <input class="input-big-default input-medium-radius" type="text" placeholder="Medium radius input">
            <br>
            <input class="input-big-default input-big-radius" type="text" placeholder="Big radius input">
            <input class="input-big-default input-oval" type="text" placeholder="Oval input">
        </div>
    </form>
</body>
</html>
```
See result of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="jgrxPz" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Forms - example 2">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/jgrxPz/">
  Forms - example 2</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Style

To let inputs look better, we created 2 different styles for them. To use this style, simply add class to your input:
```sass
.input-$style-$color
```
Where:
- $style - number of style you want to choose. This parameter gets 2 values: __style1__ and __style2__. Differences between them you can see in the example below.
- $color - default color style of your input. You can choose one of the colors described in previous chapters: __primary__, __secondary__, __teritary__, __success__, __error__, __warning__. To get more informations about this colors see [Table section](doc5#colors).

Color set in this class is used to color all of the elements of an input except of background. Of course you can change it and we'll explain how in the next point.
We changed background color for this example to have primary color input visible.

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
    <form>
        <div class="text-center form-div">
            <input class="input-style1-secondary input-small-default" type="text" placeholder="Small, style1 input">
            <input class="input-style1-secondary input-medium-default" type="email" placeholder="Medium, style1 input">
            <input class="input-style1-secondary input-big-default" type="text" placeholder="Big, style1 input">
            <br>
            <input class="input-style2-secondary input-small-default" type="text" placeholder="Small, style2 input">
            <input class="input-style2-secondary input-medium-default" type="email" placeholder="Medium, style2 input">
            <input class="input-style2-secondary input-big-default" type="text" placeholder="Big, style2 input">
            <br>
            <input class="input-no-radius input-style1-primary input-big-default" type="text" placeholder="Primary, style1 input">
            <input class="input-no-radius input-style1-secondary input-big-default" type="text" placeholder="Secondary, style1 input">
            <input class="input-no-radius input-style1-teritary input-big-default" type="text" placeholder="Teritary, style1 input">
            <br>
            <input class="input-no-radius input-style1-success input-big-default" type="text" placeholder="Success, style1 input">
            <input class="input-no-radius input-style1-error input-big-default" type="text" placeholder="Error, style1 input">
            <input class="input-no-radius input-style1-warning input-big-default" type="text" placeholder="Warning, style1 input">
            <br>
            <input class="input-small-radius input-style2-primary input-big-default" type="text" placeholder="Primary, style2 input">
            <input class="input-small-radius input-style2-secondary input-big-default" type="text" placeholder="Secondary, style2 input">
            <input class="input-small-radius input-style2-teritary input-big-default" type="text" placeholder="Teritary, style2 input">
            <br>
            <input class="input-small-radius input-style2-success input-big-default" type="text" placeholder="Success, style2 input">
            <input class="input-small-radius input-style2-error input-big-default" type="text" placeholder="Error, style2 input">
            <input class="input-small-radius input-style2-warning input-big-default" type="text" placeholder="Warning, style2 input">
        </div>
    </form>
</body>
</html>
```
See result od executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="MNeXYg" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Form - example 3">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/MNeXYg/">
  Form - example 3</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Colors

Last group of classes is responsible for changing default colors of input elements. You can change font, placeholder and background color. We decided not to create separate classes for border color, becouse you can change it with style classes. To change any element's color use class below:

```sass
.input-$element-$color
```
Where:
- $element - any input's element you want to have color changed. This parameter may get 3 values: __font__, __placeholder__ and __background__.
- $color - a color on which you want to change your element. You can set value: __primary__, __secondary__, __teritary__, __success__, __error__ and __warning__.

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
    <form>
    <div class="text-center form-div">
        <input class="input-small-radius input-style2-secondary input-font-success input-placeholder-success input-big-default" type="text" placeholder="Mix 1">
        <input class="input-small-radius input-style2-error input-font-secondary input-placeholder-secondary input-big-default" type="text" placeholder="Mix 2">
        <input class="input-small-radius input-style2-warning input-font-teritary input-placeholder-teritary input-big-default" type="text" placeholder="Mix 3">
        <br>
        <input class="input-small-radius input-style2-secondary input-font-error input-placeholder-error input-background-teritary input-big-default" type="text" placeholder="Mix 4">
        <input class="input-small-radius input-style2-warning input-font-warning input-placeholder-warning input-background-success input-big-default" type="text" placeholder="Mix 5">
        <input class="input-small-radius input-style2-error input-font-primary input-placeholder-primary input-background-secondary input-big-default" type="text" placeholder="Mix 6">
    </div>
    </form>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="zgBLym" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Form - example  4">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/zgBLym/">
  Form - example  4</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<br>

Important note!
<br>

If you don't add "input-backgroud-$color" class to your input, it will inherit background color of div in which it has been created. 

[See demo page showing form styles >](/UI_Kit/formsDemo.html)
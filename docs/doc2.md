---
id: doc2
title: Font Size
---

## Introduction
We decided to make 6 different font sizes for you, which change dinamically, depending on your sreen resolution. So you don't have to be anxious about different screens in devices.
\
\
There are 3 breakpoints, where font sizes change. Every class of font has its minimum and maximum size. Minimum is reserved for mobile resolutions (below 735px) and maximum for desktop (above 1068px). In 735px-1068px screen width, font size changes dinamically acording to function:

```scss
font-size: $fontSize = $mimumFontSize + ($maximumFontSize - $minimumFontSize) * ((100vw - 735px) / (1086 - 735));
```

Every font size (in pixels), depending on screen resolution are shown in table below:

|  Class | Mobile (below 735px) | Tablet (735px - 1068px)  | Desktop (above 1068px) |
|:-:|:-:|:-:|:-:|
|the-biggest  | 45px  | 45px - 80px  | 80px  |
|big  | 30px  | 30px - 54px  | 54px  |
|medium  | 20px  |  20px - 36px |  36px |
|medium-small| 16px  | 16px - 24px  | 24px  |
|small   | 16px  | 16px  | 16px  |
|the-smallest   | 11px  |  11px |  11px |

## Using size classes
As we said before there is 6 different classes describing size of the font. All you need is to determine a class name of any HTML element. Then it will automatically get the size described by chosen class.
\
\
In the example below we created 6 paragraphs and named them by different classes' names (every of them describes another font size):

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
    <style>
        p{
            padding: 30px;
        }
    </style>
    <p class="the-biggest">This is the biggest paragraph</p>
    <p class="big">This is big paragraph</p>
    <p class="medium">This is medium paragraph</p>
    <p class="medium-small">This is medium small paragraph</p>
    <p class="small">This is small paragraph</p>
    <p class="the-smallest">This is the smallest paragraph</p>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="aeoyZR" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="FontSize - example 1">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/aeoyZR/">
  FontSize - example 1</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<!--[See effect of executed code >](https://www.w3schools.com/code/tryit.asp?filename=G5XAOHB0975D)-->

## Headers
When it comes to headers, we have 6 ones: h1 - h6, excatly the same ammount as number of our classes. That's why we decided to determine headers' sizes by default. Of course, if you want to change size any of them simply add the class (as in example with paragraphs).:

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
    <style>
        h1, h2, h3, h4, h5, h6{
            padding: 30px;
        }
    </style>
    <h1>This is h1 header</h1>
    <h2>This is h2 header</h2>
    <h3>This is h3 header</h3>
    <h4>This is h4 small header</h4>
    <h5>This is h5 header</h5>
    <h6>This is h6 header</h6>
    
    <h6 class="the-biggest">This is h6 header with added class "the-biggest"</h6>
    <h1 class="the-smallest">This is h1 header with added class "the-smallest"</h1>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="qeWXxz" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="FontSize - example 2">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/qeWXxz/">
  FontSize - example 2</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<!--[See effect of executed code >](https://www.w3schools.com/code/tryit.asp?filename=G5XB33CZ5342)-->

## Other elements

Of course you can also change the size of any in-site element, for example links, divs, spans or lists. From now, every element on your page will have dynamically changed font size!:

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
    <style>
        body{
            padding: 30px;
        }
    </style>
    <a class="the-biggest" href="#">This is the biggest link</a>
    <br/><br/>
    <span class="big">This is big span</span>
    <br/><br/>
    <ul class="medium">
    This is medium list:
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
    </ul>
    <br/>
    <div class="small">This is text inside a class "small"</div>
</body>
</html>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="XvraBo" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="FontSize - example 3">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/XvraBo/">
  FontSize - example 3</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
<!--[See effect of executed code >](https://www.w3schools.com/code/tryit.asp?filename=G5XBFPN8L2HI)-->
<br/>

[See demo page showing font-sizes >](/UI_Kit/typographyDemo.html)
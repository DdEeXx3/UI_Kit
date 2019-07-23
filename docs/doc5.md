---
id: doc5
title: Tables
---

## Introduction

Tables styling for sure isn't the easiest thing. We created a lot of classes to help you with embellishing any table. The most important issue before you start is get to know how to create your table structure. You should include __caption__ and __headers__( __th__ tags) to your table. Without this elements our classes may not work good. Your table structure should look like this:

```html
<table>
    <tbody>
        <caption>TITLE</caption>
        <tr>
            <th>Category 1</th>
            <th>Category 2</th>
            <th>Category 3</th>
            <th>Category 4</th>
            <th>Category 5</th>
        </tr>
        <tr>
            <td>Lorem ipsum Lorem ipsum Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
        </tr>
        <tr>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
        </tr>
    </tbody>
</table>
```
Of course, it could be any number of columns and rows in your table.

## Layout

First group of our classes is responsible for layout of the table. You can set it with class below:
```sass
.table-layout-$width-$layoutValue-$tableAlign
```
Where:
- $width - This is percentage value of table width in reference to div, in which this table has been created. You can replace $width with values __from 1 to 100__.
- $layoutValue - You can set here 2 arguments: __fixed__ or __auto__. 
<br>
<br>
First one makes a fixed table layout algorithm. The table and column widths are set by the widths of table and col or by the width of the first row of cells. Cells in other rows do not affect column widths. If no widths are present on the first row, the column widths are divided equally across the table, regardless of content inside the cells
<br>
<br>
Auto property makes that column width is set by the widest unbreakable content in the cells. The content will dictate the layout.
- $tableAlign - sets the position of the table inside div, in which it is created. You can use __right__, __left__ and __center__ value.
<br>

Additionally you can use 3 more classes to set align of the text iniside cells of the table:
- "text-right",
- "text-left",
- "text-center".
<br>

According to rules above, for example when you set class "table-layout-80-fixed-center" for your table, it means that it's centered, 80% width with fixed text inside cells. Additional class "text-right" will make that text inside cells will be aligned to right.
<br>

See the example below:

```html
<table class="table-layout-80-fixed-center text-right">
    <tbody>
        <caption>TITLE</caption>
        <tr>
            <th>Category 1</th>
            <th>Category 2</th>
            <th>Category 3</th>
            <th>Category 4</th>
            <th>Category 5</th>
        </tr>
        <tr>
            <td>Lorem ipsum Lorem ipsum Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
        </tr>
        <tr>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
            <td>Lorem ipsum</td>
        </tr>
    </tbody>
</table>
```
See result of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="oKgPoa" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Table - example 1">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/oKgPoa/">
  Table - example 1</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Border

With second classes group you can set thickness and style of your table border. You can use class below:

```sass
.table-border-$thickness-$borderStyle
```
Where:
- $thickness - a border thickness in pixels. You can set the value __between 1 and 20__.
- $borderStyle - a style of table border. You can set values: __solid__, __dotted__, __dashed__ and __double__ and their names describe style of themselves. 

By default, we set table border only for table body and caption. Of course you can set it anywhere by adding class above or your own border to other elements of the table.

Summarising, for example class "table-border-5-double" means that we want 5 pixels thick, double border of our table:

```html
<table class="table-layout-80-fixed-center text-center table-border-5-double">
  <tbody>
    <caption>TITLE</caption>
    <tr>
      <th>Category 1</th>
      <th>Category 2</th>
      <th>Category 3</th>
      <th>Category 4</th>
      <th>Category 5</th>
    </tr>
    <tr>
      <td>Lorem ipsum Lorem ipsum Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
    <tr>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
  </tbody>
</table>
```
See result of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="PMZpyX" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Table - example 2">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/PMZpyX/">
  Table - example 2</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Border radius

Next step to build table with our classes is border radius class. To define it, you can use class below:

```sass
.table-$radiusValue-radius
```
Where:
- $radiusValue - a radius, you can set in your border. Replace $radiusValue with __no__, __small__, __medium__ or __big__. There is the same radius value as in buttons, so it's in sequence: __0__, __0.5em__, __1em__, __2em__.

Let's add class "table-medium-radius" to see example of using it:

```html
<table class="table-layout-80-fixed-center text-center table-border-5-double table-medium-radius">
  <tbody>
    <caption>TITLE</caption>
    <tr>
      <th>Category 1</th>
      <th>Category 2</th>
      <th>Category 3</th>
      <th>Category 4</th>
      <th>Category 5</th>
    </tr>
    <tr>
      <td>Lorem ipsum Lorem ipsum Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
    <tr>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
  </tbody>
</table>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="xvZdja" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Table - example 3">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/xvZdja/">
  Table - example 3</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Padding

Let's move to padding class. The same as in radius classes you can set it by adding to your table class named:

```sass
.table-$paddingValue-padding
```
Where:
- $paddingValue - a padding, you can set in your table. Replace $paddingValue with __no__, __small__, __medium__ or __big__.
Padding values of any element of the table are shown below:

| Class name  | Caption padding  | Header padding  | Cells padding  |
|:-:|:-:|:-:|:-:|
|  table-no-padding |  0px | 0px  | 0px  |
|  table-small-padding |  15px | 10px  | 5px  |
| table-medium-padding  | 30px  | 20px  | 10px  |
|  table-big-padding | 45px  | 30px  | 15px  |

So, e.g. if we add class "table-small-padding" to our table we will get 15px padding in caption, 10 px padding in header and 5px padding in every cell:

```html
<table class="table-layout-80-fixed-center text-center table-border-5-double table-medium-radius table-small-padding">
  <tbody>
    <caption>TITLE</caption>
    <tr>
      <th>Category 1</th>
      <th>Category 2</th>
      <th>Category 3</th>
      <th>Category 4</th>
      <th>Category 5</th>
    </tr>
    <tr>
      <td>Lorem ipsum Lorem ipsum Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
    <tr>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
  </tbody>
</table>
```
See result of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="mNVwRE" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Table - example 5">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/mNVwRE/">
  Table - example 5</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Colors

The last and probably the hardest to understand part of table styles, is color classes group. As we mentioned in chapter with buttons, we created 6 variables, which are responsible for colors of your page:
- $primary - first main color of your page, should be light,
- $secondary - second main color of your page, should be dark,
- $teritary - third main color of your page, it may be any color,
- $success - color responsible for successes and any positive actions on your site,
- $error - color responsible for errors and any negative actions on your site,
- $warning - color resposible for displaying any warning on your site.

To keep harmony of your page we decided to have colors of tables based on colors above. Default color values of any element of your table are shown below:

| Element of the table  |  Default color value of background |  Defaul color value of font |
|:-:|:-:|:-:|
| Caption  | secondary  |  primary |
| Header (th elements)  |  teritary |  secondary |
| Odd row (tr:nth-child(2n) elements)  | primary  |  secondary |
| Even row  (tr:nth-child(2n+1) elements) |  5% darker than primary | secondary  |
| Border | - | secondary |

To set default color, simply add to your table a class named __"table-color-default"__:

```html
<table class="table-layout-80-fixed-center text-center table-border-1-solid table-medium-radius table-small-padding table-color-default">
  <tbody>
    <caption>TITLE</caption>
    <tr>
      <th>Category 1</th>
      <th>Category 2</th>
      <th>Category 3</th>
      <th>Category 4</th>
      <th>Category 5</th>
    </tr>
    <tr>
      <td>Lorem ipsum Lorem ipsum Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
    <tr>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
  </tbody>
</table>
```
See effect of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="EqPvmy" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Table - example 6">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/EqPvmy/">
  Table - example 6</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<br>
Of course, you can change default values of table colors. Setting your own color variables will be described later. Now we'll focus on saturation of default colors. We created group of classes to change it:
```sass
.table-$element-$saturation-$saturationPercentage
```
Where:
- $element - an element of the table, which color you want to change. You can set: __caption__, __th__ (for header element), __tr1__ (for odd table's row), __tr2__ (for even table's row).
- $saturation - type of saturation you want to use. You can set __darken__ to give darker color than default and __lighten__ to give it lighter than default one.
- $saturationPercentage - percentage value of saturation. You can set it __between 0 and 100__. For example, if you put value of this variable on 10, that means it will be 10% darker or lighter than default one. Setting this value to 0 means it's still default value.

For example, adding class "table-tr1-darken-10" to your table, will change color of any odd row for 10% darker than default. The same thing you can do with any of the elements:

```html
<table class="table-layout-80-fixed-center text-center table-border-1-solid table-medium-radius table-small-padding table-tr1-darken-10 table-tr2-darken-0 table-caption-lighten-8 table-th-darken-5">
  <tbody>
    <caption>TITLE</caption>
    <tr>
      <th>Category 1</th>
      <th>Category 2</th>
      <th>Category 3</th>
      <th>Category 4</th>
      <th>Category 5</th>
    </tr>
    <tr>
      <td>Lorem ipsum Lorem ipsum Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
    <tr>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
      <td>Lorem ipsum</td>
    </tr>
  </tbody>
</table>
```
See result of executed code:
<p class="codepen" data-height="320" data-theme-id="0" data-default-tab="result" data-user="ddeexx3" data-slug-hash="MNKEPO" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Table - example 7">
  <span>See the Pen <a href="https://codepen.io/ddeexx3/pen/MNKEPO/">
  Table - example 7</a> by Bartosz Grabarczyk (<a href="https://codepen.io/ddeexx3">@ddeexx3</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<br>
[See demo page showing button styles >](/UI_Kit/tablesDemo.html)
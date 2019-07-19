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
- $width - This is percentage value of table width in reference to div, in which this table has been created. You can replace $width with values __from__ __1__ __to__ __100__.
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
## Border

## Border radius

## Padding

## Colors

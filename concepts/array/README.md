# Javascript
- How to run JS files directly with NodeJS and VScode?
    - Download and install NodeJS.
    - Download one of VSCode's Runner Extensions.
    - Run `.js` file directly in VSCode by pressing `PLAY` button.
## Array
- Properties
    - ![](../../-/3.png) [`.prototype`](js-array-prototype.js)
    - ![](../../-/1.png) [`.length`](js-array-length.js)
        > `e.g. [1,2,3,4,3,3].length => 6`
- Behaviors
    - ![](../../-/1.png) [Access](js-array-access.js)
        > How to access an item in array ?
    - ![](../../-/1.png) [Change](js-array-change.js)
        > How to change an item in array ?
    - Iterate over array
        - ![](../../-/1.png) [`for` + Counter](js-for-counter.js)
        - ![](../../-/1.png) [`for` + `in`](js-for-in.js)
        - ![](../../-/1.png) [`for` + `of`](js-for-of.js)
        - ![](../../-/1.png) [`.forEach()`](js-for-each.js)
- Other
    - Make array
        > How to make a new array ?
        - ![](../../-/1.png) Using [`[]`](js-array-access.js)
        - ![](../../-/2.png) Using [`new Array()`](js-array-new.js)
    - ![](../../-/1.png) MultiDimensional Array
        > How to make and access to a multi dimensional array ?
- Methods
    - Conditional
        - ![](../../-/2.png) [`.filter()`](js-array-filter-example.html)
            > Get items with same condition from array   
            > Imagine something like **Auto Complete**
        - ![](../../-/2.png) [`.every()`](js-array-every.js)
            > Check if all items of array have the same condition
        - ![](../../-/2.png) [`.some()`](js-array-some.js)
            > Check if at least one item of array has a condition
    - ![](../../-/1.png) [`.forEach()`](js-array-foreach-example.html)
        > How to iterate over array items ?
    - ![](../../-/2.png) [`.map()`](js-array-map-example.html)
        > How to change every item in an array ?
    - ![](../../-/4.png) [`.reduce()`](js-array-reduce-example.html)
        > How to reduce multiple values to one value ?
    - ![](../../-/4.png) [`.reduceRight()`](js-array-reduce-example.html)
        > How to reduce multiple values to one value ?
    - ![](../../-/1.png) [`.includes()`](js-array-includes.html)
        > Check if something exists in array
    - Search:
        > Search in array
        - ![](../../-/1.png) [`.find()`](js-array-find.js)
            > Returns first founded item
        - ![](../../-/1.png) [`.findIndex()`](js-array-find-index.js)
            > Its like `.find()` but returns index instead of value
        - ![](../../-/1.png) [`.indexOf()`](js-array-index-of.js)
            > Returns the index of first founded value
        - ![](../../-/1.png) [`.lastIndexOf()`](js-array-index-of.js)
            > Returns the index of last founded value
    - Add / Remove
        > Add item in array, Remove item from array
        - ![](../../-/1.png) [`.push()`](js-array-push.js)
            > Add item to end of array
        - ![](../../-/1.png) [`.pop()`](js-array-push.js)
            > Remove item from end of array
        - ![](../../-/1.png) [`.unshift()`](js-array-shift.js)
            > Add item to start of array
        - ![](../../-/1.png) [`.shift()`](js-array-shift.js)
            > Remove item from start of array
    - ![](../../-/2.png) `.entries()`, `keys()`, `valueOf()`
        > Get values or indices of an array
    - ![](../../-/2.png) `.from()`
        > Make an array from a collection ???
    - ![](../../-/1.png) [`.reverse()`](js-array-reverse.js)
        > `e.g. [1,2,3] => [3,2,1]`
    - ![](../../-/1.png) [`.sort()`](js-array-sort.js)
        > `e.g. [2,3,1] => [1,2,3]`
        - ![](../../-/3.png) [Custom Sort](js-array-custom-sort.js)
    - ![](../../-/2.png) [`.concat()`](js-array-concat.js)
        > Add array to array
    - String
        - ![](../../-/2.png) [`.join()`](js-array-join.js)
            > Make string from array by joining the items
        - ![](../../-/1.png) [`.toString()`](js-array-to-string.html)
            > Convert array to string
    - Slicing
        - ![](../../-/2.png) [`.slice()`](js-array-slice.js)
            > Can slice a section of array without changing the original array
        - ![](../../-/2.png) [`.splice()`](js-array-splice.js)
            > Can slice a section of array and cut it from the original array
    - ![](../../-/3.png) [`.copyWithin()`](js-array-copy-within.js)
        > The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length. <small>***<sup>[[Mozilla Developer 11/05/2022](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)]<sup>***</small>
    - ![](../../-/2.png) [`.fill()`](js-array-fill.js)
        > To fill array with specific value
# JS Instructor
***Disclaimer: The content of this repository is provided only for the purpose of teaching students and with an educational perspective.***
## Extra Homeworks
### Array
- Dimensions of array
- Iterate over array
- Behaviors
    - Access
    - Change
- Methods
    - `.filter()`
        - `array.filter((x) => x>X)`
        - [Example of auto complete with `.filter()`](concepts/array/js-array-filter-example.html) 
        - [Question](concepts/array/js-array-filter-question.html) , [Answer](concepts/array/js-array-filter-answer.html)
    - `.forEach()`
        - `array.forEach((x) => console.log(x))`
        - [Example of create object using `template` and `.forEach()`](concepts/array/js-array-foreach-example.html)
        - [Question](concepts/array/js-array-foreach-question.html), [Answer](concepts/array/js-array-foreach-answer.html)
    - `.map()`
        - `array.map((x) => x*2)`
        - [Example of update values using `.map()`](concepts/array/js-array-map-example.html)
        - [Question](concepts/array/js-array-map-question.html), [Answer](concepts/array/js-array-map-answer.html)
    - `.reduce()`
        - `array.reduce((X,x) => X+x)`
        - [Example of summation using `.reduce()`](concepts/array/js-array-reduce-example.html)
        - [Question](concepts/array/js-array-reduce-question.html), [Answer](concepts/array/js-array-reduce-answer.html)
    - `.reduceRight()`
    - `.includes()`
    - `.find()`, `findIndex()`
    - `.indexOf()`, `lastIndexOf()`
    - `.push()`, `pop()`
    - `.unshift()`, `shift()`
    - `.every()`, `some()`
    - `.entries()`, `keys()`, `valueOf()`
    - `.from()`
    - `.reverse()`
    - `.sort()`
    - `.concat()`
    - `.join()`
    - `.fill()`
    - `.toString()`
    - `.slice()`, `.splice()`
    - `.copyWithin()`
### Class
- Object Oriented Programming (OOP)
    - Inheritance
    - Abstraction
    - Polymorphism
    - Encapsulation
- Object
    - [Example](concepts/class/js-class-create-example.html)
- Cunstructor
    - [Example](concepts/class/js-class-constructor-example.html)
- `.name`
    - [Example](concepts/class/js-class-name-example.html)
- `instanceof`, `typeof`, `.prototype.isPrototypeOf()`
    - [Example](concepts/class/js-class-name-example.html)
- Method
    - [Example](concepts/class/js-class-method-example.html)
- Inheritance
    - `extend`
        - [Example](concepts/class/js-class-inheritance-example.html)
    - `prototype`
        - [Example](concepts/class/js-class-prototype-example.html)
- Override
    - [Example](concepts/class/js-class-override-example.html)
- Overload
    - Method
        - [Example](concepts/class/js-class-overload-method-example.html)
    - Operator
        - Seems javaScript does not support operator overloading.
- Static
    - [Attribute](concepts/class/js-class-static-attr-example.html)
    - [Method](concepts/class/js-class-static-method-example.html)
- Accessor (Access Modifier)
    - Public
    - Private
    - Protected
- Interface
    - ?
### Calculation Order
    - `(2 + 4) * 6`
    - `2 + (4 * 6)`
### Events
- [`load`](concepts/events/js-event-load-example.html), `beforeunload`
- `drag`, `dragstart`, `dragend`
- `dragover`, `dragleave`, `dragenter`, `drop`
- `copy`, `cut`, `paste`, `select`
- `beforeinput`, `input`, `change`
- `click`, `dblclick`, `focus`, `blur`
- `mousemove`, `mouseup`, `mousedown`
- `keyup`, `keydown`, `keypress`
- `mouseover`, `mouseout`
- [`submit`](concepts/events/js-event-submit-example.html)
- `scroll`
    - [Vertical Example](concepts/events/js-event-scroll-example.html)
    - [Horizantal Example](concepts/events/js-event-scroll-h-example.html)
    - [Scroll to/by Example](concepts/other/js-scroll-to-by.html)
- [`resize`](concepts/events/js-event-resize-example.html)
### Async
- Callback
- Promise
### JSON
- Object
    - [Example](concepts/object/js-json-define-example.html)
    - `this`
        - [Example](concepts/object/js-json-this-example.html)
- Access
    - [Example](concepts/object/js-json-access-example.html)
- Change
    - [Example](concepts/object/js-json-change-example.html)
- Remove
    - [Example](concepts/object/js-json-remove-example.html)
- Array
    - [Example](concepts/object/js-json-array-example.html)
- Convert
    - `JSON.parse()`, `JSON.stringify()`
        - [Example](concepts/object/js-json-parse-example.html)
### Strict Mode
- `"use strict";`
    - Variables
        - [Example 1](concepts/other/js-strict-example.html)
        - [Example 2](concepts/other/js-strict-variables-example.html)
    - `eval()`
        - [Example](concepts/other/js-strict-eval-example.html)
    - `with`
        - [Example](concepts/other/js-strict-with-example.html)
### Hoisting
- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. <small>***<sup>[[Mozilla Glossary 10/27/2022](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)]<sup>***</small>
- [Example](concepts/other/js-hoisting-example.html)

### Keywords
- return, [yield](concepts/keywords/js-keyword-yield-example.html)
- import, export
- null
- true, false
- var, let, const
- async, await
- do, [while](concepts/keywords/js-keyword-while-example.html), continue, break
- for, continue, break
- [throw](concepts/keywords/js-keyword-throw-example.html)
- [try, catch, finally](concepts/keywords/js-keyword-try-catch-example.html)
- if, else
- [switch, case, default, break](concepts/keywords/js-keyword-switch-case-default-example.html)
- with
- [of, in](concepts/keywords/js-keyword-of-in-example.html)
- [instanceof, typeof](concepts/keywords/js-keyword-type-example.html)
- [class](concepts/keywords/js-keyword-extends-example.html), [extends](concepts/keywords/js-keyword-extends-example.html), [new](concepts/keywords/js-keyword-new-example.html), [function](concepts/keywords/js-keyword-function-example.html), [this](concepts/keywords/js-keyword-this-example.html), [super](concepts/keywords/js-keyword-super-example.html), static ([1](concepts/class/js-class-static-attr-example.html), [2](concepts/class/js-class-static-method-example.html))
- void, [debugger](concepts/keywords/js-keyword-debugger-example.html), [delete](concepts/object/js-json-remove-example.html)

### Map
- Knows the order of elements
- [Create](concepts/map/js-map-create-example.html)
- Attributes
    - [`.size`](concepts/map/js-map-length-example.html)
- Methods
    - [`.get()`, `.set()`](concepts/map/js-map-get-set-example.html)
    - [`.has()`](concepts/map/js-map-has-example.html)
    - [`.entries()`](concepts/map/js-map-entries-example.html)
    - [`.delete()`](concepts/map/js-map-delete-example.html)


### Regex
- [ ] TODO: complete this section

### Window
- [`prompt()`](concepts/window/js-window-prompt-example.html)
- `alert()`

## Best Practices
- Avoid using `with` keyword


## Examples
- [Calculator](concepts/array/js-example-calculator.html)
- [4 in a line Game](concepts/array/js-example-4-in-a-line-game.html)
- [Block Game](concepts/array/js-example-block-game.html)
    - TODO:
        - [ ] How to make a Progressive Web App (PWA) from this project?
        - [ ] How to make a mobile app with React Native?
        - [ ] How to make a WebView android application (APK) from this project?
        - [ ] How to make a chrome or firefox extension (Addon) from this project?

## More
### Browser Extension
- How to make a custom extension for browsers?
    - [ ] Firefox
    - [ ] Chrome
### Backend
- [ ] PHP
    - [x] [CSR](examples/csr-with-php/README.md)
    - [x] [SSR](examples/ssr-with-php/README.md)
- [ ] Node + SocketIO
- [ ] Flask
- [ ] CMS
### Tools
- [ ] Git
- [x] Github
    - [ ] GitPage (Static Website)
- [ ] Lighthouse
- [ ] Trello
- [ ] Markdown
### Concepts
- [ ] PWA, SPA, ...
- [ ] Test
    - [ ] Unit Test
    - [ ] Integration Test
    - [ ] UI Test
    - [ ] TDD
- [ ] Documentation
### Design Patterns
- [ ] GoF
### Other
- [ ] Network
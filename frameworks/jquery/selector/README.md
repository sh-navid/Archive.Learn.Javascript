# JQuery
## Selectors
- [`*`](jq-select-all.html)
- Tag
    - [`tag`](jq-select-tag.html)
    - [`:header`](jq-select-header.html)
        - _H1 to H6_
    - [`:root`](jq-select-root.html)
        - _Is HTML tag_
- [`.class`](jq-select-class.html)
- [`#id`](jq-select-id.html)
- [`Mixture .of #all`](jq-select-mixture.html)
- `.multiple,.selection`
- Child
    - `>`
- Parent
    - `:parent`
- Attribute
    - Has
        - `tag[attr]`
    - Multi Attr
        - `tag[attr1][attr2]`
    - `tag[attr|="NAME"]`
    - `tag[attr*="NAME"]`
    - `tag[attr^="NAME"]`
        - _Begin with word `attr`_
    - `tag[attr$="NAME"]`
        - _Ends with word `attr`_
    - `tag[attr~="NAME"]`
        - _Contains word `attr`_
    - `tag[attr!="NAME"]`
        - _Do Not have `attr` or `NAME` value_
- Form
    - `:input`
        - _Button, Input, TextArea and Select_
    - `:button`
        - Equivalent 1 is `input[type="button"]`
        - Equivalent 2 is `input:button`
    - `:checkbox`
    - `:file`
    - `:hidden`
    - `:password`
    - `:image`
    - `:hidden`
    - `:radio`
    - `:text`
    - `:reset`
    - `:submit`
- State
    - `:checked`
        - Checkbox
        - RadioButton
        - Select
    - `:disabled`
    - `:enabled`
    - `:selected`
    - `:focus`
    - `:visible`
    - `:hidden` + _Can be confused with *Form* hidden?_
- Edit
    - `:contains('text')`
        _Search a text_
    - `:empty`
        _Without a text_
- Select
    - [`:even`](jq-select-mixture.html)
    - [`:odd`](jq-select-mixture.html)
    - `:first-child`, `:first`, `.first()`
    - `:last-child`, `:last`, `.last()`
    - `:has()`
    - `:not`
    - By Index
        - `:eq()`, `.eq()`
            _Starts from zero_
            _Can get negative number_
        - `:nth-child()`
            _Starts from one_
        - `:nth-last-child()`
        - `:only-child`
        - `:lt()`
        - `:gt()`
    - Of Type
    

____

Not for this repo- just to remember for now
.toggleClass()
.attr()
.css()
.is()

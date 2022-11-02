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
- [`.multiple,.selection`](jq-select-multiple.html)
- Siblings
    - [`>`](jq-select-child-arrow.html)
        - _Child_
    - ~~`:parent`~~, [`.parent()`](jq-select-parent.html)
- Attribute
    - [`tag[attr]`](jq-attr-has-attr.html)
    - [`tag[attr1][attr2]`](jq-attr-multi-attr.html)
    - `tag[attr|="NAME"]`
    - `tag[attr*="NAME"]`
    - [`tag[attr^="NAME"]`](jq-attr-begin-with.html)
        - _`attr` value begins with word `NAME`; Case sensitive_
    - [`tag[attr$="NAME"]`](jq-attr-ends-with.html)
        - _`attr` value ends with word `NAME`; Case sensitive_
    - [`tag[attr~="NAME"]`](jq-attr-contains.html)
        - _`attr` value contains the word `NAME` surrounded by spaces; Case sensitive_
    - [`tag[attr!="NAME"]`](jq-attr-not-equal.html)
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

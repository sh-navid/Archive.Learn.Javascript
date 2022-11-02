# JQuery
## Selectors
- `*`
- `tag`
- `.class`
- `#id`
- Child
    - `>`
- Parent
    - `:parent`
- Attribute
    - `tag[attr|="NAME"]`
    - `tag[attr*="NAME"]`
    - `tag[attr^="NAME"]`
        - _Begin with word `attr`_
    - `tag[attr$="NAME"]`
        - _Ends with word `attr`_
    - `tag[attr~="NAME"]`
        - _Contains word `attr`_
    - `tag[attr!="NAME"]`
        - _Do Not have `attr` or `value`_
- Form
    - `:button`
        - Equivalent 1 is `input[type="button"]`
        - Equivalent 2 is `input:button`
    - `:checkbox`
    - `:file`
    - `:hidden`
    - `:password`
    - `:image`
    - `:radio`
    - `:text`
- State
    - `:checked`
        - Checkbox
        - RadioButton
        - Select
    - `:disabled`
- Edit
    - `:contains('text')`
        _Search a text_
    - `:empty`
        _Without a text_
    

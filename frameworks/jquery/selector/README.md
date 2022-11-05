# JQuery
## Selectors
- ![](../../../-/1.png) [`*`](jq-select-all.html)
    > _Select all elements_
- Tag
    - ![](../../../-/1.png) [`tag`](jq-select-tag.html)
        > _Select elements by tag_
    - ![](../../../-/1.png) [`:header`](jq-select-header.html)
        > _Select H1 to H6_
    - ![](../../../-/1.png) [`:root`](jq-select-root.html)
        > _Select HTML tag_
- ![](../../../-/1.png) [`.class`](jq-select-class.html)
    > _Select elements by class name_
- ![](../../../-/1.png) [`#id`](jq-select-id.html)
    > _Select elements by id_
- ![](../../../-/2.png) [`Mixture .of #all`](jq-select-mixture.html)
    > _You can mix a valid css query selector_
- ![](../../../-/1.png) [`.multiple,.selection`](jq-select-multiple.html)
    > _Select 2 different groups of elements_
- Siblings
    - ![](../../../-/2.png) [`>`](jq-select-child-arrow.html)
        > _Child_
    - ![](../../../-/2.png) ~~`:parent`~~, [`.parent()`](jq-select-parent.html)
- Attribute
    - ![](../../../-/1.png) [`element[attr]`](jq-attr-has-attr.html)
        > Select elements with a specific attributes
    - ![](../../../-/2.png) [`element[attr1][attr2]`](jq-attr-multi-attr.html)
        > Select elements that have multiple specific attributes
    - ![](../../../-/2.png) [`element[attr|="PRE"]`](jq-attr-contains-prefix.html)
        > _`attr` contains `PRE-` prefix_
    - ![](../../../-/2.png) [`element[attr^="VALUE"]`](jq-attr-begin-with.html)
        > _`attr` value begins with word `VALUE`; Case sensitive_
    - ![](../../../-/2.png) [`element[attr$="VALUE"]`](jq-attr-ends-with.html)
        > _`attr` value ends with word `VALUE`; Case sensitive_
    - ![](../../../-/2.png) [`element[attr!="VALUE"]`](jq-attr-not-equal.html)
        > _This `element` does not have `attr` or `VALUE`_
    - Contains
        - ![](../../../-/2.png) [`element[attr~="VALUE"]`](jq-attr-contains.html)
            > _`attr` value contains the word `VALUE` surrounded by spaces; Case sensitive_
        - ![](../../../-/2.png) [`element[attr*="VALUE"]`](jq-attr-contains-2.html)
            > _`attr` value contains the word `VALUE`; Case sensitive_
- Form
    - ![](../../../-/1.png) [`:input`](jq-form-general-input.html)
        > _Button, Input, TextArea and Select_
    - ![](../../../-/1.png) [`:button`](jq-form-button-1.html)
        - ![](../../../-/1.png) Equivalent 1 is `input[type="button"]`
            > _But seems not support `<button>`_
        - ![](../../../-/1.png) Equivalent 2 is `input:button`
            > _But seems not support `<button>`_
    - Specific Input Selection
        > How to select each type of inputs seperately
        - ![](../../../-/2.png) [`:checkbox`](jq-form-checkbox.html) or `input[type=checkbox]`
        - ![](../../../-/2.png) [`:file`](jq-form-file.html) or `input[type=file]`
        - ![](../../../-/2.png) [`:password`](jq-form-password.html) or `input[type=password]`
        - ![](../../../-/2.png) [`:image`](jq-form-image.html) or `input[type=image]`
        - ![](../../../-/2.png) [`:radio`](jq-form-radio.html) or `input[type=radio]`
        - ![](../../../-/1.png) [`:text`](jq-form-text.html) or `input[type=text]`
        - ![](../../../-/2.png) [`:reset`](jq-form-reset.html) or `input[type=reset]`
        - ![](../../../-/1.png) [`:submit`](jq-form-submit.html) or `input[type=submit]`
        - ![](../../../-/1.png) [`input:hidden`](jq-form-hidden.html) or `input[type=hidden]`
        - ![](../../../-/2.png) [`input[type=color]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=date]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=datetime]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=email]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=number]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=month]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=range]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=search]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=tel]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=time]`](jq-form-access-other-inputs.html)
        - ![](../../../-/2.png) [`input[type=url]`](jq-form-access-other-inputs.html)
- State
    > Select elements with their current state
    - ![](../../../-/2.png) [`:checked`](js-state-checked.html)
        - Checkbox
        - RadioButton
        - Select
    - ![](../../../-/2.png) [`:disabled`](js-state-general.html)
    - ![](../../../-/2.png) [`:enabled`](js-state-general.html)
    - ![](../../../-/2.png) [`:selected`](js-state-general.html)
    - ![](../../../-/2.png) `:focus`
    - ![](../../../-/2.png) [`:visible`](js-state-general.html)
    - ![](../../../-/2.png) [`:hidden`](js-state-general.html)
- [Contains](jq-contains-text.html)
    - ![](../../../-/2.png) `:contains('text')`
        > _Select element with specific text_
    - ![](../../../-/1.png) `:empty`
        > _Select elements that have no text_
- Other Selectors
    - ![](../../../-/1.png) [`:even`](jq-select-mixture.html)
        > Select every other from zero
    - ![](../../../-/1.png) [`:odd`](jq-select-mixture.html)
        > Select every other from one
    - ![](../../../-/1.png) [`:first-child`](jq-select-first-last-child.html), [`:first`](jq-select-first-last.html), [`.first()`](jq-method-first-last.eq.html)
    - ![](../../../-/1.png) [`:last-child`](jq-select-first-last-child.html), [`:last`](jq-select-first-last.html), [`.last()`](jq-method-first-last.eq.html)
    - ![](../../../-/2.png) [`:has()`](jq-select-has.html)
    - ![](../../../-/2.png) [`:not()`](jq-select-not.html)
    - By Index
        - ![](../../../-/1.png) [`:eq()`](jq-select-index-eq.html), [`.eq()`](jq-method-first-last.eq.html)
            > _To select each element from a collection indivisually by its id_  
            > _Starts from zero_  
            > _Can get negative number_
        - ![](../../../-/1.png) [`:nth-child()`](jq-select-nth-child.html)
            > _Starts from one_
        - ![](../../../-/2.png) [`:nth-last-child()`](jq-select-nth-last-child.html)
            > _Starts from one_
        - ![](../../../-/2.png) [`:only-child`](jq-select-only-child.html)
            > select element that have only one child
        - ![](../../../-/2.png) [`:lt()`](jq-select-lt.html)
            > Select elements less than index
        - ![](../../../-/2.png) [`:gt()`](jq-select-gt.html)
            > Select elements greater than index
    - Of Type
        - ![](../../../-/2.png) [`:only-of-type`](jq-select-of-type.html)
            > There is only one of its kind in each scope
        - ![](../../../-/2.png) [`:first-of-type`](jq-select-first-of-type.html)
            > First of its kind in each scope
        - ![](../../../-/2.png) [`:last-of-type`](jq-select-first-of-type.html)
            > Last of its kind in each scope
        - ![](../../../-/2.png) [`:nth-of-type()`](jq-select-nth-of-type.html)
        - ![](../../../-/2.png) [`:nth-last-of-type()`](jq-select-nth-of-type.html)
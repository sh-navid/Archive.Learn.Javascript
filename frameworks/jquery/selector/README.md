# JQuery
## Selectors
- ![](../../../-/1.png) [`*`](jq-select-all.html)
- Tag
    - ![](../../../-/1.png) [`tag`](jq-select-tag.html)
    - ![](../../../-/1.png) [`:header`](jq-select-header.html)
        > _H1 to H6_
    - ![](../../../-/1.png) [`:root`](jq-select-root.html)
        > _Returns a ref to HTML tag_
- ![](../../../-/1.png) [`.class`](jq-select-class.html)
- ![](../../../-/1.png) [`#id`](jq-select-id.html)
- ![](../../../-/2.png) [`Mixture .of #all`](jq-select-mixture.html)
- ![](../../../-/1.png) [`.multiple,.selection`](jq-select-multiple.html)
- Siblings
    - ![](../../../-/2.png) [`>`](jq-select-child-arrow.html)
        > _Child_
    - ![](../../../-/2.png) ~~`:parent`~~, [`.parent()`](jq-select-parent.html)
- Attribute
    - ![](../../../-/1.png) [`element[attr]`](jq-attr-has-attr.html)
    - ![](../../../-/2.png) [`element[attr1][attr2]`](jq-attr-multi-attr.html)
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
    - `:contains('text')`
        > _Search a text_
    - `:empty`
        > _Without a text_
- Select
    - ![](../../../-/1.png) [`:even`](jq-select-mixture.html)
    - ![](../../../-/1.png) [`:odd`](jq-select-mixture.html)
    - ![](../../../-/1.png) [`:first-child`](jq-select-first-last-child.html), [`:first`](jq-select-first-last.html), [`.first()`](jq-method-first-last.eq.html)
    - ![](../../../-/1.png) [`:last-child`](jq-select-first-last-child.html), [`:last`](jq-select-first-last.html), [`.last()`](jq-method-first-last.eq.html)
    - ![](../../../-/2.png) [`:has()`](jq-select-has.html)
    - ![](../../../-/2.png) [`:not()`](jq-select-not.html)
    - By Index
        - ![](../../../-/1.png) [`:eq()`](jq-select-index-eq.html), [`.eq()`](jq-method-first-last.eq.html)
            > _Starts from zero_  
            > _Can get negative number_
        - ![](../../../-/1.png) [`:nth-child()`](jq-select-nth-child.html)
            > _Starts from one_
        - ![](../../../-/2.png) [`:nth-last-child()`](jq-select-nth-last-child.html)
        - ![](../../../-/2.png) [`:only-child`](jq-select-only-child.html)
        - ![](../../../-/2.png) [`:lt()`](jq-select-lt.html)
        - ![](../../../-/2.png) [`:gt()`](jq-select-gt.html)
    - Of Type
        - `:first-of-type`      [ ] TODO: Check
        - `:nth-of-type()`      [ ] TODO: Check
        - `:nth-last-of-type()` [ ] TODO: Check
        - `:only-of-type`       [ ] TODO: Check
        - `:last-of-type`       [ ] TODO: Check

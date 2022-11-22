# Regex
- Regular Expression
    - Modifier
        - ![](../../-/1.png) [`//g`](regex-case-sensitivity.js)
            > Global
        - [`//i`](regex-case-sensitivity.js)
            > Case-in-sensitive
        - `//m`
            > Multi-line
    - [Rules](https://github.com/sh-navid/py-instructor/blob/master/concepts/regex/README.md)
        - [`\d`](regex-contains-digits.js) Contains digits
        - [`\D`](regex-not-contains-digits.js) Not Contains digits
        - [`\s`](regex-contains-a-white-space.js) Contains a white space
        - [`\S`](regex-not-contains-a-white-space.js) Not Contains a white space
        - [`\w`](regex-contains-word.js) Contains A-Z,a-z,0-9,_
        - [`\W`](regex-not-contains-a-word.js) Not Contains A-Z,a-z,0-9,_
        - `\A` At Beginning
        - `\Z` At End
        - `\b` At Beginning or At End
        - `\B` Not At Beginning or At End
        - `[abc]` a,b,c
        - `[a|b]` a or b
        - `[a-c]` a to c
        - `[^abc]` Any except a,b,c
        - `[357]`  3,5,7
        - `[123][645]` 16, 14, ..., 35
        - `[0-9]+` At least One Digit
        - `[0-9]*` At least Zero Digit like empty string
        - `[0-9]?` Zero or one
        - Scape Chars
        - `^a` start
        - `a$` end
        - `?=` follow
        - `?!` not follow

## Regex and Javascript
- [`.search()`](regex-search.js)
    > Returns first index
- [`.replace()`](regex-replace.js)
    > To replace a substring pattern
- [`.test()`](regex-text.js)
    > Returns `true` or `false`
- [`.exec()`](regex-exec.js)
    > Returns object
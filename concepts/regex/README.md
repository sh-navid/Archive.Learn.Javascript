# Regex
- Regular Expression
    - Modifier
        - ![](../../-/1.png) [`//g`](regex-case-sensitivity.js)
            > Global
        - ![](../../-/1.png) [`//i`](regex-case-sensitivity.js)
            > Case-in-sensitive
        - ![](../../-/2.png) `//m`
            > Multi-line
    - [Rules](https://github.com/sh-navid/py-instructor/blob/master/concepts/regex/README.md)
        - ![](../../-/1.png) [`\d`](regex-contains-digits.js) Contains digits
        - ![](../../-/1.png) [`\D`](regex-not-contains-digits.js) Not Contains digits
        - ![](../../-/1.png) [`\s`](regex-contains-a-white-space.js) Contains a white space
        - ![](../../-/1.png) [`\S`](regex-not-contains-a-white-space.js) Not Contains a white space
        - ![](../../-/1.png) [`\w`](regex-contains-word.js) Contains A-Z,a-z,0-9,_
        - ![](../../-/1.png) [`\W`](regex-not-contains-a-word.js) Not Contains A-Z,a-z,0-9,_
        - ![](../../-/1.png) [`[abc]`](regex-abc.js) a,b,c
        - ![](../../-/1.png) [`[a|b]`](regex-or.js) a or b
        - ![](../../-/1.png) [`[a-c]`](regex-range.js) a to c
        - ![](../../-/1.png) [`[^abc]`](regex-except.js) Any except a,b,c
        - ![](../../-/1.png) [`[357]`](regex-just-these-ones.js)  3,5,7
        - ![](../../-/1.png) [`[123][645]`](regex-combine.js) 16, 14, ..., 35
        - ![](../../-/1.png) [`[0-9]+`](regex-at-least-one.js) At least one digit
        - ![](../../-/1.png) [`[0-9]*`](regex-at-least-one.js) Zero or more digits
        - ![](../../-/1.png) [`[0-9]?`](regex-at-least-one.js) Zero or one digit
        - ![](../../-/1.png) [Scape Chars](regex-scape-chars.js)
        - ![](../../-/2.png) [`^a`](regex-at-begining.js) start
        - ![](../../-/2.png) [`a$`](regex-at-begining.js) end
        - ![](../../-/2.png) [`?=`](regex-follow.js) followed by
        - ![](../../-/3.png) [`?!`](regex-follow.js) not followed by

## Regex and Javascript
- ![](../../-/1.png) [`.search()`](regex-search.js)
    > Returns first index
- ![](../../-/1.png) [`.replace()`](regex-replace.js)
    > To replace a substring pattern
- ![](../../-/2.png) [`.test()`](regex-text.js)
    > Returns `true` or `false`
- ![](../../-/2.png) [`.exec()`](regex-exec.js)
    > Returns object
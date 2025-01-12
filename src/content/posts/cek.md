---
title: Markdown Examples
date: 2025-04-01
summary: This is an example of a Markdown article. It shows the syntax and rendering of Markdown.
category: examples
tags: [Markdown]
---

Here are some examples of basic Markdown syntax you can use when writing Markdown content in Astro.

## Title

You should avoid creating duplicate article titles in the Markdown main body, as article titles are automatically
generated based on the `title` in `frontmatter`.

> Avoid heading levels that are too deep, usually up to the third level of heading is enough.

# First Class

## Second Class

### Third Class `inline code'

#### Fourth Class

##### Fifth Class

###### Sixth Class

## Paragraphs

Use two spaces at the end of a line to make a line break within a paragraph

All work and no play makes Jack a dull boy.  
All work and no play makes Jack a dull boy.

## Pictures

Small Size Pictures

![Picture Description](https://picsum.photos/seed/picsum/250/400)

Large Size Pictures

![Picture Description](https://picsum.photos/seed/picsum/1200/900)

Pictures with captions

![Picture Description](https://picsum.photos/seed/picsum/400/300 'Picture Caption')

## Emphasizes

This is the **important element** and this is the _secondary element_.

## Strikethrough

~~This is a deleted text.~~

## Quote

The blockquote element represents content that is quoted from another source, optionally with a citation which must be
within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

Nested references

> quote
>
> > nested reference

References with footnotes

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]:
    The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during
    Gopherfest, November 18, 2015.

## Dividing Line

---

## Links

This is the internal link [Gyoza User Guide](/posts/guide)

This is the external link [React **Chinese** documentation](https://zh-hans.react.dev/)

Automatically rendered as a connection <https://github.com>

Email address <mail@example.com>

## Table

| Name  | Age |  Fruit |
| :---- | :-: | -----: |
| Bob   | 27  |  Apple |
| Alice | 23  | Banana |
| John  | 28  | Orange |

Inline Markdown support

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

Form Overflow

| A                                                        | B                                                                                                             | C                                                                                                                                    | D                                                 | E                                                          | F                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| Lorem ipsum dolor sit amet, consectetur adipiscing elit. | Phasellus ultricies, sapien non euismod aliquam, dui ligula tincidunt odio, at accumsan nulla sapien eget ex. | Proin eleifend dictum ipsum, non euismod ipsum pulvinar et. Vivamus sollicitudin, quam in pulvinar aliquam, metus elit pretium purus | Proin sit amet velit nec enim imperdiet vehicula. | Ut bibendum vestibulum quam, eu egestas turpis gravida nec | Sed scelerisque nec turpis vel viverra. Vivamus vitae pretium sapien |

## Code Blocks

### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight
language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css,
markdown, typescript, txt, bash

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

```
const var text = "hello world"
```

## KaTeX formulas

Use `$` symbols to wrap formulas to generate in-line formulas, e.g. $E = mc^2$.

Use `$$` symbol-wrapped formulas to generate standalone formulas. Example:

$$
e^{i\pi} + 1 = 0
$$

It is also possible to use the code block (` ```math `) approach:

```math
\oint_{\partial V} \mathbf{E} \cdot d\mathbf{A} = \frac{Q}{\epsilon_0}
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## Spoiler

```md
||hide content||
```

Under normal circumstances, this content will be hidden ||hide content|| and will only be shown when the mouse is
hovered over.

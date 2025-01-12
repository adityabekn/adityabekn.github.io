---
title: How to use icons in Gyoza?
date: 2024-05-08T10:54:27.000Z
tags: [Icon]
category: tutorials
comments: true
draft: false
---

Gyoza chooses to refer to icons in a font-class manner. Most of these icons are derived
from [Remix Icons](https://remixicon.com/) and are managed and exported on [iconfont](https://www.iconfont.cn/).

The following image shows all the icons in the project:

![All Icons](https://s2.loli.net/2024/05/08/mbdT5HqYMEajyRG.webp)

You may want to use these icons when you are adding the social accounts displayed on the homepage. Just fill in the
corresponding configuration item with the name that has the `icon-` prefix under the icon.

If you are using the icons in a component, you can do it as follows:

```jsx
<i className="iconfont icon-xxx"></i>
```

## Why not SVG icons?

You've probably seen a lot of projects using [iconify](https://iconify.design/). iconify is an open source icon
collection of over 200,000 icons that provides a variety of ways to bring in frameworks. Astro has a corresponding
plugin, astro-icon, that you can use (if you're interested, check out their [documentation](https://iconify.design/)). (
see their [documentation](https://github.com/natemoo-re/astro-icon) if you're interested).

I tried to use iconify in my project, but I switched to the font-class approach for several reasons:

- Since the project uses both Astro and React, and the way iconify icons are used in Astro components and React
  components is different, this results in the code having to have two ways of using them.
- Iconify requires a request to its server when loading, and ~~ I'd be worried about the request failing ~~, although
  that worry is redundant.
- There is a feature where I would inject some icons into markdown when rendering a post, such as the icons at the end
  of external links, and iconify doesn't make it easy to do that.
- Embedding SVG icons directly into HTML is not elegant, and using font-class only requires the corresponding class
  name, which feels like the final HTML is smaller in comparison and the page will load faster. I haven't done any
  specific testing yet, but at the very least I'll try to avoid having a lot of SVGs on the page just as icons.
- There aren't many icons used in this project, mainly icons for common social accounts for customizing contact
  information. I would like to keep all the icons in one place to make it a bit easier to manage.

## Customizing icons

If you want to replace the iconfont icon, modify the following file:

```text
public/fonts/iconfont.ttf
public/fonts/iconfont.woff
public/fonts/iconfont.woff2
src/styles/iconfont.css
```

Note that this will replace all the icons used in the project, so make sure you know what you're doing.

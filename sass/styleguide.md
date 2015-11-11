
Format
------

kss-node is almost compatible with KSS documentation. But kss-node can depend on only comment in source code because it has Markup: directive for showing the sample markup.

Here is a basic format for kss-node documentation.

```
/*
Buttons

A majority of buttons in the site are built from the same base class.

:hovered    - Highlight the button when hovered.
:disabled   - Make the button change appearance to reflect it being disabled.
.primary    - Indicate that the button is the primary feature of this form.

Markup:
<a href="#" class="button {$modifiers}">Link Button</a>
<button class="button {$modifiers}">Button Element</button>

Styleguide 1.1
*/
.button {
  ...
}
.button:hover {
  ...
}
.button:disabled {
  ...
}
.button.primary {
  ...
}

```
kss-node also supports CSS preprocessors such as LESS, SASS and Stylus. You can use the // comment section for writing your document.

```
// Buttons
//
// A majority of buttons in the site are built from the same base class.
//
// :hovered    - Highlight the button when hovered.
// :disabled   - Make the button change appearance to reflect it being disabled.
// .primary    - Indicate that the button is the primary feature of this form.
//
// Markup:
// <a href="#" class="button {$modifiers}">Link Button</a>
// <button class="button {$modifiers}">Button Element</button>
//
// Styleguide 1.1
.button {
  ...
  &:hover {
    ...
  }
  &:disabled {
    ...
  }
  .primary {
    ...
  }
}
```

As you see in the above samples, kss-node comment has some blocks. From the top,

Element's title
Element's description
List of modifier classes or pseudo-classes
HTML markup
Reference to the element's position in the styleguide
And each description supports the Markdown writing.

----


Naming Conventions
------

Naming conventions are a team decision. If, like me, you are dealing with your CSS on your own, you can go nuts and use something that suits you. Personally, I go with Nicolas Gallagher’s methodology which is influenced by the well-known Yandex BEM system.

BEM stands for Block Element Modifier, a clever and clean way to name your CSS classes. Yes, I said classes, not IDs. I don’t use any IDs in my CSS and neither should you. Any. IDs are overkill and can lead to specificity issues. Of course, IDs are still very useful for JavaScript hooks and HTML anchors.

The point behind the BEM syntax is to provide context directly into the selector in order to make them easily understandable to anyone new to the project.

Here is a very basic example of BEM:



```
.block { }
.block--modifier { }
.block__element { }
.block__element--modifier { }
```

Yes, double dashes, double underscores. We’ll see why in a moment.

So, what’s up with BEM? It looks long and ugly. Well yes it is! But the fact that is is long and ugly is actually what makes it efficient.

The main idea is simple: when you build a component, you give it a name. A child element of the component will be named like this ```.{{ name of component }}__{{ name of child-element }}``. When an element is slightly modified it will be named ````.{{ name of component }}--{{ name of modifier }}``. Of course, a child-element can be modified as well.

So what’s up with the double dashes and underscores? Well, these allow hyphenated names like ``.my-component``. Then you can read ``.my-component--disabled`` without a problem. Same goes for the double underscores. Worry not, you will get used to it very quickly.

Since nothing’s better than a good ol’ example, here is a step-wizard module I wrote at work using the BEM naming system

```
.steps { }
.steps__item { }
.steps__item--first { }
.steps__item--last { }
.steps__item--active { }
.steps__item--done { }
.steps__link { }
```

As you can see, we deal with 3 different elements:

- ``.steps`` which is the module wrapper
- ``.steps__item`` which is the main element for the module since it has at least 4 modified states
- ``.steps__link``, another element in the module


Icons
------

We use font-awesome to icon fonts.

[font-awesome](https://fortawesome.github.io/Font-Awesome/)

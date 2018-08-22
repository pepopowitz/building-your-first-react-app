# Steve's new talk boilerplate

## Step 1.

Copy it to the new talk.

## Step 2.

Search & replace the following values:

* `!!title!!`
* `!!description!!`
* `!!keywords!!`
* `!!bitly!!`
* `!!port!!`

## Optional

Pick a cover image, and use this tool to generate a color pallette. http://www.cssdrive.com/imagepalette/index.php

Then change the color variables in styl/remark-themes/default.styl.

## Available styles

### Templates

`template: title`: a big, bold title

`template: level-1`: a content page with a single h1 for context

`template: level-2`: a content page with an h1 and h2 for context

`template: level-3`: a content page with an h1, h2, and h3 for context

`template: full-screen`: an image that covers the entire screen

`template: double-wide`: a double-wide code sample

`template: double-stack`: a double-stacked code sample

`template: code`: a single code sample

`template: conversation`: a conversation between two people.

### Images

`.bg-cover.square`: cover the background with a square image (whitespace along the sides)

`.full-width`: a full-width image (different than covering the background - it just fills the parent space.)

`.footnote`: a footnote for the current image/code

### Code

`.extra-small, .small, .medium, .huge`: size modifiers for code

`.dim-1` through `.dim-30`: dim a specific line of code

`.highlight-code`: highlight lines of code that are prefixed by `*` (and dim the others)

`.no-footer`: hide the footer text (i.e. cuz code sample would get covered up)

### Text

`.inverse`: white text on dark background

`.alt-brand`: text the color of the alt-brand.

### Columns

`.col.col-1` through `.col col-10`: grid-system-ish columns

`.col.centered`: center this column in the middle of the page



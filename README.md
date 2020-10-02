# Style Guide

Note: This project should be built using a version of Node ~8. Node 10 does NOT work with this project.

## Usage

### Sass

Import Sass file to load styles, fonts and mixins.

```scss
// main.scss
@import '~cw-styleguide/sass/coverwallet.scss';
```

## Icons

How to add new icons into styleguide

1. Go to https://icomoon.io/app/#/projects
2. Click on "New Project" -> Load
3. Click on "Import Icons" and select coverwallet.svg file under /styleguide/fonts/ project directory
4. When "The glyths in your SVG font were loaded. Use this font's metrics and metadata when exporting fonts?" appear -> click "Yes"
5. Icons will appear on the dashboard. Make sure that there are no icons that you want to add

If you found icons that you were looking in the list, you need to proceed to 10 step

6. Drag and drop new icons in svg format that you want to add into coverwallet section area
7. Move them in the end of the icons list using "Move" tool at the top of the page
8. Select all icons and click on "Generate Font". Make sure that new icons are visible and download
9. Replace old fonts
10. Add css classes per category (industries, subindustries, onlyclick, etc) and add new icons to the markup
11. Call command "generate"

After adding the icons you need to update the project version in package.json. Then merge to master, and run

```
npm publish
```

## on master. Then go to https://github.com/coverwallet/styleguide/releases and create release with new version

## Show icons

On your branch, to see icons working:

1- update "cw-styleguide": "git://github.com/coverwallet/styleguide.git#2.9.6" with new version released
2- remove yarn.lock
3- launch commands:
--> yarn cache clean
--> yarn install

# CoverWallet styleguide

This project offers the standard style guidelines of Coverwallet projects.

## Requirements

You should have already installed and updated (with [Homebrew](http://brew.sh) if you're on Mac):

- NPM
- Bower

## Local Installation

### 1. Clone Github repo

```
git clone https://github.com/coverwallet/styleguide
```

### 2. Install project dependencies:

```
npm install
```

### 3. Initialize the work environment:

Using Grunt, we generate dynamically our styleguide demo page to test our changes.

```
grunt serve
```

Local demo page is hosted on:

```
http://localhost:8000
```

## How to add a new icon

### 1. Get the .svg file

You can get either your file from our GFX team or download it from FontsAwesome gallery.

```
https://fontawesome.com/icons?d=gallery
```

### 2. Grab your current project .svg file in the following path:

```
PATH_TO_PROJECT/styleguide/fonts/
```

Inside this folder, you have to pick one of the files depending of which type of icon do you wish to add:

`coverwallet-general.svg` - it contains general icons.

`coverwallet.svg` - it contains icons with more concrete functions.

### 3. Upload the current project .svg to IcoMoon.

Use the import Icons button to upload all of the current project icons.

```
https://icomoon.io/app
```

![Import icon buttons](https://user-images.githubusercontent.com/22560692/44716635-35061f00-aabb-11e8-9a2f-642e8f31b681.png "Import icons")

### 4. Add the new icon to the current set

Click on the upper right corner 'hamburguer' icon and select ``Import to set`` option.

![Add icon to the set](https://user-images.githubusercontent.com/22560692/44717722-1bb2a200-aabe-11e8-93bf-13167cd6fc17.png "Add icon")


## Common problems solutions:

If you get into trouble around node modules (because previous installation, or node version upgrade) just:

```
rm -rf node_modules
npm install
```







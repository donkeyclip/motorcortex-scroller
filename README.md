# MotorCortex-Scroller

**Table of Contents**

- [MotorCortex-Scroller](#motorcortex-scroller)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing](#importing)
- [Creating WheelPlayer](#creating-wheelplayer)
  - [Free Mode](#free-mode)
  - [Chapters Mode](#chapters-mode)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo
[Check it out here](https://donkeyclip.github.io/motorcortex-scroller/demo/)

- On mobile: Swipe left or right to move between chapters
- On desktop devices: use your mouse wheel
  

# Intro / Features

MotorCortex-Scroller (WheelPlayer) controls your MotorCortex Clips' execution via mouse wheel or (touch) swipe.
The Player can either operate on "free" mode where the more you scroll (or swipe) the more it moves forward or backward or on the "chapters" mode where chapters can be defined.
On "chapters" mode the developer can define distinct chapters (by providing their milliseconds) and at the end of each swipe or scroll the Clip will move either forward or backward (depending on the direction) to reach the closest chapter.

This plugin exposes two types of WheelPlayers:
- Free mode
- Chapters mode

# Getting Started
## Installation
```bash
$ npm install --save @donkeyclip/motorcortex-scroller
# OR
$ yarn add @donkeyclip/motorcortex-scroller
```
## Importing
```javascript
const WheelPlayer = import('@donkeyclip/motorcortex-scroller');
```
# Creating WheelPlayer

You just instantiate a new Player object passing options:
## Free Mode
```javascript
const Player = new WheelPlayer({
    clip: myClip
});
```

## Chapters Mode
```javascript
const Player = new WheelPlayer({
    clip: myClip,
    speed: 5,
    mode: 'chapters',
    chapters: [{
            millisecond: 2000,
            name: 'chapter 1'
        },
        {
            millisecond: 4000,
            name: 'chapter 2'
        }
    ],
    transitionSpeed: 2,
    swipeAxis: 'horizontal',
    scrollbar: {
        color: 'pink',
        position: 'top'
    }
});
```

## Options

| Name | Description |
| ------------- | ------------- |
| mode | (optional, default = "free"). Either "free" or "chapters" |
| wheelSpeed | (optional, default = 5). Valid input is any number from 1 to 10. It defines the speed the Clip will seek forward or backward when scrolling or swiping |
| chapters | (valid only on "chapters" mode). It expects an array of objects each of which defines a chapter. Chapters are provided in the form: {name: "<the name of the chapter>", millisecond: <millisecond>} |
| transitionSpeed | (valid only on "chapters" mode, optional, default = 1). Valid input is any number greater than 0. On scroll (or swipe) end the Clip will transition to the next (or previous) chapter. The speed of the transition is in real time (1:1). If provided, the transitionSpeed will affect the transition speed (e.g. setting it to 2 it will transition two times faster, setting it to 0.5 two times slower etc) |
| swipeAxis | (optional, default = "vertical"). It defines the active axis of swipe. Default is vertical meaning the user will have to swipe upwards or downwards in order to control Clip's execution. If is set to "horizontal" the user will need to swipe to left or right |
| progressBar | (optional, default is {display: true, position: 'right', color: 'purple'}). Progress bar visualises the progress of the Clip's execution. By default is positioned on the right and it's visible |
  
# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)


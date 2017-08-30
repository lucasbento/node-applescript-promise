# node-applescript-promise ![](https://api.travis-ci.org/lucasbento/node-applescript-promise.svg?branch=master)

A high-level way to execute AppleScript code through NodeJS and retrieve
the result as a native JavaScript object. Underneath the hood, this
module is just a simple wrapper around the OS X `osascript` command.

### Why?
AppleScripts are the only way to communicate and interact with certain
external OS X processes, for example [iTunes](http://www.itunes.com).

Easy Install
------------

```sh
yarn add applescript-promise
```

Requirements
------------

 * Mac (or Hackintosh) running [OS X](http://www.apple.com/macosx) (tested with Sierra)
 * [NodeJS](http://nodejs.org) (v4.4.7 or newer)

Usage
-----

The `node-applescript-promise` module provides `execString` and `execFile` functions
to easily execute AppleScript commands and buffer the output into a calback.

```js
import applescript from 'applescript';

// Very basic AppleScript command. Returns the song name of each
// currently selected track in iTunes as an 'Array' of 'String's.

const script = 'tell application "iTunes" to get name of selection';

applescript.execString(script)
  .then((tracks) => {
    tracks.forEach(songName => console.log(songName);
  })
  .catch((error) => {
    // Something went wrong
    console.log('error:', error);
  });
```

`execFile` works the exact same way, except you pass the _path_ of the AppleScript
(`*.applescript`) file as the first argument instead of the command itself, and you
may pass an optional `Array` of strings as a second argument to send to the applescript file.

License
-------

The `node-applescript-promise` module is licensed under the MIT license.

This module is a merely wrapper over [node-applescript](https://github.com/TooTallNate/node-applescript/).

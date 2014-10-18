minitranslate.js
====================

A lightweight way to change words into other words.

[![Code Climate](https://codeclimate.com/github/guavacat/minitranslate.png)](https://codeclimate.com/github/guavacat/minitranslate) [![NPM version](https://badge.fury.io/js/minitranslate.svg)](http://badge.fury.io/js/minitranslate)

[minitranslate.me](http://minitranslate.me)


## Installation

    $ npm install minitranslate

## Features
 * WYSIWYG word-replacement translator
 * Tiny: only **2.4 KB** compressed
 * Dead-simple library in `mt-lib.js`:

  ```java
  var mt_lib = [
    { w: "Hello", r: "Goodbye" },
    { w: "World", r: "Mars" }
  ];
  ```
 * Dynamic translation:

  ```html
  <input id="mt-input"/>
  <input id="mt-output"/>
  ```
 * Add class `.mt-patient` to `#mt-input` to translate only once `#mt-button` is clicked

 ```html
 <input id="mt-input" class="mt-patient"/>
 ```
 * Static translation:
  ```html
  <div id="mt-translate"/>
  ```
 * Case insensitive:
   * hElLo => wOrLd
   * bYe => gOodbye
 * Punctuation currently only includes `!?,.` and appends to word
   * Hello!*(> => World!

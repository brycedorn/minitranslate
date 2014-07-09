minitranslate
====================

A lightweight way to change words into other words. Now without jQuery!

[![Code Climate](https://codeclimate.com/github/brycedorn/minitranslate.png)](https://codeclimate.com/github/brycedorn/minitranslate) [![NPM version](https://badge.fury.io/js/minitranslate.svg)](http://badge.fury.io/js/minitranslate)

[bryce.io/minitranslate](http://bryce.io/minitranslate)


## Installation

    $ npm install minitranslate

## Features
 * WYSIWYG word-replacement translator
 * jQuery-free
 * RegExp matching and javascript replacement
 * Simple library in `mt-lib.js`:
  ```java
  var mt_lib = [
    {w : "Hello", r : "Goodbye"},
    {w : "World", r : "Mars"}
  ];
  ```

 * Dynamic input translation:
  ```html
  <input id="mt-input"/>
  <input id="mt-output"/>
  ```
   * Add class `.mt-patient` to `#mt-input` to translate only once `#mt-button` is clicked

 * Static content translation:

  ```html
  <div id="mt-translate"/>
  ```

 * Case insensitive up to input word length:
   * hElLo => wOrLd
   * bYe => gOodbye


 * Dumb punctuation, currently appends to translation

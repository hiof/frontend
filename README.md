# hiof.no

[![Build Status](https://travis-ci.org/hiof/frontend.svg?branch=master)](https://travis-ci.org/hiof/frontend)

## About

Frontend code for the Østfold University College website.

## Required knowledge

This package require knowledge of the following technologies, technics and modules:

- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    - [ES2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition)
    - [Babel](https://babeljs.io)
    - [jQuery](https://jquery.com)
    - [JSON](http://jsonapi.org)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - [Sass](http://sass-lang.com)
- [HTML](https://en.wikipedia.org/wiki/HTML)
    - [Handlebars](http://handlebarsjs.com)
- [Bootstrap](http://getbootstrap.com)
- [Node.js](https://nodejs.org)
    - [NPM](https://www.npmjs.com)
- [Grunt](http://gruntjs.com) and Grunt tasks (see `Gruntfile.js` for details)
- [Bower](http://bower.io)
- [SSH](https://en.wikipedia.org/wiki/Secure_Shell)
- [Git](https://git-scm.com)
    - [Github](https://github.com)

## Copyright

- This project is distributed under a  GNU General Public License v3 - Take a look at the COPYING file for details.

## Install

Install [Git](http://git-scm.com) if it's not already installed on your computer. Then run (this will download this project to the folder the shell has open):

    $ git clone https://github.com/hiof/frontend.git


Install [io.js](https://iojs.org) (or [Node.js](http://nodejs.org)) if it's not already installed on your computer. Then run (this will install the project dependencies):

    $ sudo npm install -g grunt-cli
    $ npm install
    $ bower install

## Build and deploy

If you just want to work on the code locally and then send push-requests on github you have to rename the `secret-template.json` file to `secret.json`. The `secret.json` is automaticly ignored from code checkin.

### Build

The following commands are now available within the project folder `$ grunt server` and `$ grunt build`.

- $ grunt build: Builds the code to /build
- $ grunt server: You get a local version of the code running at localhost. Code is build whenever you change a file in /app and automaticly loaded in your browser.


### Deploy

If you have the deploy authentication details, please add those to `secret.json`. You wil then have the following deploy commands available:

- $ grunt deploy-stage: deploys the code to staging.hiof.no
- $ grunt deploy-prod: deploys the code to hiof.no

## Releases

[Github releases](https://github.com/hiof/frontend/releases)

## Roadmap

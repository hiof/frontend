# hiof.no

[![Build Status](https://travis-ci.org/hiof/frontend.svg?branch=master)](https://travis-ci.org/hiof/frontend)

## About

Frontend code for the Østfold University College website.

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

- [ ] v3.6.0 - June 2. 2015
  - [x] Update and syncronize meta information in head unnafected by the view-type(backend-/frontendrendered)
  - [ ] Implement semesterstart functionality
  - [ ] Implement it-services functionality
  - [ ] Implement library functionality
- [ ] v3.7.0 - July 17. 2015
  - [ ] Improve navigation and header behaviour on mobile/smaller screens.
  - [ ] Refactor deploy
    - [ ] Split asset and code deploy into seperate tasks and combine them for one *full deploy*
  - [ ] Switch from Less to Sass for stylesheets preprosessing
    -  [ ] Do work on outputted media-queries?

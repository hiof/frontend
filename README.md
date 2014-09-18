# hiof.no

## About

Frontend code for the Østfold University College website.


## Copyright

- This project is distributed under a  GNU General Public License v3 - Take a look at the COPYING file for details. 


## Install


Install [Git](http://git-scm.com) if it's not already installed on your computer. Then run (this will download this project to the folder the shell has open):

    $ git clone https://github.com/hiof/frontend.git


Install [Node.js](http://nodejs.org) if it's not already installed on your computer. Then run (this will install the project dependencies):

    $ sudo npm install -g grunt-cli
    $ npm install


The following commands are now available within the project folder `$ grunt server`, `$ grunt deploy-stage` og `$ grunt deploy-prod`. 

- $ grunt server: You get a local version of the code running at localhost. Code is build whenever you change a file in /app and automaticly loaded in your browser.
- $ grunt deploy-stage: Deploys the code to staging.hiof.no
- $ grunt deploy-prod: Deploys the code to hiof.no


## Releases

[Github releases](https://github.com/hiof/frontend/releases)

### Roadmap

v3.2.0 - Integrated news (and design adjustments)
v3.3.0 - Personal profile data integration (and design adjustments)
v3.4.0 - Study cataloge, several content improvements





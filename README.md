# Getting Started with Mona DIVsa

This application transforms a given image into a series of DIV elements.\
The code is shown and it can be copied and pasted into a separate index.html file and shared around.\
This application seems to have no purpose. Do not use it into a serious application because the numerous div elements will make your site slower.\
As an example, load a small image of Mona Lisa (100x100 pixels for fast results) and the output will show a grid of divs.

## Ways to access this application

* Local version (Requires Node Package Manager - npm - installed)
1. Pull or clone the code
2. Use the command `npm install`
3. Use the command `npm run` and the default web browser should open this application

* Deployed version
This application is deployed on [heroku](https://mona-divsa.herokuapp.com/)


## Warning
Do not use large images. 100x100 pixels is the maximum size recommended, anything larger will freeze the page but the processing will still execute eventually.\
TODO: implement js web worker such that the page will not freeze
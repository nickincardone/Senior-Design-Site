# Senior Design 

## Website for our Senior Design project

### Project
A tutorial for CS 2340, covering Java FX

### Members 
  + Nichlos Incardone
  + Philip Johnson
  + Steven Moore
  + Prahlad Venkatesh

## Dependencies

### Node.js

[Install Here](http://nodejs.org/download/)

Ensure node is installed

`npm`

### Grunt.js

run `npm install -g grunt-cli` 

## Setup

Clone repo and run:
`sudo npm install` which will install all node dependicies

Now run `grunt && node server` and navigate to port 8080

## Adding Content

### Videos
To add another video to site, navigate to the assets/javascripts/video/video_controller.js file and add to the `$scope.videos` array with the following format

`{
title: [video title],
src: [youtube src],
subheading: [subheading],
description: [description]
}`

and the video will automatically be added to the site

### Text 
To add a text tutorial first save the tutorials html in the assets/templates/text/tutorials folder
Then append the following to the `$stateProvider` in assets/javascripts/states/state_config.js
`.state('text.tutorial[name of tutorial]', {
        url: '/tutorials/[name of tutorial]',
        templateUrl: '[name of tutorial].html'
      })`
      
Where the [name of tutorial] is the file name of the saved tutorial html file


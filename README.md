# Tech-Blog
A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## Table Of Content
* [General Info](#general-info)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## General Info
The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. [Link to deployed application](https://dry-ocean-09770.herokuapp.com/)
<br>
<br>
Image showcasing the application 
<img src=./public/images/firstscreenshot.png>

## Technologies
Project is created with 
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Express](https://www.npmjs.com/package/express)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

## Installation
To get started clone this repository using 
<br>
```terminal
git clone git@github.com:BennAsabir/tech-blog.git
```
Both Node.js and MySQL must be installed on your computer.

Install dependencies 
```terminal
npm init --y
``` 
```terminal
npm install express sequelize mysql2 dotenv bcrypt express-session express-handlebars connect-session-sequelize
```
Open up MySQL shell and input 
```terminal
source db/schema.sql
```
and 
```terminal
use tech_blog
```
Then quit MySQL shell and input the following in your terminal to start running application
```terminal
node server.js
```
Once all that is done, navigate to - http://localhost:3001 to begin!


## Usage
The application is used publish blog posts and comment on other developers’ posts as well.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
This repository is licensed under the MIT license.

## Questions
Questions about this repository? Please contact me at [Benasabir@gmail.com](mailto:Benasabir@gmail.com). View more of my work in GitHub at [BennAsabir](https://github.com/BennAsabir) 



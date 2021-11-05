## 14 Model View Controller (MVC): Tech Blog

The challenge tought me about how writing about tech is just as important as making it. I learned that developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. I have learned how a simple Google search for any concept covered in this course returns thousands of potential solutions and tutorials for developers of all skill levels!
My challenge this week was to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I built this site completely from scratch and deploy it to Heroku along with connecting the Heroku deployment with mySQL database. My app followed the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## License
MIT License ![APM](https://img.shields.io/apm/l/te)

Copyright (c) 2021 BennAsabir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments



## Getting Started
My application folder struture follows the Model-View-Controller paradigm. 
I used the express-handlebars package to use Handlebars.js for your Views.
I used the MySQL2 and Sequelize packages to connect to a MySQL database for my Models, and create an Express.js API for your Controllers.
I used the dotenv (.env) package for ,my environment variables, the bcrypt package to hash passwords
I used express-session and connect-session-sequelize packages for added authentication.

This is the first time I have used the express-session package to store the session data on the client in a cookie. 
Another first, when I (or any user of my app) is idle on the site for more than 15 minutes, the cookie will expire and the user will be required to log in again to start a new session. I learned that this is the default behavior and I do not have to do anything to my application other than istall the npm package in my terminal.


## Screenshot (taken during development)
Screenshot of my website
![Screenshot](/images/screenshot.jpg)

## GitHub

https://github.com/mcswajl/The-Tech-Blog

## Heroku Deployment 

https://the-tech-blog2.herokuapp.com/

## Contact Information

Contact Josh McSwain 
joshua.mcswain@mecklenburgcountync.gov 
UNCC coding boot camp 2021


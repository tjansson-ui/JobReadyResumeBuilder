# Project 2: Career Craft 

## Description
The purpose of this application was to create a simple template for users to generate a resume. The application allows users to sign up for Career Craft's services, and then gives users access to the resume generator. The application functions through Node JS and Express JS command line following the MVC paradigm. The application uses Handlebars.js as the templating language, and MySQL and Sequelize as the ORM. 


![screenshot](/public/assets/homepage-screenshot.png)

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Badges](#badges)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

## [Installation](#Table-of-Contents)
1. Install 'node.js' https://nodejs.org/en/download.

2. Clone this repo to your local computer https://github.com/tjansson-ui/JobReadyResumeBuilder.

4. Install dependencies by typing `npm install` in the terminal's command line.

5. Create an `.env` file in the root of the directory to create your own confidental username and password. [Env-Setup](https://www.npmjs.com/package/dotenv)


## [Usage](#table-of-contents)
1. After installing the application, login into MySQL on the command line `mysql -u root -p` and then enter your password. 

2. On the command line, run `SOURCE db/schema.sql;` then `exit`.

3. On the command line, run `npm run seed` to run your seed files.

4. To invoke the application, type `npm run watch` on the command line.

## [License](#table-of-contents)
[MIT License](https://opensource.org/licenses/MIT)

## [Badges](#table-of-contents)

[![License: MIT](https://img.shields.io/badge/MIT_License-orange)](https://opensource.org/licenses/MIT)
[![Node Js](https://img.shields.io/badge/Node%20JS-8A2BE2)]( https://nodejs.org/en/download)
[![Express Session](https://img.shields.io/badge/Express%20Session-8A2BAA2)](https://www.npmjs.com/package/express-session)
[![Sequelize](https://img.shields.io/badge/Sequelize-blue)](https://www.npmjs.com/package/sequelize) 
[![MySQL2](https://img.shields.io/badge/MySql2-red)](https://www.npmjs.com/package/mysql2) 
[![bcrypt](https://img.shields.io/badge/Bcrypt-purple)](https://www.npmjs.com/package/bcrypt) 
[![dotenv](https://img.shields.io/badge/.env-yellow)](https://www.npmjs.com/package/dotenv) 
[![pdfmake](https://img.shields.io/badge/PDFmake-maroon)](https://pdfmake.github.io/docs/0.1/) 

## [Contributions](#table-of-contents)
This application was initiated as a project from the University of Wisconsin Coding Bootcamp. The project was designed and completed by Nicole Stark, Tor Jansson, and Liz Friedman. 

## [Questions](#Table-of-Contents)
If you have any questions contact developers here:

N. Stark: [Github](nstark12)
<br> 
T. Jansson: [Github](tjansson-ui)
<br>
L. Friedman:   [GitHub](https://github.com/lizf57)
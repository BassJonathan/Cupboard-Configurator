# Cupboard-Configurator

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<p align="center">
  <a href="https://github.com/BassJonathan/cupboard-configurator">
    <img src="https://github.com/BassJonathan/Cupboard-Configurator/blob/master/Documentation/Logo_icon.png" alt="Logo" width="140">
  </a>

  <h3 align="center">Cupboard Ltd Configurator by CLOSING< /TAG></h3>

  <p align="center">
    Cupboard Ltd Configurator for the course "Fallstudie" @DHBW Stuttgart
    <br />
    <a href="https://github.com/BassJonathan/cupboard-configurator"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/BassJonathan/cupboard-configurator">View Demo</a> <!--Link für Demo einfügen-->
    ·
    <a href="https://github.com/BassJonathan/cupboard-configurator/issues">Report Bug</a>
    ·
    <a href="https://github.com/BassJonathan/cupboard-configurator/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

# Table of Contents
<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
    <ul>
      <li><a href="#built-with">Built with</a></li>
    </ul>
  </li>
  <li><a href="#project-setup">Project setup</a></li>
  <li>
    <a href="#running-the-project">Running the project</a>
    <ul>
      <li><a href="#compiles-and-hot-reloads-for-development">Compiles and hot-reloads for development</a></li>
      <li><a href="#compiles-and-minifies-for-production">Compiles and minifies for production</a></li>
      <li><a href="#lints-and-fixes-files">Lints and fixes files</a></li>
    </ul>
  </li>
  <li>
    <a href="#fixes-for-common-issues">Fixes for common issues</a>
    <ul>
      <li><a href="#error:-plugin(s)-are-missing">Error: Plugin(s) are missing</a></li>
      <li><a href="#error:-'postCSS-plugin-tailwindcss-required-postcss-8.'">Error: "PostCSS Plugin tailwindcss required PostCSS 8."</a></li>
      <li><a href="#error:-'npm-err!-error:-eacces:-permission-denied,-access-'/path''">Error: "npm ERR! Error: EACCES: permission denied, access '/path'"</a></li>
    </ul>
  </li>
  <li><a href="#license">License</a></li>

</ol>



<!-- ABOUT THE PROJECT -->
# About The Project
Project for the lecture "Case Study" in the third semester at DHBW Stuttgart. This project was created by 5 students within three weeks. The project includes self-organized agile planning and execution. The website was created for a fictitious company called "Cupboard Limited", which sells sustainable and customizable furniture. An API was provided was provided by the lecturers to retrieve the products and place the orders. . The rest of the design, including all the text, was created freely by the students.


## Built with:

* [Vue](https://www.vuejs.com)
* [VueX Persist](https://github.com/championswimmer/vuex-persist)
* [i18n](https://kazupon.github.io/vue-i18n/)
* [Axios](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)
* [Lottie Interactivity](https://lottiefiles.com/interactivity)
* [TailwindCSS](https://tailwindcss.com/)
* [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [NextJS](https://nextjs.org/)
* [NodeJS](https://nodejs.org/en/)

# Project setup
In order to set up the project properly, you must have npm installed.
If this is not yet the case, you can find the instructions here: 
- Mac: https://bodo-schoenfeld.de/node-js-und-npm-unter-macos-installieren/
- Windows: https://phoenixnap.com/kb/install-node-js-npm-on-windows (NOT TESTED!)

# Runing the project
The project consists of a frontend and a backend, which communicate with each other via the localhost. The backend consumes the API and formats the data. The frontend provides functionalities such as the shopping cart and uses the data from the backend for this. It is therefore essential that both components are started.
## Compiles and hot-reloads for development
To be able to use the full application you have to start the frontend and the backend separately. Use the following two commands to do this:
```
npm run frontend:serve
npm run backend:serve
```
If you are not doing any development on the backend, you can also use the following command as an alternative:
```
npm run backend:start
```

## Compiles and minifies for production
```
npm run build
```

## Lints and fixes files
```
npm run lint
```

# Fixes for common issues
The following list contains frequent issues and their fixes and will be updated during development.
## Error: Plugin(s) are missing
Run the following command to install all plugins specified in the config:
```
npm install
```

## Error: "PostCSS Plugin tailwindcss required PostCSS 8."
Run the following commands to fix the issue:
```
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

## Error: "npm ERR! Error: EACCES: permission denied, access '/path'"
This error usually occurs with MacOS. To solve this problem, use the "sudo" statement before each command.
E.g.:
```
sudo npm install ...
```

<!-- LICENSE -->

# License

Distributed under the GPL License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/BassJonathan/cupboard-configurator.svg?style=for-the-badge
[contributors-url]: https://github.com/BassJonathan/cupboard-configurator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/BassJonathan/cupboard-configurator.svg?style=for-the-badge
[forks-url]: https://github.com/BassJonathan/cupboard-configurator/network/members
[stars-shield]: https://img.shields.io/github/stars/BassJonathan/cupboard-configurator.svg?style=for-the-badge
[stars-url]: https://github.com/BassJonathan/cupboard-configurator/stargazers
[issues-shield]: https://img.shields.io/github/issues/BassJonathan/cupboard-configurator.svg?style=for-the-badge
[issues-url]: https://github.com/BassJonathan/cupboard-configurator/issues
[license-shield]: https://img.shields.io/github/license/BassJonathan/cupboard-configurator.svg?style=for-the-badge
[license-url]: https://github.com/BassJonathan/cupboard-configurator/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username

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
<!--
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>
-->

<!-- ABOUT THE PROJECT -->
<!--
## About The Project
Project for the lecture "Fallstudie" in the third semester at DHBW Stuttgart.


### Built With

* [Vue]()
* [Love]()
* []()
-->

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
<!-- GETTING STARTED -->
<!--
## Getting Started

To get a local copy up and running follow these simple steps.
Ich empfehle die Visual Studio Code zusammen mit folgenden Extensions zu verwenden:
<br>
<img src="https://github.com/BassJonathan/cupboard-configurator/blob/729021709249def751d4f633f558988906239d50/Images/Extensions.png" alt="CSS Peak, HTML CSS Support, HTML Preview, HTML Snippets, IntelliSense for CSS, JavaScript code snippets, Live Server" width="500">

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
-->

<!-- USAGE EXAMPLES -->
<!--
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_
-->



<!-- ROADMAP -->
<!--
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).
-->


<!-- CONTRIBUTING -->
<!--
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
-->


<!-- LICENSE -->
<!--
## License

Distributed under the MIT License. See `LICENSE` for more information.
-->


<!-- CONTACT -->
<!--
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)
-->


<!-- ACKNOWLEDGEMENTS -->
<!--
## Acknowledgements

* []()
* []()
* []()
-->


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

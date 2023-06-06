<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/timondev/melvis">
    <img src="static/logo.svg" alt="The Melvis logo is a text based logo consisting of the symbol 'M' in a serif font and the rest in a more playful display font." width="189" height="48">
  </a>
  <p align="center">
    Metaverse experience tailored for the visually impaired.
    <br />
    <a href="https://github.com/timondev/melvis"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/timondev/melvis">View Demo</a>
    ·
    <a href="https://github.com/timondev/melvis/issues">Report Bug</a>
    ·
    <a href="https://github.com/timondev/melvis/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Melvis is the successor to a prototype that demonstrated how a metaverse could be created for both the visually impaired and the sighted. It's purpose is to provide assistive tools to both identify and explain 3D scenes through auditory and haptic means. The aim is to enable visually impaired people to use any type of metaverse without the need for assistance from others.

It is based on the following technologies:

[![svelte][svelte.dev]][svelte-url] [![babylon][babylonjs.com]][babylon-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This guide will take you through the steps required to install and use Melvis. Be aware of the requirements that are needed to use Melvis.

### Prerequisites

Melvis is built on top of node16 and it's dependencies are loaded via npm. The following instructions assume that node is installed and that your local development environment has access to npm. To upgrade to the latest version of npm, you can use the following command:

```sh
npm install npm@latest -g
```

Use the following command to check your node version:

```sh
node --version
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/timondev/melvis.git
   ```
3. Install NPM packages
   ```sh
   cd melvis && npm install
   ```
4. Run the local deployment:
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] WebXR space
- [ ] Full support for assistive screen readers
- [ ] Support distance approximation algorithm

See the [open issues](https://github.com/timondev/melvis/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.
Don't forget to star the project! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Apache License, Version 2.0. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

There are currently no acknowledgements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/timondev/melvis?style=for-the-badge
[contributors-url]: https://github.com/timondev/melvis/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/timondev/melvis?style=for-the-badge
[forks-url]: https://github.com/timondev/melvis/network/members
[stars-shield]: https://img.shields.io/github/stars/timondev/melvis?style=for-the-badge
[stars-url]: https://github.com/timondev/melvis/stargazers
[issues-shield]: https://img.shields.io/github/issues/timondev/melvis?style=for-the-badge
[issues-url]: https://github.com/timondev/melvis/issues
[license-shield]: https://img.shields.io/github/license/timondev/melvis?style=for-the-badge
[license-url]: https://github.com/timondev/melvis/blob/master/LICENSE.txt
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[babylonjs.com]: https://img.shields.io/badge/Babylon.js-BB464B?style=for-the-badge&logoColor=BB464B
[babylon-url]: https://doc.babylonjs.com/
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
    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 189.079 48" alt="The Melvis logo is a text based logo consisting of the symbol 'M' in a serif font and the rest in a more playful display font." width="189" height="48" fill="#415A77"><path d="m45.703 14-.197-.033L32.66 49.435H26.23L13.465 14.099l-.197.032c.235 5.418 1.137 23.454.92 28.56l5.134.986v5.758H-.54V43.68l5.113-.987V8.325L-.54 7.338V1.55h17.662l12.207 35.3h.197l12.305-35.3h17.706v5.78l-5.113.988V42.7l5.113.988v5.747H39.675v-5.758l5.106-.987c-.219-5.01.692-23.371.922-28.69z"/><path d="M72.873 49.511c-20.312-.603-11.872-34.18 7.138-33.503 8.612-.295 13.509 7.161 7.368 13.877-4.608 4.48-11.544 6.36-18.47 7.93l-.859-4.626c16.331-1.265 13.463-17.62 6.906-10.31-3.236 4.225-4.444 12.295-2.676 17.347 2.855 4.82 10.644.132 14.009-1.85 5.598-1.838-1.27 11.82-13.415 11.135zM97.125 49.386c-5.609.123-3.614-6.175-3.536-10.176.335-4.24 2.452-19.063 3.007-23.525 1.17-5.439-3.972-9.727-.463-11.664 3.962-2.28 11.355-3.1 11.234 3.271-.774 12.909-4.114 29.084-4.493 42.094h-5.75zM122.434 49.511c-12.545-.4-5.614-22.736-10.97-29.77-1.705-2.26 4.34-3.137 5.815-3.502 4.814-1.002 5.225 1.02 5.816 5.98.296 1.85 1.777 18.14 2.346 19.494.198.529.517.793.958.793 4.767-3.537 6.824-14.72 5.452-20.948-.583-1.233-.71-2.036.495-2.974 1.844-1.41 5.008-2.49 7.269-2.577 4.809-.09 2.62 6.768 2.016 10.276-2.487 9.117-8.316 22.782-19.197 23.228zM149.596 49.484c-6.536-1.238.272-28.014-.066-33.48h6.736c1.1 0 1.87.485 2.31 1.453.72 1.526.772 3.476.53 5.25-1.007 8.044-2.166 18.927-3.302 26.777h-6.208zm5.813-35.657c-8.26-.355-7.108-12.255.793-12.093 8.352-.022 6.816 12.197-.793 12.093zM173.91 49.511c-5.547-.168-11.369-.795-11.762-6.41.036-1.887.309-4.337 1.982-4.626 1.177.067 1.673.654 2.842 1.454 3.032 1.896 7.74 5.385 11.366 3.304 1.173-.706 1.277-2.573.463-3.635-.83-1.194-5.77-3.718-7.137-4.626-6.42-3.355-8.364-11.29-2.71-16.157 2.852-2.935 12.534-3.418 16.72-1.949 3.651.547 2.512 7.974-.199 8.195-3.278-.404-7.168-5.393-10.54-2.876-.42.463-.628.982-.628 1.553.097 1.848.993 2.335 2.974 3.173 3.014 1.225 8.135 2.925 9.747 5.484 5.895 8.977-3.896 17.82-13.118 17.116z"/></svg>
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
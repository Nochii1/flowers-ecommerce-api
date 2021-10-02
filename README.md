<!-- PROJECT LOGO -->
<p align="center">
  <h2 align="center">Flowers Ecommerce API</h2>

  <p align="center">
    <a href="https://flowers-ecommerce-api.herokuapp.com/api/v0/docs/">View Documentation</a>
    ·
    <a href="https://github.com/Nochii1/flowers-ecommerce-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/Nochii1/flowers-ecommerce-api/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-project">Running project</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About

Flower & Gardening Ecommerce API REST

### Built With

* [NestJS](https://docs.nestjs.com/)
* [MySQL](https://www.mysql.com/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
1. Install Nest CLI with the next command line 
    ```sh
    $ npm i -g @nestjs/cli
    ```
    Or follow instruction of the next page: https://docs.nestjs.com/#installation
2. Download and install the MySQL Service following the instructions of the next page: https://www.mysql.com/downloads/ and then create your database

### Installation

1. Clone the repo
    ```sh
    $ git clone https://github.com/Nochii1/flowers-ecommerce-api.git && cd flowers-ecommerce-api
    ```
2. Install NPM packages
    ```sh
    $ npm install
    ```
3. Create environment local files in the root directory of the project with your database credentials
    ```
    file: .env.local

    DATABASE_TYPE=your_database_type
    DATABASE_HOST=your_database_host
    DATABASE_PORT=your_database_port
    DATABASE_USERNAME=your_database_username
    DATABASE_PASSWORD=your_database_password
    DATABASE_NAME=your_database_name
    ```

<!-- USAGE EXAMPLES -->
### Running project
* dev
    ```sh
    $ npm run start:dev
    ```
* prod
    ```sh
    $ npm run build && npm run start:prod
    ```

<!-- ROADMAP -->
## Roadmap

For details on our planned features and future direction please refer to our [roadmap][issues-url]

<!-- CONTACT -->
## Contact

David Flores - david.flores22@inacapmail.cl

Project Link: [https://github.com/Nochii1/flowers-ecommerce-api][github_url]

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [TypeORM](https://typeorm.io/)
* [class-validator](https://github.com/typestack/class-validator)
* [Express](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)

<!-- MARKDOWN LINKS & IMAGES -->
[issues-url]: https://github.com/Nochii1/flowers-ecommerce-api/issues
<!--  [product-screenshot]: null -->
<!-- [docs_url]: https://flowers-ecommerce-api.herokuapp.com/api/v0/docs/ -->
[github_url]: https://github.com/Nochii1/flowers-ecommerce-api

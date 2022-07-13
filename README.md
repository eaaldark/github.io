# Curriculum Vitae eaaldark

Este proyecto esta creado con [Create React App](https://github.com/facebook/create-react-app) y funciona dentro de un contenedor [Docker](https://hub.docker.com/)

## Preparando contenedor

Comandos:

* Construir una imagen
  ```sh
  docker build -t eaaldark -f Dockerfile .
  ```
* Construir contenedor
  ```sh
  docker-compose up -d
  ```


## Scripts Disponibles

En este proyecto atravez de la consola puede ejecutar:

* Instalara los paquetes que dependen de este proyecto:
  ```sh
  make install
  ```

* Ejecuta el proyecto dentro del contenedor y el contenedor expone el puerto a utilizar:
  ```sh
  make start
  ```

* Para poder compilar el proyecto:
  ```sh
  make build
  ```

* Debe haber usado el comando make build para ejecutar este, es para probar el codigo compilado antes de ser subido a un repositorio:
  ```sh
  make sbuild
  ```

* Subira el codigo compilado a gh-pages donde este configurado:
  ```sh
  make gh
  ```

* Podra acceder al contenedor desde la consola interna usando 
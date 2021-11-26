# Template de desarrollo Express JS backend  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

> Node JS

> Express JS

> Typescript

> Docker

> CI/CD

Descripción del proyecto : Proyecto template de directrices para la estandarización de un proyecto, el objetivo del proyecto es que los desarrolladores puedan seguir la estructura conformada por este proyecto tanto como su archivo README, estructuras de carpeta estándar y su ciclo básico de CI/CD, con el motivo de mejorar y facilitar los tiempos de desarrollo y despliegue en cada uno de los proyectos.

## Tabla de contenido

- [Comenzando](#comenzando)
    - [Prerrequisitos](#prerrequisitos)
    - [Instalación](#instalación)
    - [Docker](#docker)
    - [Desarrollo](#desarrollo)
- [Pruebas](#pruebas)
    - [Unitarias](#unitarias)
    - [e2e](#e2e)
    - [Linter](#linter)
    - [coverage](#coverage)
- [Compilación](#compilación)
- [Equipo](#equipo)

## Comenzando

A continuación se listarán todos los puntos necesarios para comenzar a desarrollar con el proyecto actual desde su fase de instalación hasta levantar un ambiente local de desarrollo sin problemas, se incluirán instrucciones de ejecución de comandos, testing, reglas y contexto de como esta estructurado el proyecto incluyendo su estructura de carpetas junto con su descripción.

## Prerrequisitos

1. Node js
    * https://nodejs.org/es/download/
2. Docker
    * https://docs.docker.com/get-docker/
3. Express
    * https://expressjs.com/es/

* **Recuerda configurar tus llaves ssh**
    * https://docs.gitlab.com/ee/ssh/

## Instalación

```bash
npm install
```

## Docker

```bash
$ docker build -t example .
$ docker run -d -p 80:3000 example
docker run -d -p 8080:8080 api
```

## Desarrollo

Ejecutar `npm run dev` para un servidor de desarrollo. Navega a `http://localhost:3000/`. La aplicación se recargará automáticamente si cambias cualquiera de los archivos fuente si estas en el modo watch.

```bash
# Levantar (para realizar este comando primero hay que compilar, ver sección compilación)
$ npm run start

# Levantar modo watch (utilizando nodemon)
$ npm run dev
```

## Pruebas

Las pruebas son necesarias para la construcción de nuevas funcionalidades dentro del proyecto, estas pruebas están ligadas a un ciclo de vida de CI/CD que se ejecutará al subir un nuevo cambio en las ramas, se aconseja ejecutar pruebas unitarias o de integración antes de subir una nueva funcionalidad al repositorio, esto es importante para evitar posibles errores en el futuro.

## Unitarias

Ejecutar `npm run test` para ejecutar las pruebas de la unidad a través de [jest](https://jestjs.io/).

```bash
$ npm run test
```

## e2e

Ejecuta `npm run test:e2e` para ejecutar las pruebas de extremo a extremo a través de [jest](https://jestjs.io/).

```bash
$ npm run test:e2e
```

## Coverage

La cobertura de código es una medida (porcentual) en las pruebas de software que mide el grado en que el código fuente de un programa ha sido comprobado.

Sirve para determinar la calidad del test que se lleve a cabo​ y para determinar las partes críticas del código que no han sido comprobadas y las partes que ya lo fueron,​ además se puede utilizar como técnica de optimización dentro de un compilador optimizador para llevar a cabo una eliminación de código muerto, más específicamente sirve para detectar código inalcanzable.

Instrucciones básicas para ejecutar cobertura de código en ambiente de desarrollo local.

Ejecuta `npm run test:cov` para crear el reporte de cobertura, el reporte construirá una carpeta llamada coverage ubicada en la raíz del proyecto.

```bash
# Covertura de test unitarios
$ npm run test:cov
# Covertura de test e2e
$ npm run test:e2e:cov
```

## Compilación

Ejecuta `npm run build` para construir el proyecto. Los artefactos de la construcción serán almacenados en el directorio `dist/`.

```bash
$ npm run build
```

## Equipo

Desarrollado por Diego Cortés

* dcortes.net@gmail.com

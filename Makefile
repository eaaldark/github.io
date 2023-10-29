DOCKER_COMPOSE = docker compose exec eaaldark

bash:
	${DOCKER_COMPOSE} /bin/bash

install:
	${DOCKER_COMPOSE} npm install

dev:
	${DOCKER_COMPOSE} npm run dev

build:
	${DOCKER_COMPOSE} npm run build

preview:
	${DOCKER_COMPOSE} npm run preview

deploy:
	npx gh-pages -d dist

prettier:
	${DOCKER_COMPOSE} npx prettier --write .
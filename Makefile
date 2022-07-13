DOCKER_COMPOSE = docker-compose exec eaaldark

sh:
	${DOCKER_COMPOSE} -it sh

install:
	${DOCKER_COMPOSE} npm install

start:
	${DOCKER_COMPOSE} npm run start

build:
	${DOCKER_COMPOSE} npm run build

sbuild:
	${DOCKER_COMPOSE} serve -s build -l 5000

gh:
	${DOCKER_COMPOSE} gh-pages -d build
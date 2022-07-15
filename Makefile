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
	${DOCKER_COMPOSE} npx serve -s build -l 3100
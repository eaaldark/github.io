DOCKER_COMPOSE = docker-compose exec eaaldark

sh:
	${DOCKER_COMPOSE} /bin/sh

run-install:
	${DOCKER_COMPOSE} npm install

run-start:
	${DOCKER_COMPOSE} npm run start

run-build:
	${DOCKER_COMPOSE} npm run build

run-sbuild:
	${DOCKER_COMPOSE} npx serve -s build -l 3100

run-deploy:
	npx gh-pages -d build
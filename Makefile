all:

clean:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml down --remove-orphans

build:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml build

develop: clean build
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up -d
	docker exec -it lounge bash

.PHONY: all develop

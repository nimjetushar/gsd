# gsd
Getting started with Docker

## Comands for docker execution

Create Docker image using
`docker image build -t nimjetushar/gsd:first-container .`

To list all locally available images
`docker image ls`

To create container on port 8080. -it for interactive mode and -d for detach mode
`docker container run -d --name web-app -p 8000:8080 nimjetushar/gsd:first-container`
`docker container run -it --name web-app -p 8000:8080 nimjetushar/gsd:first-container`

List all running container
`docker container ls`

Stop container
`docker container stop web-app`

Start container
`docker container start web-app`

Remove/delete container
`docker container rm web-app`



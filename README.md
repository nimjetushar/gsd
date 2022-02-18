# gsd
Getting started with Docker

## Comands for docker execution

Create Docker image using
`docker image build -t nimjetushar/gsd:first-container .`

To list all locally available images
`docker image ls`

To create container in detach mode (-d) on port 8080
`docker container run -d --name web-app -p 8000:8080 nimjetushar/gsd:first-container`

List all running container
`docker container ls`



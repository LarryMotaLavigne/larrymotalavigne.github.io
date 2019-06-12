#!/bin/bash

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

docker build . -t light-cv:v1
docker run -d --name light-cv -p 80:80 -p 443:443 light-cv:v1
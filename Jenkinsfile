pipeline {
    agent any
    stages {
        stage('Build Backend') {
            steps {

                // VOLUME PERSISTENCE WITH THE DOCKER VOLUME.
                /*
                --rm — Automatically remove the container when it exits.
                Basically, to avoid polluting your host machine.
                */

                echo 'Building nestjs backend application.'
                sh 'docker info'
                //sh 'docker build -t bma23-backend ./backend'

                // supposed to run the specific build version (i.e ${environment.BUILD_NUMBER})
                sh  'docker compose up --build'
            }
        }
        stage('Building Frontend') {
            steps {
                echo 'Building the frontend application.'
                sh 'docker build -t bma23-client ./client'
                sh 'docker run --rm -it -d -p 80:80 bma23-client:latest'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
            }
        }
    }
}
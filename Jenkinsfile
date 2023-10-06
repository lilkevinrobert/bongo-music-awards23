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
                sh ''
                sh  """
                    docker build -t bma23-backend ./backend
                    // supposed to run the specific build version (i.e ${environment.BUILD_NUMBER})
                    docker run --rm -p 3000:3000 bma23-backend:latest
                """
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
            }
        }
    }
}
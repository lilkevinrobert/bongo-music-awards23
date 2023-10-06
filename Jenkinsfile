pipeline {
    agent any
    stages {
        stage('Build Backend') {
            //changing the working directory to backend(dir)
            steps {
                echo 'Building..'
                sh 'docker info'
                sh 'docker build -t bma23-backend ./backend'
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
pipeline {
  agent any
  stages {
    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            echo 'Start test'
          }
        }

        stage('Alt test') {
          steps {
            echo 'Alternative test'
          }
        }

      }
    }

    stage('Deploy') {
      steps {
        echo 'Start delpoy'
      }
    }

  }
}
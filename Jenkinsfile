pipeline {
  agent any
  stages {
    stage('Set local variables') {
      steps {
        echo 'Set local variables'
      }
    }

    stage('Close ITE app') {
      steps {
        echo 'Close running ITE app instance'
      }
    }

    stage('Get latest FW build') {
      steps {
        echo 'Download latest FW build from Jenkins'
      }
    }

    stage('Extract archive') {
      steps {
        echo 'Extrating Build archive'
      }
    }

    stage('Run FW Getter') {
      steps {
        echo 'Running python FWGetter'
      }
    }

    stage('Remove archive') {
      steps {
        echo 'Remove archive'
      }
    }

    stage('Add xml and tools') {
      steps {
        echo 'Copy XMLConfig and tools to new tag'
      }
    }

    stage('SVN update') {
      steps {
        echo 'SVN Update Test Directory'
      }
    }

    stage('Delete duplicated errors') {
      steps {
        echo 'Delete duplicated error codes'
      }
    }

    stage('Run ITE sequence') {
      steps {
        echo 'Start ITE with specified test sequence'
      }
    }

  }
}
pipeline {
  agent any
  stages {
    stage('Move') {
      steps {
        sh '''cp -r HotelYeah/* /home/ec2-user/hotelyeah-frontend/
'''
      }
    }

    stage('Build') {
      steps {
        sh 'bash /home/ec2-user/hotelyeah.sh'
      }
    }

  }
}
pipeline {
  agent any
  stages {
    stage('Move') {
      steps {
        sh '''ls
cd HotelYeah/
ls
cp -r HotelYeah/* /home/ec2-user/hotelyeah-frontend/
'''
      }
    }

  }
}
pipeline {
  agent any
  stages {
    stage('Run') {
      steps {
        sh '''cd HotelYeah/

sudo docker kill $(sudo docker ps -q)

sudo docker rm $(sudo docker ps -a -q)

sudo docker build -t hotelyeah .

sudo docker run -d -p 8081:80 hotelyeah
'''
      }
    }

  }
}
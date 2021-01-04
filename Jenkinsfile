pipeline {
  agent any
  stages {
    stage('Run') {
      steps {
        sh '''cd HotelYeah/

sudo docker kill $(docker ps -q)

sudo docker rm $(docker ps -a -q)

sudo docker build -t hotelyeah .

sudo docker run -d -p 8081:80 hotelyeah
'''
      }
    }

  }
}
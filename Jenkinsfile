pipeline {
  agent any
  stages {
    stage('Run') {
      steps {
        sh '''cd HotelYeah/

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

docker build -t hotelyeah .

docker run -d -p 8081:80 hotelyeah
'''
      }
    }

  }
}
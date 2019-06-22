module.exports = function (serverSocket, clientSocket) {
  clientSocket.on('msg', function () {
    console.log(clientSocket.request.session.user)
  })
}

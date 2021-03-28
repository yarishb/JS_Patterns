class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAWS = true
    server.awsInfo = function() {
        return server.url
    }

    return server
}


function azure(server) {
    server.isAzure = true
    server.port += 500

    return server
}

function mongoose(server, connections) {
    server.isMongoose = true
    server.connections = connections
    server.countConnections = function() {
        return server.connections.length
    }

    server.getConnectionDataFromID = function(id) {
        return server.connections[id]
    }

    return server
}


const server1 = aws(new Server('124.168.0502',8080 ))
console.log(server1.isAWS)
console.log(server1.awsInfo())


const server2 = azure(new Server('103.123.321', 3000))
console.log(server2.isAzure)
console.log(server2.url)


const server3 = mongoose(new Server('103.2312.12.43', 5555), [1,2,3,4,5,6,7])
console.log(server3.isMongoose)
console.log(server3.countConnections())
console.log(server3.getConnectionDataFromID(2))
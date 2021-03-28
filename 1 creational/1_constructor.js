//before
function Server(name, ip) {
    this.name = name
    this.ip = ip
}


Server.prototype.getUrl = function() {
    return `https://${this.ip}:3000`
}

const aws = new Server('AWS Ukraine', '192.168.2.107')
console.log('before', aws.getUrl())


//now
class ServerNew {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:3000`
    }
}

const aws_new = new ServerNew('AWS Ukraine', '192.168.2.107')
console.log('new', aws_new.getUrl())


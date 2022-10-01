const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user)

//uptime of the system in sec

const usertime = os.uptime();
console.log(usertime)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)


const os = require('os')
const path = require('path')

const user = os.userInfo()
//console.log(user)
//console.log(os.uptime())

const currentOS = {
	name:os.type(),
	release:os.release(),
	totalMem:os.totalmem(),
    freeMem:os.freemem()
}
//console.log(currentOS)

console.log(path.sep)

const filePath = path.join('/ZTM','webapp', 'App2', 'index.js')
//console.log(filePath)

const base = path.basename(filePath)
//console.log(base)

const absolute = path.resolve(__dirname, 'ZTM', 'webapp', 'App2', 'index.js')
//console.log(absolute)
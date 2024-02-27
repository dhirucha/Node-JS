
// **************OS module******************


const os = require('os')

//CPU architecture
console.log('CPU architecture: ' + os.arch())

//Free memory
console.log('Free memory: '+ os.freemem())


//total memory
console.log('Total memory: '+ os.totalmem());

//network interfaces
console.log('Network interfaces: '+ JSON.stringify(os.networkInterfaces()))


//default temp dir
console.log('Default temp dir: '+os.tmpdir())


console.log('Endianess :'+ os.endianness())

//hostname
console.log('Hostname :'+os.hostname)

//OS type
console.log('OS type : '+os.type())

//OS release
console.log('OS release date :'+os.release())



const fs = require('fs')

fs.writeFile('message.text', 'Oi mãe', (err) => {
    if(err) throw err
    console.log('The file has been saved.')
})
import moment from 'moment'

export const parse = async () => {

    var fs = require('fs')
    var path = `${process.cwd()}/src/data/`
    var today = moment().format("YYYY-MM-DD")
    var filename = `${today}.md`

    // console.log(path)
    // console.log(today)
    // console.log(filename)

    try {
        var menu = fs.readFileSync(path + `${filename}`);
        return menu.toString()
    } catch(err) {
        if (err.code === 'ENOENT') {
            console.log('File not found!');
            return "404"
        } 
    }
    
    
}
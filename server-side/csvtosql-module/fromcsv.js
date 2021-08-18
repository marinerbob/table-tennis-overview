const fs = require('fs');

module.exports = (path) => {
    const data = fs.readFileSync(path, 'utf8');
    
    let rows = data.split(`\r\n`);
    let headers = rows[0].split(';');
    let nonEmptyRows = rows.filter((row, i) => {
        return row.length > 0 && i !== 0
    });
    
    return [headers, nonEmptyRows];
}
const fs = require('fs');
const loginTransform = require('./loginIdMaps.json');

const writeInserts = (pathName, tableName, paramNames, rows, ...additionals) => {
    const fixedRows = __splitParams(rows);
    const textIndexes = additionals[0] && additionals[0].map(tParam => paramNames.indexOf(tParam)) || [];
    const loginIndexes = additionals[1] && additionals[1].map(loginParam => paramNames.indexOf(loginParam)) || [];
    const dateIndexes = additionals[2] && additionals[2].map(dateParam => paramNames.indexOf(dateParam)) || []
    const transformedParams = paramNames.map(param => {
        if (additionals[1].includes(param)) {
            let transformed = param.split('_');
            return `${transformed[0]}_id`;
        }
        return param;
    });

    let insertInstruction = `INSERT INTO ${tableName} (${transformedParams.join(',')}) VALUES`;
    let completedQuery = __prepareInserts(insertInstruction, fixedRows, textIndexes, loginIndexes, dateIndexes);

    fs.writeFile(`${pathName}.txt`, completedQuery, 'utf8', (err) => {
        if (err) {
            console.error(err);
        }
    });

    return completedQuery;
}

const __prepareInserts = (instruction, rows, textIndexes, loginIndexes, dateIndexes) => {    
    let instr = instruction;

    rows.forEach((row, index) => {
        instr+=`\n(${row.map((p, i) => {
            let prepParam = p;
            if (dateIndexes.includes(i)) prepParam = p.split('.').reverse().join('-');
            if (loginIndexes.includes(i)) prepParam = loginTransform[prepParam];
            if (textIndexes.includes(i)) prepParam = `"${prepParam}"`;
            return prepParam;
        }).join(',')})`;

        if (index !== rows.length - 1) {
            instr+=',';
        }
    });
    
    return instr;
}

const __splitParams = rows => {
    return rows.map(row => row.split(';'));
}

module.exports = {
    writeInserts
};
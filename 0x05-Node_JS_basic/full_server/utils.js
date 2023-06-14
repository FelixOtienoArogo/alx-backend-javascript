const fs = require('fs');

function readDatabase(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const rows = data.toString('utf-8').trim().split('\n');
        const size = rows.length - 1;
        const csvData = rows.map((row) => row.split(','));
        const fields = {};
        const students = {};
        let keys = Object.keys(fields);

        const display = async () => {
          for (let i = 1; i < size + 1; i += 1) {
            if (!keys.includes(csvData[i][3])) {
              fields[csvData[i][3]] = 0;
            }
            keys = Object.keys(fields);
            if (keys.includes(csvData[i][3])) {
              fields[csvData[i][3]] += 1;
            }
          }
          let name = [];
          for (let j = 0; j < keys.length; j += 1) {
            for (let i = 1; i < size + 1; i += 1) {
              if (keys[j] === csvData[i][3]) {
                name.push(csvData[i][0]);
              }
            }
            students[keys[j]] = name;
            name = [];
          }
        };
        display();
        resolve(students);
      }
    });
  });
  return promise;
}

export default readDatabase;
module.exports = readDatabase;

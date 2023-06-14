const fs = require('fs');

function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const rows = data.toString('utf-8').trim().split('\n');
        const size = rows.length - 1;
        const csvData = rows.map((row) => row.split(','));
        const fields = {};
        let message = '';
        let keys = Object.keys(fields);

        const display = async () => {
          console.log(`Number of students: ${size}`);
          message += `Number of students: ${size}\n`;

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
            const string = name.map(String).join(', ');
            console.log(`Number of students in ${keys[j]}: ${fields[keys[j]]}. List: ${string}`);
            message += `Number of students in ${keys[j]}: ${fields[keys[j]]}. List: ${string}\n`;
            name = [];
          }
        };
        display();
        resolve(message);
      }
    });
  });
  return promise;
}

module.exports = countStudents;

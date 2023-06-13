const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.toString('utf-8').trim().split('\n');
    const size = rows.length - 1;
    const csvData = rows.map((row) => row.split(','));
    const fields = {};
    let keys = Object.keys(fields);
    console.log(`Number of students: ${size}`);

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
      process.stdout.write(`Number of students in ${keys[j]}: ${fields[keys[j]]}.`);
      process.stdout.write(' List: ');
      console.log(string);
      name = [];
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

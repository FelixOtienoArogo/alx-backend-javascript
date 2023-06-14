import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const message = ['This is the list of our students'];

    readDatabase(path).then((students) => {
      for (const field in students) {
        if (field) {
          const string = students[field].map(String).join(', ');
          message.push(`Number of students in ${field}: ${students[field].length}. List: ${string}`);
        }
      }
      response.status(200).send(message.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    response.status(200);
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(path).then((students) => {
      const string = students[major].map(String).join(', ');
      const message = (`List: ${string}`);
      response.status(200).send(message);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

export default StudentsController;
module.exports = StudentsController;

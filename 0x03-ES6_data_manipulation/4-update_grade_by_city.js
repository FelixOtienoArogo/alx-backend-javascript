export default function updateStudentGradeByCity(array, city, newGrades) {
  array.map((val) => {
    const student = val;
    student.grade = 'N/A';
    for (const entry of newGrades) {
      if (student.id === entry.studentId) {
        student.grade = entry.grade;
      }
    }
    return student.grade;
  });

  return array.filter((student) => student.location === city);
}

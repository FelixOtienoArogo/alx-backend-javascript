interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}


interface Directors extends Teacher {
	numberOfReports: number;
}


interface printTeacherFunction {
	(firstName: string, lastName: string) :string;
}
export function printTeacher (firstName: string, lastName: string): string{
	return(`${firstName.charAt(0)}. ${lastName}`);
}

interface studentclass {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}
interface studentClassConstructor{
	(firstName: string, lastName: string): studentclass;
}
export class StudentClass implements studentclass {
	firstName: string;
	lastName: string;

	constructor (firstName: string, lastName: string){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string{
		return ('Currently working');
	}
	displayName (): string{
		return this.firstName;
	}
}


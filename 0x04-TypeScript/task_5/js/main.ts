export interface MajorCredits{
	credits: number;
	id: 'Major';
}
export interface MinorCredits{
	credits: number;
	id: 'Minor';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits{
	const sum: number = subject1.credits + subject2.credits;
	const obj: MajorCredits = {
	credits: sum,
	id: 'Major',
	};
	return obj;
}
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits{
	const sum: number = subject1.credits + subject2.credits;
	const obj: MinorCredits = {
	credits: sum,
	id: 'Minor',
	};
	return obj;
}

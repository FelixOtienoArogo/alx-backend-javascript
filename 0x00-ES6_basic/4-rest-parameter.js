export default function returnHowManyArguments(...Arguments) {
    var num = 0;
    for (let arg of Arguments){
	num += 1;
    }
    return num;
}

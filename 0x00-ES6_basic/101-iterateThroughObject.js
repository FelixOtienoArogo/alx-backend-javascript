 export default function iterateThroughObject(reportWithIterator) {
     let str = "";
     for (const [i, name] of reportWithIterator.entries()){
	 if (i !== reportWithIterator.length - 1){
	     str +=`${name} | `;
	 }
	 else{
	     str += name;
	 }
     }
     return str;
 }

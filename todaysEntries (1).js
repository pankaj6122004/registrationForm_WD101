
/*
 * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
 *
 * For example, here's an array of three entries and assume the date now is 2022-04-01.
 *
 * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2022-04-02T02:53:42+05:30" }, { name: "Ron" , date: "2022-04-01T03:53:42+05:30" }]
 *
 * The function should return: ``` Harry,Ron ```. Please note that the names are separated by a comma without space.
 */

function todaysEntries(entries) {
	// Complete the function
	let date=new Date();
	let current_date = date.getFullYear()+"-"+("0" + (date.getMonth() + 1)).slice(-2)+"-"+ ("0" + date.getDate()).slice(-2);
	let filtered = entries.filter(item => item.date.substring(0,10) === current_date);
	let count=filtered.length;
	if(count===0){
		return "";
	}
	if(count === 1){
		return (filtered[0].name);
	}
	else{
		return (filtered[0].name + "," + filtered[count-1].name);
	}
}
 module.exports = todaysEntries;

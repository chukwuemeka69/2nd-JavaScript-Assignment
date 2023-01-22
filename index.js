function lifeInWeeks() {
    /************Don't change the code above************/    
       
    //Write your code here.
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = parseInt (dd);
    month =  parseInt(mm);
    let age = Number (prompt("Enter your current age:"));
    let maxAge = 90;
    let balanceYears = maxAge - age;
    remMonthsForTheYear = 12-month;
    let numberOfMonths = balanceYears * 12 - 1;
    // alert (numberOfMonths);
    if (month===02) {
        let dayOfMonth = 28;
        const day = (dayOfMonth-today) % 7;
        const weeks = Math.floor((dayOfMonth- today)/ 7);
        alert (`Your have ${day} days , ${weeks} weeks and ${numberOfMonths} months left`);
    }
    else if ( month===04 || month=== 06 || month===09 || month===11){
            let dayOfMonth = 30;
            const day = (dayOfMonth-today) % 7;
            const weeks = Math.floor((dayOfMonth- today)/ 7);
            alert (`Your have ${day} days , ${weeks} weeks and ${numberOfMonths} months left`);
    }
    else {
        let dayOfMonth = 31;
        const day = (dayOfMonth-today) % 7;
        const weeks = Math.floor((dayOfMonth- today)/ 7);
        alert (`Your have ${day} days , ${weeks} weeks and ${numberOfMonths} months left`);
    }

//     /*************Don't change the code below**********/
}
 
lifeInWeeks ();

// 8888888888888888888888888888888888888888888888888888888888888888888888888888
// 88 Second Part                                                            88
// 88 Love calculator that will give us how many percent match are 2 partners88
// 8888888888888888888888888888888888888888888888888888888888888888888888888888
function loveCalculator() {
    let nameOne  = prompt ("Enter the name of the first partner:");
    let nameTwo = prompt ("Enter the name of the second partner:");
    let calc = Math.floor(Math.random() * 101);
    document.write (`${nameOne} and ${nameTwo} are ${calc}  %  match`);
}
loveCalculator();



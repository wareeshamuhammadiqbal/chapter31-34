// // Question # 01
// //Current date & time

 var currentDate_Time = new Date();
 console.log(currentDate_Time);

// // Question # 02
// //Current month

var months = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec'];
var todayMonth = new Date();
var getMonth = todayMonth.getMonth();
var nameofMonth = months[getMonth];
console.log(nameofMonth);


// // Question # 03
// // Show the day name

// var daysName = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
// var currentDay = new Date();
// var getDay = currentDay.getDay();
// var nameofDay = daysName[getMonth].slice(0,3);
// alert(nameofDay);

// //Question # 04
// // Fun day application

var funDay = prompt('write day name which is today');
var funDayTolowerCase = funDay.toLowerCase()

if( funDayTolowerCase == 'saturday' || funDayTolowerCase == 'sunday'){
    alert('Today is Fun day');
}
else{
    alert('Today is work day');
}

// //Question # 05
// // Show start and Last Days of the months

var dayNumber = +prompt('Enter any date which you like');

if(dayNumber < 16 ){
    alert('First Fifteen Days of the Month');
}
else{
    alert('Last Days of the Month')
}

// //Question # 06
// //Millisecond since jan 1 1970

var now = new Date();
console.log(now);
var timeSince1970 = now.getTime();
console.log(timeSince1970);
var minuteSince1970 = timeSince1970 / (1000 * 60 * 60)
console.log(minuteSince1970);

// //Question # 07
// //Am or Pm

var time = prompt('What time is it?');

if(time < 13){
    alert("It's Am")
}
else{
    alert("It's Pm")
}


// //Quesstion # 08
// //Assign a date to an Date object by self

var laterDate = new Date('December 31 2022');
console.log(laterDate);


// //Question # 09
// //Count Ramazan days

var todayDate = new Date();
var RamazanDate = new Date('June 18 2015');
var getDayofRamazan = RamazanDate.getTime();
console.log(getDayofRamazan)
var getDayoftoday = todayDate.getT();
console.log(getDayoftoday)
var days = getDayoftoday - getDayofRamazan / (1000 * 60 * 60 * 24 * 12 * 31 ) ;
console.log( days + ' days have passed since 1st Ramazan ,2015');


// // Question # 10

console.log( (1000 * 60 * 60 * 24 * 12 * 31 *7 ) )


// //Question 11

var today = new Date();
var hour = today.getHours();
var sub = 
console.log(hour);
console.log(today);
var mydate = new Date('11:49:59');
var myhours = Number(mydate.getHours());
 console.log(mydate)

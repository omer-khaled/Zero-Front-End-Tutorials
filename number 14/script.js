{/* <span class="days"></span>
<span class="hours"></span>
<span class="minutes"></span>
<span class="seconds"></span> */}
let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

// Date.now() eual to new Date().getTime()
// console.log(new Date('Dec 31, 2022 23:59:59').getTime());
// console.log(new Date('2022-12-31 23:59:59').getTime());
// console.log(new Date('12-31-2022 23:59:59').getTime());
let eventTime = new Date('2022-12-31T23:59:59').getTime();
let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let DataDiff = eventTime - dateNow;

    // days
    let remain = DataDiff % (1000 * 60 * 60 * 24);
    // ----------------------------------------
    
    let day = (Math.floor(DataDiff / (1000 * 60 * 60 * 24)));
    days.innerHTML = day;
    // ----------------------------------------    
    
    let hour = Math.floor((DataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // let hour = Math.floor((remain) / (1000 * 60 * 60));
    hours.innerHTML = hour;
    // ----------------------------------------    
    
    remain = remain % (1000 * 60 * 60);
    let minute = Math.floor((DataDiff % (1000 * 60 * 60)) / (1000 * 60));
    // let minute = Math.floor((remain) / (1000 * 60));
    minutes.innerHTML = minute;
    // ----------------------------------------
    
    remain = remain % (1000 * 60);
    let second = Math.floor((DataDiff % (1000 * 60)) / (1000));
    // let second = Math.floor((remain) / (1000));
    seconds.innerHTML = second;
    // console.log(second);
},1000);
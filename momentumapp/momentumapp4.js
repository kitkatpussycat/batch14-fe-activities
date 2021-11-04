//DOM ELEMENTS 
const time = document.getElementById('time'),
day_date = document.getElementById('day_date'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus'),
focus_today = document.getElementById('focus_today');


//Show Time
function showTime(){
    //let today = new Date(2021, 06, 10, 20, 33, 30),
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    current_day = today.getDay(),
    current_month = today.getMonth();
    current_date = today.getDate();
    current_year = today.getFullYear();

    day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']
    month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    //add leading zeroes to minutes and seconds
    if(sec < 10){
        sec = '0' + sec;
    }
    if (min < 10){
        min = '0' + min;
    }

    //Set AM or PM
    const amPm= hour >= 12 ? 'PM' : 'AM'; //shortcut for else if or case

    //12hr Format
    if(hour > 12){
        hour = hour - 12;
    }

    //OUtput Time
    day_date.innerHTML = `${day[current_day]}<span> </span>${month[current_month]}<span> </span>${current_date}<span> </span>${current_year}`;
    time.innerHTML = `${hour}<span>:</span>${(min)}<span>:</span>${(sec)}<span> </span>${amPm}`;

    setTimeout(showTime, 1000);
    //time.style.fontWeight = "bold";
}

///////////////////////////////RUN time

//Set background and Greeting
function setGreeting(){
    //let today = new Date(2021, 06, 10, 20, 33, 30),
    let today = new Date(),
    hour = today.getHours();

if (hour < 12){
    //Morning
    document.body.style.backgroundImage = "url('https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.6435-9/251556820_2436852903117533_8622550278804544570_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFqa_arqS2XSj_YvhoZgyJQUCKqSoIHJGxQIqpKggckbJUunoUcMhiir4m67Y-zcsou-LhXdDUQ-_0388M4T37i&_nc_ohc=B5fpkh0ZYFgAX95axrb&tn=dsJwRmsUB9CjLS48&_nc_ht=scontent.fmnl9-1.fna&oh=1e538dff13509ec2219b9a05064e0c3f&oe=61A99DDA')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Goodmorning, ';
    output.style.color = "white";//yung sa quote ito
    focus_today.style.color = "white";
    focus.style.color = "white";
    document.body.style.color = 'white';

}else if (hour < 18){
    //Afternoon
    document.body.style.backgroundImage = "url('https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/251913276_2436853639784126_2223111632482725008_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEeB8Dbnx2-3VZxBb4tWpM8RWKMoeBuqI5FYoyh4G6ojvqsL03NApVj3cR1BJwATeK_jzOfWJniALLUNeVayE2m&_nc_ohc=PB7wNncyJj0AX-O3NP2&_nc_ht=scontent.fmnl9-2.fna&oh=aa645c11fdd6ce5512047b90d5f7f021&oe=61AA3DCA')";
    //document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Goodafternoon, ';
    document.body.style.color = 'white';
}else {
    //evening
    document.body.style.backgroundImage = "url('https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.6435-9/251873397_2436852686450888_5702713131512895629_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEI_32JjtAUzHTgLkXpiJ5c7K0BQPe5w27srQFA97nDbnjzajsV_YkRCRGbAluz_rgBgUCw8EvS_neMjpFJSTt0&_nc_ohc=YlXVOn9SuFAAX_Z4dff&_nc_ht=scontent.fmnl9-1.fna&oh=6b80dafe5e662c9808d02190ecf962f0&oe=61AA8B4E')";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Goodevening, ';
    document.body.style.color = 'white';
}

}

//////////////////////////////////Run Greetings and Background

//Get Name
function getName(){
    if(localStorage.getItem('name')===null) {
        name.textContent = '[Enter Name]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}

////////////////////////////////Run get Name in Local storage
//Set Name (7)
function setName(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();           
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}



//Get Focus (6)
function getFocus(){
    if(localStorage.getItem('focus')===null) {
        focus.textContent = '';
    }else {
        focus.textContent = localStorage.getItem('focus');
    }
}

////////////////////////////////Run get focus in Local storage

//Set Focus (8)
function setFocus(e){
    if(e.type === 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();           
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

// change What is your focus today to toda's focus
function changeFocus(){
    if(localStorage.getItem('focus')===null){
        focus_today.innerHTML = "What is your Main FOCUS today?"
    } else{
        focus_today.innerHTML = "Today's Focus";
    }
}

focus.addEventListener('keypress', function(e){
    if(e.which == 13 || e.keyCode == 13){
focus_today.innerHTML = "Today's Focus";
}
});


name.addEventListener('keypress',setName); //eto muna bago 7
name.addEventListener('blur', setName); // eto muna bago 7
focus.addEventListener('keypress',setFocus); // eto muna bago 8
focus.addEventListener('blur', setFocus); //eto muna bago 8

//////////////////////////////////////////


//for quote generator
let output = document.getElementById('output');
let quote = [
    '"The way to get started is to quit talking and begin doing."',
    '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
    '"The only impossible journey is the one you never begin."',
    '"Life is really simple, but we insist on making it complicated."',
    '"Life itself is the most wonderful fairy tale."',
    '"Victory is sweetest when you have known defeat."',
    '"For success, attitude is equally as important as ability."',
    '"Your attitude, not your aptitude, will determine your altitude."',
    '"People may hear your words, but they feel your attitude."',
    '"Your attitude towards failure determines your attitude after failure."',
    '"i need somebody who will love me at my worst. No, Im not perfect but I hope he sees my worth"'
];

//to save array in local storage
//localStorage.quote = JSON.stringify(quote);/////////////eto lang pala ang dahilan.. nung tinanggal ko to, nagsasave na sa local storage kahit irefresh.. pero pag dinedelete ko yung array, nawawala na buong page.. kaya ibalik mo lang sya ulit or magtype ka lang ulit newQuote bago refresh..
var storedQuotes = JSON.parse(localStorage.quote);
    var randomQuote = storedQuotes[Math.floor(Math.random() * storedQuotes.length)]
    output.innerHTML = randomQuote;

    console.log(storedQuotes);//mejo nagloload sya.. kaya magwait lang ng time

/////////////////////////////////////////////
//Add new quote
let addNewQuote = document.getElementById('addNewQuote'); // dati para sa button.. pinalitan ko ng enter tab..
let newQuote = document.getElementById('newQuote');

addNewQuote.addEventListener('click',function(){
    if (newQuote.style.display === "none"){
        newQuote.style.display = "block";
    }else{
        newQuote.style.display = "none";
    }
    })

newQuote.addEventListener('keypress', function(e){
    if(e.which == 13 || e.keyCode == 13){
        var quo = [];  
        quo = newQuote.value;
      quote.push(quo);
      alert('Your new Quote has been added to database of quotes');
      localStorage.setItem("quote",JSON.stringify(quote));//dahil dito, nasave sa local storage ang newQuote.. pero nawawala newQuote upon refresh
      JSON.parse(localStorage.getItem(quote));//wala namang effect ito.. kahit burahin oks lang..
      output.innerHTML = quo;
      newQuote.value = "";
      newQuote.style.display = "none";
    }  
  });

//for to-do list
//let addToDoButton = document.getElementById('addToDo');
let toss = document.getElementById('tosss');
let toss1 = document.getElementsByClassName('container2');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let toDoContainer2 = document.getElementById('todo-container');


document.addEventListener("DOMContentLoaded", getTodos1);
//debugger;


function myFunction(){
    if(toDoContainer2.style.display === "none"){
        toDoContainer2.style.display = "block";
    }else{
        toDoContainer2.style.display = "none";
    }
}

    //to create paragraph todo
    inputField.addEventListener('keypress', function(e){
        if(e.which == 13 || e.keyCode == 13){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value; //eto pala yung mastore yung tinype mo sa textbox.
    saveLocalTodos1(inputField.value);
    toDoContainer.appendChild(paragraph); 
    inputField.value = ""; // eto naman yung gagawing empty yung textbox kapag tapos mag add..
        }
    //for complete paragraph todo
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"; 

    })

    //for delete paragraph todo
    paragraph.addEventListener('contextmenu', function(){
        event.preventDefault();
        //debugger;
        toDoContainer.removeChild(paragraph);
        removeLocalTodos1();

    })    

})

function saveLocalTodos1(paragraph){
    //debugger;
    let todos1;
    if (localStorage.getItem("todos1") === null){
        todos1 = [];
    }else{
        todos1 = JSON.parse(localStorage.getItem("todos1"));
    }
    todos1.push(paragraph);
    localStorage.setItem("todos1",JSON.stringify(todos1));
}



//delete LocalTodo's
function removeLocalTodos1(){
    //debugger;
    let todos1;
    if(localStorage.getItem("todos1") === null){
        todos1 = [];
    }else{
        todos1 = JSON.parse(localStorage.getItem("todos1"));
    }
    //debugger;
    const paragraphIndex = todos1[0]//ang nadedelete nya is yung una.., yung index 0
    //debugger;
    todos1.splice(todos1.indexOf(paragraphIndex), 1);
    //debugger;
    localStorage.setItem("todos1", JSON.stringify(todos1));

}

function getTodos1(){
    //debugger;
    let toDoContainer = localStorage.getItem("todos1")
    if(localStorage.getItem("todos1") === null){
        toDoContainer = [];
    }else{
        toDoContainer = JSON.parse(toDoContainer);
    }
    //debugger;
    
    
    toDoContainer.forEach(function(toDoContainer){
        //debugger;
        inputField.addEventListener('keypress', function(e){
            if(e.which ==13 || e.keycode == 13){
                var paragraph = document.createElement('p')
                paragraph.classList.add('paragraph-styling');
                paragraph.innerText = inputField.value;
                toDoContainer.appendChild(paragraph);
                inputField.value = "";
            }
        })
        //debugger;
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        })

        paragraph.addEventListener('dblclick', function(){
            toDoContainer.removeChild(paragraph);
        })
    })
}


/////////////////////////

//RUN
showTime();
setGreeting();
getName();
getFocus();
changeFocus();


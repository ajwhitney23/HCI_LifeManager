/*
function listView() {
    document.getElementById("listButton").style.visibility = "hidden";
    document.getElementById("calendarButton").style.visibility = "hidden";
    document.getElementById("budgetButton").style.visibility = "hidden";
    document.getElementById("myBotnav").style.visibility = "visible";
    document.getElementById("list").className = "active";
    document.getElementById("listB").className = "active";
    document.getElementById("cal").className = "notActive";
    document.getElementById("calB").className = "notActive";
    document.getElementById("budget").className = "notActive";
    document.getElementById("budB").className = "notActive";
    document.getElementById("welcome").style.visibility = "hidden";
    document.getElementById("list-container").style.visibility = "visible";
    document.getElementById("calendar").style.visibility = "hidden";
    document.getElementById("budget-container").style.visibility = "hidden";
}

function calendarView() {
    document.getElementById("listButton").style.visibility = "hidden";
    document.getElementById("calendarButton").style.visibility = "hidden";
    document.getElementById("budgetButton").style.visibility = "hidden";
    document.getElementById("myBotnav").style.visibility = "visible";
    document.getElementById("list").className = "notActive";
    document.getElementById("listB").className = "notActive";
    document.getElementById("cal").className = "active";
    document.getElementById("calB").className = "active";
    document.getElementById("budget").className = "notActive";
    document.getElementById("budB").className = "notActive";
    document.getElementById("welcome").style.visibility = "hidden";
    document.getElementById("list-container").style.visibility = "hidden";
    document.getElementById("calendar").style.visibility = "visible";
    document.getElementById("budget-container").style.visibility = "hidden";
}

function budgetView() {
    document.getElementById("listButton").style.visibility = "hidden";
    document.getElementById("calendarButton").style.visibility = "hidden";
    document.getElementById("budgetButton").style.visibility = "hidden";
    document.getElementById("myBotnav").style.visibility = "visible";
    document.getElementById("list").className = "notActive";
    document.getElementById("listB").className = "notActive";
    document.getElementById("cal").className = "notActive";
    document.getElementById("calB").className = "notActive";
    document.getElementById("budget").className = "active";
    document.getElementById("budB").className = "active";
    document.getElementById("welcome").style.visibility = "hidden";
    document.getElementById("list-container").style.visibility = "hidden";
    document.getElementById("calendar").style.visibility = "hidden";
    document.getElementById("budget-container").style.visibility = "visible";
}

function initBody() {
    document.getElementById("myBotnav").style.visibility = "hidden";
    document.getElementById("list-container").style.visibility = "hidden";
    document.getElementById("calendar").style.visibility = "hidden";
    document.getElementById("budget-container").style.visibility = "hidden";
}
*/
function listView() {
    document.getElementById("listButton").style.display = "none";
    document.getElementById("calendarButton").style.display = "none";
    document.getElementById("budgetButton").style.display = "none";
    document.getElementById("myBotnav").style.display = "block";
    document.getElementById("list").className = "active";
    document.getElementById("listB").className = "active";
    document.getElementById("cal").className = "notActive";
    document.getElementById("calB").className = "notActive";
    document.getElementById("budget").className = "notActive";
    document.getElementById("budB").className = "notActive";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("list-container").style.display = "block";
    document.getElementById("calendar").style.display = "none";
    document.getElementById("budget-container").style.display = "none";
}

function calendarView() {
    document.getElementById("listButton").style.display = "none";
    document.getElementById("calendarButton").style.display = "none";
    document.getElementById("budgetButton").style.display = "none";
    document.getElementById("myBotnav").style.display = "block";
    document.getElementById("list").className = "notActive";
    document.getElementById("listB").className = "notActive";
    document.getElementById("cal").className = "active";
    document.getElementById("calB").className = "active";
    document.getElementById("budget").className = "notActive";
    document.getElementById("budB").className = "notActive";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("list-container").style.display = "none";
    document.getElementById("calendar").style.display = "block";
    document.getElementById("budget-container").style.display = "none";
}

function budgetView() {
    document.getElementById("listButton").style.display = "none";
    document.getElementById("calendarButton").style.display = "none";
    document.getElementById("budgetButton").style.display = "none";
    document.getElementById("myBotnav").style.display = "block";
    document.getElementById("list").className = "notActive";
    document.getElementById("listB").className = "notActive";
    document.getElementById("cal").className = "notActive";
    document.getElementById("calB").className = "notActive";
    document.getElementById("budget").className = "active";
    document.getElementById("budB").className = "active";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("list-container").style.display = "none";
    document.getElementById("calendar").style.display = "none";
    document.getElementById("budget-container").style.display = "block";
}

function initBody() {
    document.getElementById("myBotnav").style.display = "none";
    document.getElementById("list-container").style.display = "none";
    document.getElementById("calendar").style.display = "none";
    document.getElementById("budget-container").style.display = "none";
}

var total = 5;

function addNew() {
    var li = document.createElement("li");
    var text = document.getElementById("listInput").value;
    var text = text.concat(" | ", document.getElementById("classInput").value, " | ", document.getElementById("timeInput").value, " Hours | ", document.getElementById("dateInput").value);
    var inputValue = text;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    total = total + Number(document.getElementById("timeInput").value);
    var hourString = "Total Hours: ";
    hourString = hourString.concat(total);

    var i = 0;
    if (document.getElementById("listInput").value === '') {
        alert("Cannot have an empty assignment name!");
        i = 0;
    }
    else {
        i = 1;
    }

    if (document.getElementById("classInput").value === '') {
        alert("Must input a Class or Group!");
        i = 0;
    }
    else {
        i = 1;
    }

    if (document.getElementById("timeInput").value == 0) {
        alert("Must input valid time!");
        i = 0;
    }
    else {
        i = 1;
    }

    if(i)
    {
        document.getElementById("listUL").appendChild(li);
        document.getElementById("totalHours").textContent = hourString;
    }
}

function settings() {
    alert("Settings is still a Work in Progress");
}

function calcBudget() {
    var total = document.getElementById("totalBudget").value;
    var weeks = document.getElementById("numWeeks").value;
    var perWeek = Math.round(total/weeks);
    var daily = Math.round(total/(weeks * 7));

    var i = 0;
    if (document.getElementById("totalBudget").value == 0) {
        alert("Budget number not valid!");
        i = 0;
    }
    else {
        i = 1;
    }

    if (document.getElementById("numWeeks").value == 0) {
        alert("Number of weeks not valid!");
        i = 0;
    }
    else {
        i = 1;
    }
    

    if(i)
    {
        /*
        document.getElementById("daily").appendChild(p);
        document.getElementById("weekly").appendChild(p2);
        */
        document.getElementById("dailyValue").textContent = daily;
        document.getElementById("weeklyValue").textContent = perWeek;
    }
}


function submit(){
    var guestName=document.getElementById("names").value;
    names_of_people.push(guestName);
}
function show(){
    document.getElementById("names_of_people").style.display="block";
}
function sort(){
names_of_people.sort()
}

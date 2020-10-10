// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
 // 13 characters in name...not including space
function changeContent() {
    let x = document.getElementsByClassName("header");
    x[0].innerHTML = "Aneeza Khawaja's Lab 4";
}
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
function insertParagraphs(p_class_name, p_value) {
    var p = document.createElement("p");
    p.className = p_class_name;
    var node = document.createTextNode(p_value);
    p.appendChild(node);
    var element = document.getElementsByClassName("content")[0];
    console.log(element);
    element.appendChild(p);
}
// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
function addFirstParagraphContent() {
    let name = "Aneeza Khawaja";
    let name_length = name.length - 1;
    let x = document.getElementsByClassName("p1");
    x[0].innerHTML = "my name has " + name_length + " characters ..." + name;
}
// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
function addSecondParagraphContent() {
    let name = "Aneeza Khawaja";
    let x = document.getElementsByClassName("p2")[0];
    x.innerHTML += " " + name[2];
}

function changeThirdCharacter() {
    const offset = 2;
    let first_three = "Ane";
    let x = document.getElementsByClassName("p1")[0];
    let x_value = x.innerHTML;
    let p_value = [];
    for (var i=0; i < x_value.length; i++) {
        p_value.push(x_value[i]);
    }
    let index = x.innerHTML.search(first_three);
    p_value[index + offset] = "E";
    let new_str = "";
    for (var i=0; i< p_value.length; i++) {
        new_str += p_value[i]
    }
    x.innerHTML = new_str;
}
// 6 Add a new line to your second paragraph

function addNewLine() {
    let last_three = "aja"
    let x = document.getElementsByClassName("p2")[0];
    x.innerHTML += "<br>" + last_three;
}

// 7 Return the final three characters of your last name to that new line
function sub_string() {
    let name = "Aneeza Khawaja";
    let arr = [];
    first_letter = name.substring(0,1);
    last_letter = name[name.length-1];
    arr.push(first_letter);
    arr.push(last_letter);
    return arr;
}
// 8 Substring your first and last name into two separate variables

function displayNumber(total_length) {
    let x = document.getElementsByClassName("header");
    x[0].innerHTML += " " + total_length;
}

changeContent();

let p_class_names = ["p1", "p2"];
let p_values = ["This is p1", "this is p2"];

for (var i=0; i < p_class_names.length; i++) {
    insertParagraphs(p_class_names[i],p_values[i]);
}

addFirstParagraphContent();
addSecondParagraphContent();
changeThirdCharacter();
addNewLine();

// 9 Add the total length of your first and last names together

let substrings = sub_string();
let total_length = substrings[0].charCodeAt(0) + substrings[1].charCodeAt(0);
console.log(total_length);

// 10 Display that total next to your name in your header

displayNumber(total_length);
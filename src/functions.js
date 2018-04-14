//creating table and storing it in local storage
// console.log("localstorage: "+localStorage.getItem('todoList').length)
//localStorage.setItem('todoList', null);
var rowCount = parseInt(localStorage.getItem("rowCount"));
var colCount = parseInt(localStorage.getItem("colCount"));
var todoList = localStorage.getItem("todoList");

//var max = (localStorage.getItem() ? (localStorage.getItem('todoList')):6
var max = (todoList != "") ? (rowCount):(6)
// let max = localStorage[keys] || 10;
if(todoList == ""){
    colCount = max;
}
console.log(todoList != "");
console.log("rowCount: "+isNaN(rowCount));
console.log("colCount: "+colCount);
console.log("max: "+max);
for (let i=0; i<max; i++) { /* build the table */
    let row = document.querySelector('table').insertRow();
    for (let j=0; j<colCount; j++) {
        let letter = String.fromCharCode("A".charCodeAt(0)+j-1)
        row.insertCell().innerHTML = i&&j ? `<input id=${letter}${i} />` : i||letter
    }
}


// taking values form cell

var keys = Array.from(document.querySelectorAll("input")).map(i => i.id) // spread not in Edge
localStorage.setItem('todoList', keys);
console.log("NUmber" + keys);

//calculations
function valueOf(key) { /* recursively compute a value */
let val = localStorage[key] || ""
if (val[0] == "=") {
    let f = new Function(...keys, `return eval("${val.substr(1)}")`)
     console.log("Here"+val[1]);
         exp1 =/SUM/; 
        //  exp2 =/SUB/; 
        //  exp3 =/MUL/; 
        //  exp1 =/DIV/; 
         var op = val[1]+val[2]+val[3];
         if(exp1.test(val)){
             console.log("Here in"+val[2]);
             var table = document.querySelector("table");
            // var sumVal = 0; 
             var initial = val[5]+val[6];
             var a = parseInt(val[6]);
             var final = val[8]+val[9];
             var sum = 0;
                for(var i = a; i <= val[9]; i++)
                {
                 
                    var count = val[5]+a;
                    a++;
                    sum = sum + parseInt(valueOf(count));
                    //sumVal = sumval+1;//+ parseInt(valueOf(count));
                    console.log("Count"+sum);
                  //   sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
                  //   console.log("Sum"+sumVal);
                    // console.log("Here in for"+(valueOf(initial)+ valueOf(count)));
                 }
                 return parseFloat(sum);
         } 

         exp2 =/SUB/; 
         //  exp2 =/SUB/; 
         //  exp3 =/MUL/; 
         //  exp1 =/DIV/; 
          var op = val[1]+val[2]+val[3];
          if(exp2.test(val)){
              console.log("Here in"+val[2]);
              var table = document.querySelector("table");
             // var sumVal = 0; 
              var initial = val[5]+val[6];
              var a = parseInt(val[6]);
              var final = val[8]+val[9];
              var sub = 0;
                 for(var i = a; i <= val[9]; i++)
                 {
                  
                     var count = val[5]+a;
                     a++;
                     sub = parseInt(valueOf(count))- sub;
                    
                     console.log("Count"+sub);
              
                  }
                  sub = sub *(-1);
                  return parseFloat(sub);
          } 

          exp3 =/MUL/; 
          //  exp2 =/SUB/; 
          //  exp3 =/MUL/; 
          //  exp1 =/DIV/; 
           var op = val[1]+val[2]+val[3];
           if(exp3.test(val)){
               console.log("Here in"+val[2]);
               var table = document.querySelector("table");
              // var sumVal = 0; 
               var initial = val[5]+val[6];
               var a = parseInt(val[6]);
               var final = val[8]+val[9];
               var mul = 1;
                  for(var i = a; i <= val[9]; i++)
                  {
                   
                      var count = val[5]+a;
                      a++;
                      mul = mul * parseInt(valueOf(count));
                     
                      console.log("Count"+mul);
               
                   }
                   return parseFloat(mul);
           } 

           exp4 =/DIV/; 
          //  exp2 =/SUB/; 
          //  exp3 =/MUL/; 
          //  exp1 =/DIV/; 
           var op = val[1]+val[2]+val[3];
           if(exp4.test(val)){
               console.log("Here in"+val[2]);
               var table = document.querySelector("table");
              // var sumVal = 0; 
               var initial = val[5]+val[6];
               var a = parseInt(val[6]);
               var final = val[8]+val[9];
               var div = 1;
                  for(var i = a; i <= val[9]; i++)
                  {
                   
                      var count = val[5]+a;
                      a++;
                      div = div / parseInt(valueOf(count));
                     
                      console.log("Count"+div);
               
                   }
                   return parseFloat(div);
           } 
         
    return f(...keys.map(key => ({valueOf: _ => valueOf(key)}))).valueOf()
} else

{
    return isNaN(parseFloat(val)) ? val : parseFloat(val)
}
}

// if (val[0] == "-") {
//    // if (val[0] == "-") {
//        // var op = table.rows[i].cells[val.innerHTML;
//         console.log("Here"+val[1]);
//         exp1 =/SUM/; 
//         var op = val[1]+val[2]+val[3];
//         if(exp1.test(val)){
//             console.log("Here in"+val[2]);
//             var table = document.querySelector("table");
//            // var sumVal = 0; 
//             var initial = val[5]+val[6];
//             var a = parseInt(val[6]);
//             var final = val[8]+val[9];
//             var sum = 1;
//                for(var i = a; i <= val[9]; i++)
//                {
                
//                    var count = val[5]+a;
//                    a++;
//                    sum = sum * parseInt(valueOf(count));
//                    //sumVal = sumval+1;//+ parseInt(valueOf(count));
//                    console.log("Count"+sum);
//                  //   sumVal = sumVal + parseInt(table.rows[i].cells[1].innerHTML);
//                  //   console.log("Sum"+sumVal);
//                    // console.log("Here in for"+(valueOf(initial)+ valueOf(count)));
//                 }
//                 return parseFloat(sum);
//         }
//      //let f = new Function(...keys, `return eval("${val.substr(1)}")`)
//    return f(...keys.map(key => ({valueOf: _ => valueOf(key)}))).valueOf()
//  } else {
//         return isNaN(parseFloat(val)) ? val : parseFloat(val)
//  }

// }
// function calulate(){
//     let val = localStorage[key] || ""
// if (val[0] == "-") {
//     var op = table.rows[i].cells[val[5]].innerHTML;
//     console.log("Here"+op);
// }
// }

(window.update = _ => keys.forEach(key => { /* update all fields */
try { 
    var valOF = valueOf(key)
    
    //console.log("valueof("+key+"): "+valOF);
   // console.log("update");
    document.getElementById(key).value = valOF 
} catch (e) {}
}))()
// calculations should be visible on focus and blur
window.addEventListener("focus", e => e.target.value = localStorage[e.target.id] || "", true)
window.addEventListener("blur", e => (localStorage[e.target.id] = e.target.value, update()), true)

// delete row
function deleteRow() {
document.querySelector("table").deleteRow(-1);

var keys = Array.from(document.querySelectorAll("input")).map(i => i.id) // spread not in Edge
localStorage.setItem('todoList', keys);

var table =  document.querySelector("table");

if(isNaN(rowCount)){
    console.log("row count is null assigning colcount");
    localStorage.setItem("colCount",6);
}

localStorage.setItem("rowCount", table.rows.length)
location.reload()

}

//delete column
function deleteColumn() {
//var row = document.getElementById("myRow");
var table =  document.querySelector("table");
for (var r = 0, n = table.rows.length; r < n; r++) {
 table.rows[r].deleteCell(-1);//var table handle 
}
localStorage.setItem("colCount", table.rows[0].cells.length)
location.reload()
}

//add row
function addRow(){
var table =  document.querySelector("table");
//var row = document.getElementById("myTable");
//var x = table.insertRow(0);
var i =table.rows.length;
for (let n=0; n<1; n++) { /* build the table */
    let row = document.querySelector("table").insertRow();
    var l = document.querySelector("table").rows[0].cells.length
    for (let j=0; j<l; j++) {
        let letter = String.fromCharCode("A".charCodeAt(0)+j-1);
        row.insertCell().innerHTML = i&&j ? `<input id=${letter}${i} />` : i||letter
        keys = Array.from(document.querySelectorAll("input")).map(i => i.id)
        localStorage.setItem('todoList', keys);
    }
}
if(isNaN(rowCount)){
    console.log("row count is null assigning colcount");
    localStorage.setItem("colCount",6);
}

localStorage.setItem("rowCount", table.rows.length)
location.reload()
}

//add column
function addColumn(){
var table =  document.querySelector("table");

    var e =table.rows.length;
   //  for (let i=0; i<e; i++) { /* build the table */
//let row = document.querySelector("table").insertRow();
var l = document.querySelector("table").rows[0].cells.length


for (let j=l; j<l+1; j++) {
for (var i = 0, n = table.rows.length; i < n; i++) {
            //table.rows[r].insertCell(-1);
    let letter = String.fromCharCode("A".charCodeAt(0)+j-1);
    table.rows[i].insertCell(-1).innerHTML =  j&&i ? `<input id=${letter}${i} />`:i||letter;
    keys = Array.from(document.querySelectorAll("input")).map(i => i.id)
    localStorage.setItem('todoList', keys);
        }

}
localStorage.setItem("colCount", table.rows[0].cells.length)
location.reload()
}

// csv
function downloadCSV(csv, filename) {
var csvFile;
var downloadLink;

// CSV file
csvFile = new Blob([csv], {type: "text/csv"});

// Download link
downloadLink = document.createElement("a");

// File name
downloadLink.download = filename;

// Create a link to the file
downloadLink.href = window.URL.createObjectURL(csvFile);

// Hide download link
downloadLink.style.display = "none";

// Add the link to DOM
document.body.appendChild(downloadLink);

// Click download link
downloadLink.click();
}

function exportTableToCSV(filename) {
var csv = [];
var rows = document.querySelectorAll("table tr");
// console.log(rows);

// var row = [], cols = rows[0].querySelectorAll("td, th");
// for (var j = 0; j < cols.length; j++){ 
//     console.log(cols[j].innerHTML);
//     row.push(cols[j].innerHTML);
// }
// csv.push(row.join(","));
for (var i = 1; i < rows.length; i++) {
    //console.log(rows[1]);
    var row = [], cols = rows[i].querySelectorAll("input");

    // var testCol = rows[1].querySelectorAll("input");
    // console.log(testCol[1].value)
    // var test = testCols[1].querySelector("input");
    // console.log(test)
    // if(test != null){
    //     console.log(test.innerHTML);
    // }
    console.log(cols);
    for (var j = 0; j < cols.length; j++){
        console.log(cols[j].value);
        row.push(cols[j].value);
    }
    csv.push(row.join(","));        
}
console.log(csv);

// Download CSV file
downloadCSV(csv.join("\n"), filename);
}
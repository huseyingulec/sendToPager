const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const starBtn = document.getElementById("btn*")
const btn0 = document.getElementById("btn0")
const hashtagBtn = document.getElementById("btn#")
const resetBtn = document.getElementById("reset-btn")
const sendBtn = document.getElementById("send-btn")
const pagerOutput = document.getElementById("pager-output")
const phoneOutput = document.getElementById("phone-output")

const pagerFromLocalStorage = JSON.parse(localStorage.getItem("myPager") )

let myPager = [] // to store our pager numbers to the local storage

let myInput = "" // to store our input numbers 

if(pagerFromLocalStorage) { // if there is a data in the local storage, executes the function
    myPager = pagerFromLocalStorage // gets the data to the array from local storage
    let latestPager = myPager[myPager.length - 1] // gets the latest pager of the array 
    pagerOutput.innerHTML = latestPager // passes the latest pager to the pager output section
}

btn1.addEventListener("click", function(){ // when clicks numbers, it calls the click function
    click(1)
})
btn2.addEventListener("click", function(){
    click(2)
})
btn3.addEventListener("click", function(){
    click(3)
})
btn4.addEventListener("click", function(){
    click(4)
})
btn5.addEventListener("click", function(){
    click(5)
})
btn6.addEventListener("click", function(){
    click(6)
})
btn7.addEventListener("click", function(){
    click(7)
})
btn8.addEventListener("click", function(){
    click(8)
})
btn9.addEventListener("click", function(){
    click(9)
})
starBtn.addEventListener("click", function(){
    click("*")
})
btn0.addEventListener("click", function(){
    click(0)
})
hashtagBtn.addEventListener("click", function(){
    click("#")
})



function click(button) { // when called, adds the clicked button's number to the output
    myInput += button
    phoneOutput.innerHTML = myInput

}


sendBtn.addEventListener("click", function(){ // when clicked, executes the function
    
    pagerOutput.innerHTML = myInput // passes the inputs from phone to pager
    myPager.push(myInput) // saves inputs to the array
    localStorage.setItem("myPager", JSON.stringify(myPager)) // saves inputs to the localstorage
    reset() // cleans the phone output field
})


let clicks = 0

resetBtn.addEventListener("click", function() { // counts the clicks and execute different functions
  clicks++;
  setTimeout(function() {
    if (clicks === 1) {
       reset()


    } else if (clicks === 2 && window.confirm("Do you really want to delete all?")) { // shows a confirm windows to delete both outputs
        phoneOutput.innerHTML = "" // when confirmed, cleans all outputs and local storage
        pagerOutput.innerHTML = ""
        localStorage.clear()
        myPager = []
    }
    clicks = 0;
  }, 300); // Delay between clicks
});

function reset() {
    myInput = ""
    phoneOutput.innerHTML = "" // deletes only phone output

}



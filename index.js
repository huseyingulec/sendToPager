const resetBtn = document.getElementById("reset-btn")
const sendBtn = document.getElementById("send-btn")
const pagerOutput = document.getElementById("pager-output")
const phoneOutput = document.getElementById("phone-output")
const pagerFromLocalStorage = JSON.parse(localStorage.getItem("myPager") )

let myPager = [] // to store our pager numbers to the local storage
let myInput = "" // to store our input numbers 


document.addEventListener('click', event => {
    if (event.target.dataset.btn !== undefined) {
        if (event.target.dataset.btn == "send") {
        send() } 
        else {
            click( event.target.dataset.btn )
        }    }     })

if(pagerFromLocalStorage) { // if there is a data in the local storage, executes the function
    myPager = pagerFromLocalStorage // gets the data to the array from local storage
    let latestPager = myPager[myPager.length - 1] // gets the latest pager of the array 
    pagerOutput.innerHTML = latestPager // passes the latest pager to the pager output section
}

function click(button) { // when called, adds the clicked button's number to the output
    myInput += button
    phoneOutput.innerHTML = myInput

}

function send() { // sends the inputs to the pager
    pagerOutput.innerHTML = myInput // passes the inputs from phone to pager
    myPager.push(myInput) // saves inputs to the array
    localStorage.setItem("myPager", JSON.stringify(myPager)) // saves inputs to the localstorage
    myInput = ""
    phoneOutput.innerHTML = "" // deletes only phone output // cleans the phone output field
}

let clicks = 0

resetBtn.addEventListener("click", function() { // counts the clicks and execute different functions
  clicks++;
  setTimeout(function() {
    if (clicks === 1) {
        myInput = ""
        phoneOutput.innerHTML = "" // deletes only phone output


    } else if (clicks === 2 && window.confirm("Do you really want to delete all?")) { // shows a confirm windows to delete both outputs
        phoneOutput.innerHTML = "" // when confirmed, cleans all outputs and local storage
        pagerOutput.innerHTML = ""
        localStorage.clear()
        myPager = []
    }
    clicks = 0;
  }, 300); // Delay between clicks
});
    
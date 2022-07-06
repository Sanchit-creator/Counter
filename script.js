var countInterval;


function startCounter() {

    var number = parseInt(document.getElementById("input").value);

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 9999) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var currentNo = document.querySelectorAll(".output .numbers");
    var nextNo = document.querySelectorAll(".output .next");
    var count = 0;

    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo, 4);
    
    // Clears the previous interval that was running
    clearInterval(countInterval);

    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNo, nextNo, 3);
        count++;
    }, 1000);

}



function resetNumbers(currentNo, nextNo, end) {
    for (var i = 0; i < end; ++i) {
        currentNo[i].innerText = 0;
        nextNo[i].innerText = 1;
    }
}



function increaseCount(currentNo, nextNo, index) {

    let current = currentNo[index];
    let next = nextNo[index];

    if (current.innerText == 9) {
        increaseCount(currentNo, nextNo, index - 1);
    }

    next.classList.add("animate");

    setTimeout(function () {
        current.innerText = next.innerText;
        next.classList.remove("animate");
        next.innerText = parseInt(next.innerText) + 1;
        if(next.innerText > 9) {
            next.innerText = 0;
        }
    }, 500);

}

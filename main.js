// js start
var CloudImg = document.getElementsByClassName("img");

// declaring array with images
var arr = new Array();
arr[0] = new Image();
arr[0].src = "./Images/penguin0.png";
arr[1] = new Image();
arr[1].src = "./Images/penguin1.png";
arr[2] = new Image();
arr[2].src = "./Images/penguin2.png";
arr[3] = new Image();
arr[3].src = "./Images/penguin3.png";
arr[4] = new Image();
arr[4].src = "./Images/penguin4.png";
arr[5] = new Image();
arr[5].src = "./Images/penguin5.png";
arr[6] = new Image();
arr[6].src = "./Images/penguin6.png";
arr[7] = new Image();
arr[7].src = "./Images/penguin7.png";
arr[8] = new Image();
arr[8].src = "./Images/yeti.png";

// function for shuffling array elements
function shuffle(array) {

    // initializing array length to a variable and variable declaration
    var currentIndex = array.length,
        temp, randomIndex;

    // condition checking
    while (0 !== currentIndex) {

        // random index generation
        randomIndex = Math.floor(Math.random() * currentIndex);

        // decrementing arrayLength 
        currentIndex -= 1;

        // swapping array indexes
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    // returning the swapped array
    return array;
}

// initializing count variable
var count = 0;

// assigning array value to c
var YetiImg = arr[8].src;

// function calling
shuffle(arr);

// conditional looping for event calling
for (let i = 0; i < CloudImg.length; i++) {
    CloudImg[i].addEventListener("click", function() {
        CloudImg[i].src = arr[i].src;
        count += 1;

        // condition checking
        if (CloudImg[i].src == YetiImg) {
            window.location.href = "index1.html";
        }
        this.addEventListener('mouseover', function() {
            this.style.backgroundImage = "url()";
        })
    });
}
var elDice = document.getElementById('dice');
var elRollButton = document.getElementById('roll');
var elScore = document.getElementById('score'); // Select the score span

elRollButton.onclick = function () {
    rollDice();
};

function rollDice() {
    elRollButton.disabled = true; // Disable the button while rolling

    var rollInterval = setInterval(function () {
        var randomSide = Math.floor(Math.random() * 6) + 1;
        showSide(randomSide);
    }, 100);

    setTimeout(function () {
        clearInterval(rollInterval);
        elRollButton.disabled = false; // Re-enable the button
        var rolledNumber = parseInt(elDice.getAttribute('data-side')); // Get the rolled number from the data-side attribute
        elScore.textContent = rolledNumber; // Display the rolled number in the "You score:" text
    }, 1000);
}

function showSide(side) {
    // Hide all sides
    for (var i = 1; i <= 6; i++) {
        elDice.classList.remove('show-' + i);
    }

    // Show the specified side
    elDice.classList.add('show-' + side);
    elDice.setAttribute('data-side', side); // Set the data-side attribute with the rolled number
}

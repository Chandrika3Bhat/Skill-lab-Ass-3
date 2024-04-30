document.addEventListener("DOMContentLoaded", function() {
    const decrementButtons = document.querySelectorAll(".decrement");
    const incrementButtons = document.querySelectorAll(".increment");

    decrementButtons.forEach(button => {
        button.addEventListener("click", function() {
            const input = button.nextElementSibling;
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
            }
        });
    });

    incrementButtons.forEach(button => {
        button.addEventListener("click", function() {
            const input = button.previousElementSibling;
            let value = parseInt(input.value);
            input.value = value + 1;
        });
    });
});

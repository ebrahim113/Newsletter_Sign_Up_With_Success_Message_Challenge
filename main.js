const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    let value = Object.values(Object.fromEntries(new FormData(form)));
    if (!/\w+@\w+.com/.test(value)) {
        e.preventDefault();
        let input = document.querySelector("form input");
        input.style.backgroundColor = "hsl(4, 100%, 90%)";
        input.style.color = "var(--red)";
        input.style.fontWeight = "700";
        input.style.border = "2px solid var(--red)";
        document.querySelector("form p").style.display = "block";
    } else {
        form.parentElement.parentElement.remove();
        let success = document.querySelector(".success");
        let p = success.querySelector("p");
        p.innerHTML = `A confirmation email has been sent to ${value}.Please open it and click the button inside to confirm your subscription`;
        success.style.display = "block";
        success.querySelector("button").addEventListener('click', (e) => e.target.parentElement.remove());
    }
})



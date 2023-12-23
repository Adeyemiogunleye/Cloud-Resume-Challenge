const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://nu5ccyzptyz3z5mvwu6rlt744u0qqylc.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Number of Views : ${data}`;
}

updateCounter();

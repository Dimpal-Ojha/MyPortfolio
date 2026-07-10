function toggleMode() {

    document.body.classList.toggle("dark");

    const btn = document.querySelector(".theme-btn");

    if(document.body.classList.contains("dark")){
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
}
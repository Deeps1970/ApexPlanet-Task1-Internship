// ------------------- Login Page Script -------------------
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let inputUser = document.getElementById("inputUser").value;
    let inputPass = document.getElementById("inputPass").value;
    let formMessage = document.getElementById("formMessage");

    if (inputUser.trim() === "" || inputPass.trim() === "") {
      formMessage.textContent = "Please fill in all fields!";
      formMessage.style.color = "red";
    } else {
      alert(`Welcome, ${inputUser}!`);
      formMessage.textContent = `Welcome, ${inputUser}!`;
    }
});
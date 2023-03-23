document.getElementById("submit-btn").onclick = function(){
    let password = document.getElementById("password").value

    if(password == "15865")
      window.location = "http://127.0.0.1:5500/ggr/rainmeter.html";

    else 
    alert("Incorrect!");
}
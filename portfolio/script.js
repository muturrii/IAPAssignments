function validateInput(){
    let f = document.forms["Form1"]
    let x = f["userName"].value
    let y = f["userAge"].value
    let z =f["userPhone"].value
    let a = f["message"].value
    try {
        z = Number(z)
        if(isNaN(z)) throw "Not a Number"
    } catch (err) {
        alert("Please enter a Valid Phone Number")
    }

    if (x == ""){
        alert("Name must be filled out before submission!")
        return false
    }
    if (y < 0 || y > 105 || y == NaN){
        alert("Please enter a valid age!")
        return false
    }
    if (z.toString().length != 12){
        alert("Please Enter a Valid Phone Number")
        return false
    }
    if (a == ""){
        alert("Please enter a message or question.")
        return false
    }
}
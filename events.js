function displayDate(){
    document.getElementById("date").innerHTML=Date()

    setTimeout(()=>{
        displayDate()
    },1000)
}
// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount=localStorage.getItem('amount');
document.getElementById('wallet').innerText=amount;

let X=JSON.parse(localStorage.getItem("movie")) || [];
document.getElementById('movie').innerHTML=null;
    let image=document.createElement('img');
    image.src=X.Poster;
    let name=document.createElement('p')
    name.innerText=X.Title;
    document.getElementById('movie').append(image,name);
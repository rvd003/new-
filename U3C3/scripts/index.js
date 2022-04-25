// Store the wallet amount to your local storage with key "amount"
let amount=localStorage.getItem('amount') || 0

document.getElementById('add_to_wallet').addEventListener('click',addmoney);

function addmoney(){
    A=document.getElementById('amount').value;
    console.log(A);
    amount=Number(amount)+Number(A);
    localStorage.setItem('amount',amount);
    console.log(amount);
    document.getElementById('wallet').innerText=amount;
}




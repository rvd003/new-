// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount=localStorage.getItem('amount');
document.getElementById('wallet').innerText=amount;

let movies=document.getElementById("movies");
let id;

    async function searchMovies(){
   
        try{
            const query=document.getElementById("search").value;

            const res= await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`)
            
            let data=await res.json();

            const movie=data.Search

           return movie;

        }
        catch(err){
            console.log("err",err);

        }
    }
   
    function appendMovies(data) {

     
       
     movies.innerHTML=null
     data.forEach(function(el){
       let box=document.createElement('div');
       
         let p=document.createElement("p");
         let image=document.createElement("img")
         image.src=el.Poster;
         p.innerText=el.Title

         var btn = document.createElement("button");
    btn.innerText = "Book now";
    btn.class="book_now"
    btn.addEventListener("click", function () {
      booknow(el);
    });

         
         box.append(image,p,btn);
         movies.append(box)
     })

    }
    function booknow(el) {
    console.log(el);
    //  bookData.push(el);
     localStorage.setItem("movie", JSON.stringify(el));
    window.location.href="checkout.html"
  }

    async function main(){
        let data =await searchMovies();

        if (data===undefined){
         return false;
     }
     appendMovies(data)
    }
    //debouncing
    function debounce(func,delay){
        if(id){
            clearTimeout(id);
        }
        id=setTimeout(function(){
            func();
        },delay);
    }
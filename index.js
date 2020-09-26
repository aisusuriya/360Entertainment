let movies=[
    {
        name:"Avengers",
        description:"Action Movie",
        image:"image1.jpg"
},
{
    name:"Boys over Flowers",
    description:"Comedy Drama",
    image:"image5.jpg"
    
},
{
    name:"Annihilation",
    description:"Horror Movie",
    image:"image3.jpg"
},
{
    name:"Mom",
    description:"Emotional Drama",
    image:"image4.jpg"
    
},
{
    
    name:"Home Alone",
    description:"Fantastic Movie",
    image:"image2.jpg"
    
},
{
    
    name:"Old Guard",
    description:"Crime Thriller",
    image:"image6.jpg"
    
},
{
    
    name:"Wonder Woman",
    description:"Power of Woman",
    image:"image7.jpg"
    
},
{
    
    name:"Dead Pool",
    description:"Superhero Film",
    image:"image8.jpg"
    
},
{
    
    name:"Money Heist",
    description:"Addicted Drama",
    image:"image9.jpg"
    
},
{
    
    name:"My GF alien",
    description:"Alien Drama",
    image:"image10.jpg"
    
},
{
    
    name:"Heirs",
    description:"Korean Drama",
    image:"image11.jpg"
    
},
{
    
    name:"Black Panther",
    description:"Adventures Film",
    image:"image12.jpg"
    
},
{
    
    name:"The Dark Knight",
    description:"Batman Movie",
    image:"image13.jpg"
    
},
{
    
    name:"Inception",
    description:"Sci-Fi",
    image:"image14.jpg"
    
},
{
    
    name:"Jurassic Park",
    description:"Adventurous",
    image:"image15.jpg"
    
},
{
    
    name:"Avatar",
    description:"Human Alien",
    image:"image16.jpg"
    
},
{
    
    name:"Pormethus",
    description:"Mythology",
    image:"image17.jpg"
    
},
{
    
    name:"A Space Odessey",
    description:"Space Movie",
    image:"image18.jpg"
    
},
{
    
    name:"Wall-E",
    description:"Animated Movie",
    image:"image19.jpg"
    
},
{
    
    name:"Contact",
    description:"Sci-Fi",
    image:"image20.jpg"
    
},
];

function displayMovies(movieArray){
    let movieString="";
    movieArray.forEach(function(movie){
        let {image,name,description}=movie;
        movieString+=`<div class="actionimages">
        <img src="genreimages/${image}" alt="" class="actionimg"/>
        <div class="description" style="padding-right: 60px;">
          <p>${name}</p>
          <p>${description}</p>
        </div>  
      </div>`

    });
    document.getElementById("movies").innerHTML=movieString;

}
displayMovies(movies);


function searchMovies(searchValue){
    let searchItems=movies.filter(function(movie){
        let searchString=movie.name+" "+movie.description;
        let success=searchString.toUpperCase().indexOf(searchValue.toUpperCase())!= -1;
        if(success==1){
            return success;
        }
    });
    displayMovies(searchItems);
}
function actionMovies(event){
    event.preventDefault();
    let actionItems=movies.filter(function(movie){
        if(movie.name=="Avengers"){
            return movie.name;
        }
        if(movie.name=="Annihilation"){
            return movie.name;
        }
        if(movie.name=="Old Guard"){
            return movie.name;
        }
        if(movie.name=="Wonder Woman"){
            return movie.name;
        }
        if(movie.name=="Wall-E"){
            return movie.name;
        }
        if(movie.name=="Black Panther"){
            return movie.name;
        }
        if(movie.name=="Pormethus"){
            return movie.name;
        }
    });
    displayMovies(actionItems);
}
function dramaMovies(event){
    event.preventDefault();
    let dramaItems=movies.filter(function(movie){
        if(movie.name=="Boys over Flowers"){
            return movie.name;
        }
        if(movie.name=="Mom"){
            return movie.name;
        }
        if(movie.name=="Home Alone"){
            return movie.name;
        }
        if(movie.name=="Heirs"){
            return movie.name;
        }
        if(movie.name=="Money Heist"){
            return movie.name;
        }
        if(movie.name=="My GF alien"){
            return movie.name;
        }
    });
    displayMovies(dramaItems);
}
function scifiMovies(event){
    event.preventDefault();
    let scifiItems=movies.filter(function(movie){
        if(movie.name=="Dead Pool"){
            return movie.name;
        }
        if(movie.name=="Avatar"){
            return movie.name;
        }
        if(movie.name=="A Space Odessey"){
            return movie.name;
        }
        if(movie.name=="Contact"){
            return movie.name;
        }
        if(movie.name=="Inception"){
            return movie.name;
        }

    });
    displayMovies(scifiItems);
}

function allMovies(event){
    event.preventDefault();
    let allItems=movies.filter(function(movie){
        if(movie.name=="Avengers"){
            return movie.name;
        }
        if(movie.name=="Boys over Flowers"){
            return movie.name;
        }
        if(movie.name=="Annihilation"){
            return movie.name;
        }
        if(movie.name=="Mom"){
            return movie.name;
        }
        if(movie.name=="Home Alone"){
            return movie.name;
        }
        if(movie.name=="Old Guard"){
            return movie.name;
        }
        if(movie.name=="Wonder Woman"){
            return movie.name;
        }
        if(movie.name=="Dead Pool"){
            return movie.name;
        }
        if(movie.name=="Heirs"){
            return movie.name;
        }
        if(movie.name=="Money Heist"){
            return movie.name;
        }
        if(movie.name=="My GF alien"){
            return movie.name;
        }
        if(movie.name=="Black Panther"){
            return movie.name;
        }
        if(movie.name=="The Dark Knight"){
            return movie.name;
        }
        if(movie.name=="Avatar"){
            return movie.name;
        }
        if(movie.name=="Pormethus"){
            return movie.name;
        }
        if(movie.name=="A Space Odessey"){
            return movie.name;
        }
        if(movie.name=="Wall-E"){
            return movie.name;
        }
        if(movie.name=="Contact"){
            return movie.name;
        }
    });
    displayMovies(allItems);
}













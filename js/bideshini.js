const loadUser = () =>{
    fetch("https://randomuser.me/api/?gender=female")
    .then(r => r.json())
    .then(data => displayUser(data))
}
const displayUser = user => {
    const genderTag = document.getElementById("gender");
    genderTag.innerHTML = user.results[0].gender;
    const name = document.getElementById("name");
    name.innerHTML = user.results[0].name.title +' '+ user.results[0].name.first + ' '+ user.results[0].name.last;
    const location = document.getElementById("location");
    location.innerHTML = user.results[0].location.city +' '+ user.results[0].location.state +' '+ user.results[0].location.country;
    const postCode = document.getElementById("postcode");
    postCode.innerHTML = user.results[0].location.postcode;
    const img = document.getElementById("img");
    img.src = user.results[0].picture.large
    console.log(user.results[0].picture.large);
}

loadUser();
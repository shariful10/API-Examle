const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(r => r.json())
    .then(data => displayCountries(data))
}

const displayCountries = contries => {
    const allCountries = document.getElementById("all-countries");
    contries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country")
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
        <button onclick="loadCountryDetails('${country.cca2}')" class="btn btn-danger">Details</button>
        `;
        allCountries.appendChild(countryDiv);
        console.log(country.cca2);
    });
}
const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url);
    fetch(url)
    .then(r => r.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = country => {
    console.log(country.flags.png);
    const detailContainer = document.getElementById("country-detail");
    detailContainer.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    
    `;
}
loadCountries();
// {/* <img src=""${}></img> */}
const apikey ='5136a426d77586d3163a7ba1ff25b56b';

document.getElementById('weatherForm').addEventListener('submit', function(event){
event.preventDefault();

const city = document.getElementById('cityInput').ariaValueMax.trim();
if(city === ''){
    alert('Coloque uma cidade.');
    return;
}

const apiUlr = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&unit-metric&lang=pt_br`;

fetch(apiUlr)
    .then(response => {
        if(!response.ok){
            throw new Error('Cidade nao encontrada')
        }
        return response.json();
    })
    .then(data=> {
        const location = data.name +', ' + data.sys.country;
        const temperatura = data.main.temp + '°C';
        const condition = data.weather[0].descrition;

        const weatherCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${location}</h5>
                        <p class="card-text">${temperatura}</p>
                        <p class="card-text">${condition}</p>
                        <p class="card-text">Umidade: ${data.main.humidity}%</p>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('weatherCards').innerHTML = weatherCard;
                    
    })
    .catch(error =>{
        alert(error.menssage);
        HTMLFormControlsCollection.error('Erro ao buscar dados:', error);

    })
});
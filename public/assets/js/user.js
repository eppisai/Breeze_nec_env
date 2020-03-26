console.log('so this is client side javascript')
const aqi = document.querySelector('#aqi1')
const city = document.querySelector('#city1')
const status = document.querySelector('#status')
const lox = document.querySelector('#lock')
const box = document.querySelector('#bock')
const hox = document.querySelector('#hock')



function geoFindMe() {

   

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch('http://localhost:3000/pollution?lattitude='+latitude+'&longitude='+longitude).then((response)=>{
        response.json().then((data)=>{
        
        if(data.error){
            status.textContent = 'Error'
            aqi.textContent = 'sorry'
            city.textContent = 'occured'
        }else{
            if(data.aqius>0 && data.aqius<=50){
                status.textContent = 'SAFE'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#2ecc71,#16a085)"
                box.style.background = "linear-gradient(#2ecc71,#16a085)"
                hox.style.background = "linear-gradient(#2ecc71,#16a085)"
                
            }else if(data.aqius>50 && data.aqius<=100){
                status.textContent = 'Moderate'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#f9ca24,#f6e58d)"
                box.style.background = "linear-gradient(#f9ca24,#f6e58d)"
                hox.style.background = "linear-gradient(#f9ca24,#f6e58d)"

            }else if(data.aqius>100 && data.aqius<=150){
                status.textContent = 'Not safe'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#f1c40f,#f39c12)"
                box.style.background = "linear-gradient(#f1c40f,#f39c12)"
                hox.style.background = "linear-gradient(#f1c40f,#f39c12)"

            }else if(data.aqius>150 && data.aqius<=200){
                status.textContent = 'UN-HEALTHY!!'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#c0392b,#e74c3c)"
                box.style.background = "linear-gradient(#c0392b,#e74c3c)"
                hox.style.background = "linear-gradient(#c0392b,#e74c3c)"

            }else if(data.aqius>200 && data.aqius<=300){
                status.textContent = 'DANGEROUS!!'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#8e44ad,#9b59b6)"
                box.style.background = "linear-gradient(#8e44ad,#9b59b6)"
                hox.style.background = "linear-gradient(#8e44ad,#9b59b6)"

            }else if(data.aqius>300 && data.aqius<=500){
                status.textContent = 'HAZARDOUS'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#6F1E51,#833471)"
                box.style.background = "linear-gradient(#6F1E51,#833471)"
                hox.style.background = "linear-gradient(#6F1E51,#833471)"

            }

        }
    })
})

           
    }

    function error() {
            
        }

        if (!navigator.geolocation) {
            status.textContent = 'Error'
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }

}

    document.querySelector('.navigation').addEventListener('click', geoFindMe);

    




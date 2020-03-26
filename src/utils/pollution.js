const request = require('request')
 

const pollution = (lattitude,longitude,callback )=>{
    const url = 'https://api.airvisual.com/v2/nearest_city?lat='+lattitude+'&lon='+longitude+'&key=c3f00e90-6e84-4c7f-be3a-0299fa4f4dc0'

    request({ url: url, json: true}, (error,response) =>{
        if(error){
            callback('sorry no newtwork', undefined)
        }else if(response.body.error){
            callback('sorry could not find the locatio',undefined)
        }else{
            callback(undefined ,response.body.data.current.pollution.aqius,response.body.data.city)
        }
    })

}




module.exports = pollution


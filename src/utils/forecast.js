const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/28c03248c760c75a2d7891b23c861c6f/'+ lat +',' + long + '?units=si'

    request({ url, json: true}, (error, { body } = {}) => {
        if (error) {
           callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
           callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees outside. There is a ${body.currently.precipProbability}% of rain.`)
        }
    }
)}

module.exports = forecast
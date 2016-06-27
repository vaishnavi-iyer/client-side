var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  var data = JSON.parse(data.body)
  xhr.get(endpoint+ '/'+ data[0].id, function(err, data){
    if (err){
      console.log(err)
    }
  // Replace 'Space' below with the response
    var newdata = JSON.parse(data.body)
    var target = document.getElementsByTagName('main')[0]
    target.innerHTML += greeting({name: data.body[0]})

  })
})

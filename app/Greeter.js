/**
 * Created by beijingweb on 2017/7/25.
 */
var config = require('./config.json');

module.exports = function () {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!Maginacp!";
  
  var p = document.createElement('p');
  p.textContent = config.greetText;
  greet.appendChild(p);
  
  var span = document.createElement('strong');
  span.textContent = config.greetTextspan;
  p.appendChild(span);
  
  
  return greet;
};
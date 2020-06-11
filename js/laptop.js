document.getElementById('button');
function getDiningOptions(){
var xhr = new XMLHttpRequest();
var url = '../json/laptop.json';
xhr.open('GET',url,true)
xhr.onload = function()
{
   if(this.status == 200){
      var products = JSON.parse(this.responseText);
      var output = '';
      for (var i in products){
         output +=
         '<div class="item" >'+
           '<div class="specifications">'+
              '<div src=" ' + products[i].image + '" width="230" height="300">'+
             '<div class ="info">' +
                 '<h1>' + products[i].name+'</h1>' +
             '</div>' +
              '<ul>' +
              '<li>' + products[i].specifications + '</li>' +
              '</ul>' +
          '</div>' +
             '<div class="btn">' +
                '<a href ="' + products[i].url + '">Buy Now</a>' +
             '</div>' +
         '</div>';
         
      }
        document.getElementsByClassName('product').innerHTML = output;
    }
}
 xhr.send();
}
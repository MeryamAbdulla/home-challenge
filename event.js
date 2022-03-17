function buttonOne() {
    const x = document.getElementById("main");
    const y = x.getElementsByTagName("p");
  
  document.getElementById("demo").innerHTML = 
  'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
  }

function buttonTwo() {
    const x = document.getElementById("main");
    const y = x.getElementsByTagName("p");
  
  document.getElementById("demo").innerHTML = 
  'The first paragraph (index 0) inside "main" is: ' + y[1].innerHTML;
  }

  var divOne = document.getElementById('main');
  divOne.style.display='none';
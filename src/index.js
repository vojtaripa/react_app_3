//NEED THIS IN REACT:
import React from 'react';
import ReactDOM from 'react-dom';

//Importing Car Component from another file
import Garage from './CarFile.js';

//first element
const myfirstelement = (

//NEED DIV ALL AROUND all elements
<div>
	<h1>Hello React! </h1>
	<h2>Vojta 08-8-2021</h2>
	<Garage/>
</div>
);
	
//not used... const secondelement = <h2>second element</h2>

//Renders the DOM:
ReactDOM.render(myfirstelement, document.getElementById('root'));
//ReactDOM.render(secondelement, document.getElementById('root'));


/*

//-------------------------------------------------------------------------------------------

//Car Class
class Car extends React.Component {
  
  //CONSTRUCTS THE OBJECT:
  constructor(name) 
  {
    this.brand = name;
  }
  
  //PRESENT THE OBJECT:
  present() 
  {
    return 'I have a ' + this.brand;
  }
  
  // render()
  
}

//exentding Car Class
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}


//initiating Ford as a Car
//mycar = new Car("Ford");
//mycar.present();

// CAR 2
//mycar2 = new Model("Ford", "Mustang");
//mycar2.show();


ReactDOM.render(<Model />, document.getElementById('root'));


//Arrow function:

//hello = () => "Hello World!";
//ReactDOM.render(hello, document.getElementById('root'));


//-------------------------------------------------------------------------------------------


class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

//myheader = new Header();
ReactDOM.render(<Header />, document.getElementById('root'));


//The window object calls the function:
//window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
//document.getElementById("btn").addEventListener("click", myheader.changeColor);



//JSX -------------------------------------------------------------------------------------------
// with JSX
const myelement3 = <h1>I Love JSX!</h1>;

ReactDOM.render(myelement3, document.getElementById('root'));


// no JSX
const myelement4 = React.createElement('h1', {}, 'I do not use JSX!');

ReactDOM.render(myelement4, document.getElementById('root'));

*/
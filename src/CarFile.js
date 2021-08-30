import React from 'react';
//import ReactDOM from 'react-dom';
import './vojta_style.css';

//CLASS 1
class Car extends React.Component {
  
  //#1 need constructor method so it functions better / faster, and pass props to the constructor via super()
  constructor(props) {
    super(props);
	this.state = 
	{
      brand: "Ford",
      model: "Mustang",
      color: "red (OG)",
	  getDerivedStateFromPropsColor: "MAROON",
	  favcolor: "black (Fav)",
      year: 1964,
	  show: true
    };
  }
  
  //function change color to blue
  changeColor = () => {
    this.setState({color: "BLUE"});
  }
  //function to delete
  delPassanger = () => {
    this.setState({show: false});
  }
  //function 3 - stop car
   stopCarA = (a, b) => {
    alert(a);
  }
  //function 3 - stop car
   stopCarB = (a, b) => {
    alert(b.type);
  }
  

  
    //#2 method (Optional) for mounting
	// also used in (UPDATING 1) 
  static getDerivedStateFromProps(props, state) 
  {
    return {getDerivedStateFromPropsColor: props.color };
  }
  
   //(UPDATING 2) DEFAULT IS TRUE SO I DONT THINK I NEED IT
    shouldComponentUpdate() 
	{
		return false;
	}
  
    //#4 method for mounting - The componentDidMount() method is called after the component is rendered. 
	// (still need to be placed before render function in script though)
	//CHANGES IN 3 SECONDS after page loads
   componentDidMount() 
   {
		setTimeout(() => {
		  this.setState({favcolor: "GOLD (New Fav)"})
		}, 3000)
   }
	
   //before update
   //(UPDATING 4) 
   getSnapshotBeforeUpdate(prevProps, prevState) 
   {
    document.getElementById("before").innerHTML =
    "Before the update, the favorite was " + prevState.favcolor;
   }
	 
   //after update	 
   //(UPDATING 5) 
   componentDidUpdate() 
   {
		document.getElementById("after").innerHTML =
		"The updated favorite is " + this.state.favcolor;
   }
	
	
	
  
  
  //#3 (REQUIRED) - method for mounting - NOW need to render the Object
  //Button updates the STATE not the PROP
  // also used in (UPDATING 3) 
  render() 
  {
	 //for CSS: 
/*	 const mystyle = {
      //add css here
    };*/
	
	
	let mypassanger;
    if (this.state.show) 
	{
      mypassanger = <Passanger />;
    };
	
	
	  
    return (
		<div>
	
		    			
                <tr>
					<th>Hi, I am a Car Component from another file! </th>
					<th>My Brand: </th>
					<th>My Model: </th>
					<th>My Color: </th>
					<th>My FavColor (componentDidMount / timer - will change in 3 seconds ):</th>
					<th>My getDerivedStateFromPropsColor:</th>
					<th>Before Update</th>
					<th>After Update</th>
					<th>Comments</th>
					<th>Passanger</th>
				</tr>
				
				<tr>
					<td>(CarFile.js)</td>
					<td>{this.props.brand}</td>
					<td>{this.props.model}</td>
					<td> props-{this.props.color} state- {this.state.color}</td>
					<td> props-{this.props.favcolor} state- {this.state.favcolor} </td>
					<td> props-{this.props.getDerivedStateFromPropsColor} state- {this.state.getDerivedStateFromPropsColor}</td>
					<td><div id='before'></div></td>
					<td><div id='after'></div></td>
					<td></td>
					<td>	{mypassanger} </td>
				</tr>


			
			<button
			  type="button"
			  onClick={this.changeColor}
			  >Change color state to blue
		   </button>
		   
		   	<button
			  type="button"
			  onClick={this.delPassanger}
			  >Delete Header
		   </button>
		   
		   <button onClick={() => this.stopCarA("Car is now Stopped")}>Click to STOP car (A)</button>
		   <button onClick={(ev) => this.stopCarB("Car is now Stopped", ev)}>Click to STOP car (B)</button>
      
		</div>);
  }
  
  
  

  
}

// CLASS 2
//<!--extend Car class and made a brand:-->
class Garage extends React.Component 
{
   
   constructor(props) 
   {
    super(props);
    this.state = { username: '' };
   }
   
   //WHEN FORM GETS SUBMITTED
   mySubmitHandler = (event) => {
	// prevents the form from actually being submitted!
    event.preventDefault(); 
    alert("You are submitting " + this.state.username);
  }
   
   //FORM - when username changes
   myChangeHandler = (event) => 
   {
    this.setState({username: event.target.value});
  }
  
    //Try IT (TODO)
   TryIT = () => {
    alert("Trying inputs given");
  }
  //PreFill (WORKS)
   PreFill = () => {
    //event.preventDefault(); 
	
	alert("Pre-filling form");
	
	
	//OR: document.forms["myForm"]["fname"].value;
    document.getElementsByName("myusername")[0].value = "vojtaripa";
    document.getElementsByName("password1")[0].value = "test123";
    document.getElementsByName("password2")[0].value = "test123";
    document.getElementsByName("verify")[0].value = "X34gln";
    document.getElementsByName("first_name")[0].value = "vojta";
    document.getElementsByName("last_name")[0].value = "ripa";
    document.getElementsByName("email")[0].value = "vojtaripa@gmail.com";
    document.getElementsByName("age")[0].value = "28";
    document.getElementsByName("webpage")[0].value = "http://stackoverflow.com";
    document.getElementsByName("About")[0].value = "blahblah";
  }
  
  
  
  //RENDERS ALL COMPONENTS
  render() 
  {
    
	  // {/* only returns H1 if user typed something in*/}
	     let header = '';
			if (this.state.username) 
			{
			  header = <h1 style={{color: "red",backgroundColor: "lightblue"}}>Hello {this.state.username}</h1>;
			} 
			else 
			{
			  header = '';
			}
	
	
	//RETURNS ALL ELEMENTS ECT...
	return (
      <div>
	  
	      
		 {/* NOW FORM */}
		 <h1>Form</h1>
		 <table>
		
		 <tr>
		 <td>
		 <form onSubmit={this.mySubmitHandler} id="frm1">
		  
		{/*/   /class -> className={"icon", "fa", "fa-user"}   */}
			<div>
			   <label style={{color: "red", fontSize: "25px"}}>Choose Username        :</label>
			   <input type="text" oninput="getValues()" class="text" name="myusername" pattern=".{6,}" placeholder="username" title="Must be at least 6 characters" required />
			</div>
	
			<div>
			   <label style={{color: "red", fontSize: "25px"}}>Create Password   (Min. 6 characters):</label>
			   <input oninput="getValues()" type="password" pattern=".{6,}" class="text" name="password1" placeholder="password" title="Must be at least 6 characters" required/> 
			</div>
			
			<div >
			   <label style={{color: "red", fontSize: "25px"}}>Re-type password:</label>
			   <input oninput="getValues()" type="password" pattern=".{6,}" class="text" name="password2" placeholder="password" title="Must be at least 6 characters" required/>
			
			</div>
			
			<div >
			   <label for="verify" style={{color: "red", fontSize: "25px"}}>Human Verification:</label>
			   {/*<img src="captcha.php" alt="Verification pass-phrase" /> */}
			   <input oninput="getValues()" type="text" id="verify" name="verify" value="" required placeholder="Enter whats above."/> 
			</div>
			
			<div >
			   <label style={{color: "red", fontSize: "25px"}}>First Name:</label>
			   <input oninput="getValues()" type="text" class="text" name="first_name" placeholder="Usain" pattern=".{3,}" title="At Least 3 letters long." required/>
			</div>
		
			<div >
			   <label style={{color: "red", fontSize: "25px"}}>Last Name:</label>
			   <input oninput="getValues()" type="text" class="text" name="last_name" placeholder="Bolt" pattern=".{3,}" title="At Least 3 letters long." required/>
			</div>
	
			<div >
			   <label> Email:</label>
			   <input oninput="getValues()" type="email" class="text" name="email" placeholder="devnull@sonic.com"/>
			</div>
			
			<div class="4u 12u$(small)">
			   <label style={{color: "red", fontSize: "25px"}}>Gender:</label>    
			   <input type="radio" id="m" name="gender" value='m' checked/>
			   <label for="m">Male</label>
			   <input type="radio" id="f" name="gender" value='f'/>
			   <label for="f">Female</label>
			</div>
		
			<div >   
			   <label style={{color: "red", fontSize: "25px"}}> Age:</label>                  
			   <input oninput="getValues()" type="text"  pattern="[0-9]{1,2}" min="1" max="99" name="age" placeholder="0" title="Numbers between 1-99 only." required/>
			</div>
	
			<div >
			   <label> Link to your Strava / webpage:</label>
			   <input oninput="getValues()" type="text" pattern="https?://.+" name="webpage" placeholder="https://www.strava.com"/> 
			</div>
	
			<div >
			   <label>About you / Bio:</label>
			   <textarea  oninput="getValues()" rows="8" cols="75" name="About" placeholder="About you..."> </textarea>
			</div>
	
			<input type="submit" value="Submit" id="Submit" disabled/>
			<button onClick={() => this.TryIT()} >Try it</button>
			<button onClick={() => this.PreFill()} >Prefill</button>
			<input type="reset" value="Clear"/>
				
		  
		  
		    {/* OLD CODE*/}
		 {header}
		  <p>Enter your name:</p>
		  
		  <input
			type='text'
			onChange={this.myChangeHandler}
		  />
		  
		  <input
			type='submit'
		  />
		  
		 </form>
		 
		 
		 
		 
		 <p style={{color: "red"}} id="error"></p>
			<p>Click -Try it- to display the value of each element in the form.</p>
			<p id="demo"></p>

		 
		 
		 
		 </td>
		  </tr>
		 </table>
		  
		  
		  {/* Title*/}
		  <h1>Who lives in my garage?</h1>
		 
 	
	     {/* Car 1 */} 
		  <table>
			  <tr>
			     <td>Car 1</td>	
				 
				 <td><Car /></td>
				 <td><h2>no mods car:</h2></td>
		 	 </tr>
		  </table>


	    {/* Car 2 */}
		 <table>
			<tr>
				 <td>Car 2</td>	
				 
				 <td> <Car brand="Ford" model="Focus" color="teal"/></td>
				 <td> <h2>defined brand model color:(teal)</h2></td>
		   </tr>
		 </table>
		  
		
		{/* Car 3 */}
		<table>
		   <tr>	
			  <td>Car 3</td>			   
			  
			  <td><Car brand="GMC"  model="Pickup"color="yellow"/></td>
			  <td><h2>defined brand model color(yellow):</h2></td>
		   </tr>
		</table>
		
		
		{/* Car 4 */}
		<table>
		   <tr>	
              <td>Car 4</td>		   
			  
			  <td><Car favcol="white"/></td>
			  <td><h2>defined favcolor:(white)</h2></td>
		   </tr>	
		</table>		   
		
	
      </div>
    );
  }
}

//CLASS 3 (passanger)
class Passanger extends React.Component {
  componentWillUnmount() 
  {
    //alert("The component named Header is about to be unmounted.");
  }
  render() 
  {
    return (
      <div>I'm a passanger</div>
    );
  }
}


//ReactDOM.render(<Garage />, document.getElementById('root'));

export default Garage; // you can also return CAR / Garage
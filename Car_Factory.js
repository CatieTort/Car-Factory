
class CarFactory {
	constructor(year, model, make, color){
		this.year = year,
		this.model = model,
		this.make = make,
		this.color = color,
		this.speed = 0
	}

	// Add a function to the object that is being returned that concatenates the make, year and color if they are entered into the input fields.

	carInfo(){
		return "Your" + " " + this.color + " " + this.year + " " + this.model + " " + this.make + " " + "is ready for a test drive!";
	}

	//function that returns current speed
	getSpeed(){
		return this.speed;
	}
	//increases the speed by 10 but does not return anything
	accelerate(){
		this.speed += 10;
	}

	brake(){
		//Decreases the speed by 1 if the current speed is less than 7
		if ((this.speed === 0) || (this.speed < 0)){
		//if the current speed is greater than 7 the speed will be decreased by 7
			}else if (this.speed > 7){
				this.speed -= 7;
			}else if (this.speed < 7){
				this.speed --;
			}
		//it does not return anything
	}
}

// carType gets the values from the input fields and sends them to the class constructor
// if the value of make, model or color =  " " or empty then give an error
// all values cannot be blank
// model yr must be a length of 4 & only numbers

	function makeCar(){
		carType();
	}

	function checkDetails(){
		var carValues = Object.values(myCar);
		console.log(carValues);
		var errorMsg = ["Please enter a year",
		"Please enter a model","Please enter a make", "Please enter a color"];

		// BUG: function works for year but nothing else
		carValues.map((index) => {
			if(carValues[index] == ""){
				return document.getElementById("display-err").innerHTML = errorMsg[index];
			}else {
				return document.getElementById("display").innerHTML = myCar.carInfo();
			}
		})
		document.getElementById("form").reset();
	}

	function carType(){
		var year = document.getElementById("year").value;
		var model = document.getElementById("model").value;
		var make = document.getElementById("brand").value;
		var color = document.getElementById("paint").value;

		myCar = new CarFactory(year, model, make, color);

		 if(myCar !== undefined){checkDetails(myCar);}

		return myCar
	}

	//loop that accelerates the car to 70
	function goFast(){
		myCar.accelerate();
		return document.getElementById("display").innerHTML = "Your Speed is: " + myCar.getSpeed();
	}
	//loop that decelerates the car to 0
	function slow(){
		myCar.brake();
		return document.getElementById("display").innerHTML = "Your Speed is: " + myCar.getSpeed();
	}

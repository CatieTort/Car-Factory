
class CarFactory {
	constructor(model_yr, make, color){
		this.modelYear= model_yr,
		this.make= make,
		this.color= color,
		this.speed = 0
	}

	// Add a function to the object that is being returned that concatenates the make, year and color if they are entered into the input fields.

	carInfo(){
		return "Your" + this.modelYear + " " + this.color + " " + this.make + "is ready for a test drive";
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
// color is selected from dropdown list
// if no color is selected default is black

	function makeCar(){
		function carType(){
			var model_yr = document.getElementById("model").value;
			var make = document.getElementById("brand").value;
			var color = document.getElementById("paint").value;

			myCar = new CarFactory(model_yr, make, color);
		}

		carType();

		document.getElementById("display").innerHTML = myCar.carInfo();

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

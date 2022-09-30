let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName

if(firstName == null){
    console.log('First Name value must not be undefined')    
}else{
    if(typeof(firstName) !== "string" ){
        console.log('First Name value must be of type String')
    }
}

// Provide solution code here for Validating LastName
if(typeof(lastName) !== "string" ){
    console.log('last Name value must be of type String')
}

// Provide solution code here for Validating Age
if(age == null){
    console.log('age value must not be undefined')    
}else{
    if(typeof(age) !== "number" ){
        console.log('age value must be of type number')
    }else if(!age>=18 && age<=60){
        console.log('Age value should be between 18 and 60')  
    }
}


// Provide solution code here for Validating isMarried
if(typeof(isMarried) !== "boolean" ){
    console.log('Type should be Boolean')
}


// Provide solution code here for Validating City
if(typeof(city) !== "string" ){
    console.log('City value must be of type String')
}

// Provide solution code here for Validating State
if(typeof(state) !== "string" ){
    console.log('State value must be of type String')
}

 
// Provide solution code here for Validating Postal Code
if(postalCode == null){
    console.log('Postal Code value must not be undefined')    
}else{
    if(typeof(postalCode) !== "string" ){
        console.log('Postal Code value must be of type String')
    }
}

 
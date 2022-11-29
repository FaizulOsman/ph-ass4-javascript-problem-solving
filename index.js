/* ----- Problem:1 radianToDegree ----- */
function radianToDegree(radian) {
  // Main function
  let result;
  if (typeof radian != "number") {
    // If input will not be a number it will return
    result = "Please make sure that your input is valid";
  } else {
    // If input will be a number it will return
    result = (radian * 180) / Math.PI; // Convertion from Radian to Degree
    result = result.toFixed(2); // It will fix 2 number after decimal
  }
  return result; // It will return final result
}
/* Problem:2 isJavaScriptFile */
function isJavaScriptFile(fileName) {
  // Main function
  if (typeof fileName != "string") {
    // If input will not be a string it will return
    return "Please make sure that your input is valid";
  } else {
    // If input will be a string it will return
    if (fileName.endsWith(".js") == true) {
      // It will return when file name ends with '.js'
      return true;
    } else {
      // It will return when file name will not ends with '.js'
      return false;
    }
  }
}
/* Problem 3: oilPrice */
function oilPrice(dieselQuan, petrolQuan, octaneQuan) {
  let dieselPrice = 114;
  let petrolPrice = 130;
  let octanePrice = 135;
  if (
    typeof dieselQuan != "number" ||
    typeof petrolQuan != "number" ||
    typeof octaneQuan != "number"
  ) {
    // If input will not be a number it will return
    return "Please make sure that your input is valid";
  } else {
    // If input will be a number it will return
    let totalPrice =
      dieselQuan * dieselPrice +
      petrolQuan * petrolPrice +
      octaneQuan * octanePrice;
    return totalPrice;
  }
}
/* Problem 4: publicBusFare */
function publicBusFare(passenger) {
  let totalPublicBusFair;
  const busCapacity = 50;
  const microBusCapacity = 11;
  const busFare = 250;
  if (typeof passenger != "number") {
    // If input will not be a number it will return
    return "Please make sure that your input is valid";
  } else {
    // If input will not be a number it will return
    if (passenger < microBusCapacity) {
      // It will return when "input < microBusCapacity"
      totalPublicBusFair = passenger * busFare;
    } else if (passenger < busCapacity && passenger >= microBusCapacity) {
      // It will return when "busCapacity> input >= microBusCapacity"
      let passengerForPublicBus = passenger % microBusCapacity;
      totalPublicBusFair = passengerForPublicBus * busFare;
    } else {
      // It will return when input >= busCapacity
      let passengerForPublicBus = (passenger % busCapacity) % microBusCapacity;
      totalPublicBusFair = passengerForPublicBus * busFare;
    }
  }
  return totalPublicBusFair; // It will return final result
}
/* Problem 5: isBestFriend */
function isBestFriend(first, second) {
  let result;
  if (
    typeof first.name != "string" ||
    typeof first.friend != "string" ||
    typeof second.name != "string" ||
    typeof second.friend != "string"
  ) {
    // If input will not be a string it will return
    return "Please make sure that your input is valid";
  } else {
    // If input will be a string it will return
    if (first.name == second.friend && second.name == first.friend) {
      // It will return when they will be friend each other
      result = true;
    } else {
      // It will return when they will not be friend each other
      result = false;
    }
  }
  return result; // It will return final result
}

function sayHello( name, city, state ) {
  // join all the names in the array to one variable
  const fullName = name.join(" ");
  // use template literals to create the string inputting the variables where need be
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}
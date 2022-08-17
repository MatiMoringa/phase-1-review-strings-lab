const currentUser = 'Grace Hopper';

const welcomeMessage = 'Welcome to Flatbook, ';
typeof "const currentUser = 'Grace Hopper';";
//=> "string"

"const currentUser = 'Grace Hopper';".length;
//=> 35

currentUser;
//=> Uncaught ReferenceError: currentUser is not defined
"High " + "five!";
//=> "High five!"

"We" + ' ' + `can` + " " + 'concat' + `enate` + " as many strings " + 'as our heart ' + `desires.`;
//=> "We can concatenate as many strings as our heart desires."
const currentUser = 'Grace Hopper';

const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;
const myString = 'template literal';

const myNumber = 10;

const myBoolean = false;

`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!

Beware that new lines inside of a ${myString} will be preserved as new lines in the resulting ${typeof myString}!`;
//=> "Saying that interpolation with template literals is better than concatenation 100% of the time is simply false. But it is pretty cool!

// Beware that new lines inside of a template literal will be preserved as new lines in the resulting string!"
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}`;
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const currentUser = 'Grace Hopper';

...

const shortGreeting = `Welcome, ${currentUser}`;
currentUser.slice(0, 1);
const currentUser = 'Grace Hopper';

...

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

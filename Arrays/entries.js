const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// returns an Array Iterator object
const day = days.entries(); 

for(let x of day) {
    console.log(x);
}

// Expected output
// [0, 'sunday']
// [1, 'monday']
// [2, 'tuesday']
// [3, 'wednesday']
// [4, 'friday']
// [5, 'saturday']
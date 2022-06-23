// Code your solution here
function findMatching(drivers,names) {
    return drivers.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === names.toLowerCase()
      );
    }
function fuzzyMatch(drivers,letters) {
    return drivers.filter(
        (possibleMatch) =>
          possibleMatch.toLowerCase().indexOf(letters.toLowerCase()) === 0
      );
    
}
function matchName(drivers,driverNames) {
    return drivers.filter((record) => record.name === driverNames);
}

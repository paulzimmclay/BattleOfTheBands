let counter = 1;
const rosterizer = (bandName) => {
    entry = counter++;
    const roster = `${entry}. ${bandName}`;
    console.log(roster);
};

for (let i = 0; i <= 100; i++) {
    let bandName = prompt("What's your band name?", "Led Zeppelin");
    rosterizer(bandName);
}
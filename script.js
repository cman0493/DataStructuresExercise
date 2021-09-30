//1
const jedi = [];
jedi[0] = "Luke";
jedi.push ("Obi-Wan Kenobi");
jedi.unshift ("Yoda");
console.log(jedi[1]);
jedi.pop();
jedi.shift();
console.log(jedi);

//2
const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
console.log(starWarsVillains.slice(0,2));

//3
const droids = {
    astromech: "R2-D2", 
    protocol: "C-3PO", 
    assassin: "IG-88"
};
console.log(droids["astromech"]);
console.log(droids.protocol);
droids["assassin"] = "IG-11";
console.log(droids);

//4
console.log(starWarsVillains[0][6]);

//5
console.log(sithLords.slice(-2, -1))

//6
const starWarsMovies = [
    {
      episodeOne: "The Phantom Menace",
      episodeTwo: "Attack of the Clones",
      episodeThree: "Revenge of the Sith"},
    {
      episodeFour: "A New Hope",
      episodeFive: "The Empire Strikes Back",
      episodeSix: "Return of the Jedi"
    },
    {
      episodeSeven: "The Force Awakens",
      episodeEight: "The Last Jedi",
      episodeNine: "The Rise of Skywalker"
    }
  ];
starWarsMovies.splice(1, 0, "Solo", "Rogue One");
var Pet = prompt ("Name your pet");
document.write(Action);
var Energy = 0;
var Happiness = 0;
document.write(Energy);
document.write(Happiness);
for (i=0; i<6; i++){
var Action = prompt ("feed, pet, or walk?");
    if (Action === "feed") {
var Energy = (Energy + 2);
    } else if (Action === "pet") {
var Happiness = (Happiness + 1);
    } else if (Action === "walk")
 {
var Happiness = ( Happiness + 2); 
var Energy = (Energy - 1);
    } 
    
    

}; 
console.log (Pet)
console.log (Happiness)
console.log (Energy)
console.log("{$Pet} has {$Happiness} happiness and {$Energy} energy") 
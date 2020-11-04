var MYNAME = "Jared Nelson".toUpperCase();
console.log("Name:  ", MYNAME);
console.log("Career:  Full Stack Engineer");
console.log("Description:  I like video games");
console.log("\n");
console.log("My Interests:");
console.log("* League of Legends");
console.log("* Music Festivals");
console.log("* People Watching");
console.log("* Watching Twitch Streams");
console.log("\n");
console.log("My Previous Experience:");
function displayPosition(jobTitle, compName, jobDescription) {
    console.log("* ", jobTitle, " at ", compName, " - ", jobDescription);
}
displayPosition("Valet", "Intelligent Parking Solutions", "I parked and returned cars to customers.");
displayPosition("Risk Manager", "Sigma Tau Gamma", "Helped manage and prevent risks.");
displayPosition("Service Specialist", "ContinuumRx", "I delivered medicine to patients.");
console.log("\n");
console.log("My Skills:");
function displaySkill(skillName, coolSkill) {
    if (coolSkill == true) {
        console.log("* BAM: ", skillName);
    }
    else {
        console.log("* ", skillName);
    }
}
displaySkill("French Horn", true);
displaySkill("eating", false);
displaySkill("League of legends", false);
displaySkill("holding my breath", true);
displaySkill("limited fundamental understanding of coding", true);
displaySkill("Sleeping", true);

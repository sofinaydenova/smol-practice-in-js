let raceNumber = Math.floor(Math.random() * 1000);
// paste values here to see the outcome
const earlyRunners = true
const runnerAge = 19

if ( earlyRunners && runnerAge > 18) {
  raceNumber += 1000 }

if ( earlyRunners && runnerAge > 18) {
  console.log(`Early adults ${raceNumber} will race at 9:30 `) }
else if (!earlyRunners && runnerAge > 18) {
  console.log(`Late adults ${raceNumber} run at 11:00 am`) }
 else if  (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration)`) }
 else {
   console.log(`See registration desk`) }
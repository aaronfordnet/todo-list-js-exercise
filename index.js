// Tasks object
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },
    markComplete: function() { this.complete = true; }
  };
  return task;
}

// Create tasks
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task3 = newTask("Wash dishes", "There are no clean spoons!");
const tasks = [task1, task2, task3];

// Driver code
console.log('- Monday Morning:');
task1.logState();
task2.logState();
task3.logState();

console.log('- Monday Evening:');
task1.markComplete();
task2.markComplete();

task1.logState();
task2.logState();
task3.logState();

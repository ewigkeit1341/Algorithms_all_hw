function selectTasks(tasks, maxTime) {

    tasks.sort((a, b) => a.time - b.time);
  
    let selectedTasks = [];
    let totalTime = 0;
  
    for (const task of tasks) {

      if (totalTime + task.time <= maxTime) {
        selectedTasks.push(task);
        totalTime += task.time;
      } else {
        break; /
      }
    }
  
    return selectedTasks;
  }
  

  const tasks = [
    { id: 1, name: "Task 1", time: 2 },
    { id: 2, name: "Task 2", time: 1 },
    { id: 3, name: "Task 3", time: 3 },
    { id: 4, name: "Task 4", time: 2 },
    { id: 5, name: "Task 5", time: 4 }
  ];
  
  const maxTime = 5;
  
  const selected = selectTasks(tasks, maxTime);
  console.log("Выбранные задачи:", selected);
  
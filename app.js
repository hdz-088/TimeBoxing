// Date and Day Related Variables
const dateField = document.getElementById("date");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];
const today = new Date();
const todayDay = days[today.getDay()];

// const day = today.getDate();
// const month = months[today.getMonth()];
// const year = today.getFullYear();
// const formattedDate = `${day} ${month}, ${year}`;

// Setting  Default Today's Date
// dateField.valueAsDate = today;

// Setting Default Time values to 0000
document.getElementById("from-time").value = "00:00";
document.getElementById("to-time").value = "00:00";

function setTime() {
  const fromInput = document.getElementById("from-time").value.replace(":", "");
  const toInput = document.getElementById("to-time").value.replace(":", "");
  return `${fromInput}-${toInput}`;
}

function getDateValue() {
  const selectedDate = document.getElementById("date").value;
  return selectedDate;
}

function findDayOfWeek() {
  const dateInput = document.getElementById("date"); // Get the date input element
  const dateValue = dateInput.value; // Get the value of the date input

  if (dateValue) {
    const date = new Date(dateValue); // Create a Date object from the input value
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = days[date.getDay()]; // Get the name of the day based on the Date object
    return dayOfWeek;
  } else {
    console.log("not");
  }
}

function addTaskDiv() {
  // adds Time and Task in .addTask div
  taskTime = setTime();
  taskItem = document.getElementById("task").value;

  const taskDiv = document.createElement("div");
  taskDiv.className = "addtask";

  const timeField = document.createElement("p");
  timeField.className = "timefield";
  timeField.textContent = taskTime;

  const taskField = document.createElement("p");
  taskField.className = "taskfield";
  taskField.textContent = taskItem;

  // Append the time and task paragraphs to the task div
  taskDiv.appendChild(timeField);
  taskDiv.appendChild(taskField);

  // Append the new task div to the container div
  const addingTask = document.getElementById("timebox");
  addingTask.appendChild(taskDiv);

  console.log(taskTime, taskItem);
  console.log("addTask Div Created");
}

function deleteLast() {
  const container = document.getElementById("timebox");
  container.removeChild(container.lastChild);
  console.log("Last div deleted");
}

function downloadImg() {
  const cardElement = document.getElementById("output");

  // Use html2canvas to capture the element
  html2canvas(cardElement).then((canvas) => {
    // Convert the canvas to a data URL
    const imgData = canvas.toDataURL("image/png");

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = imgData;
    downloadLink.download = `${getDateValue()}-website.png`;

    // Trigger the download
    downloadLink.click();
  });
  console.log("Image Downloaded");
}

function addTask() {
  // Set Date and Date
  document.querySelector(".getdate").textContent = getDateValue();
  document.querySelector(".getday").textContent = findDayOfWeek();
  addTaskDiv();
  console.log("Task Added");
}

document.getElementById("addTask").addEventListener("click", addTask);
document.getElementById("task").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Enter pressed");
    addTask();
  }
});
document.getElementById("deleteLast").addEventListener("click", deleteLast);
document.getElementById("downloadBtn").addEventListener("click", downloadImg);

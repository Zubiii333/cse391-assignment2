# CSE 391: Programming for the Internet  
## Assignment 2: JavaScript Programming

### Objective
The purpose of this assignment is to enhance students' understanding of JavaScript by developing interactive web applications. Students will apply core JavaScript concepts, including DOM manipulation, event handling, and local storage, while also incorporating HTML and CSS as needed.

The assignment consists of three tasks: a fortune generator, a stopwatch, and a to-do list. These tasks will help students practice working with arrays, event listeners, timing functions, and data persistence.

---

## Question 1: Fortune Generator (25 Marks)

### Objective
Create a fortune generator that displays a random fortune each time the page is loaded and allows users to change the appearance of the fortune box dynamically.

### Requirements
1. **Fortune Messages**: Create an array in JavaScript with at least 10 different fortune messages.
2. **Random Selection**: When the page loads, randomly select a fortune from the array and display it in a styled box.
3. **Styling & Interactivity**:
   - The fortune should be displayed in a centered box just above the page footer.
   - There should be four buttons beside the fortune box, each changing:
     - Font color of the fortune text
     - Background color of the fortune box
     - Border color of the fortune box
     - Font size and font family slightly
   - Ensure colors contrast well with the webpage background for visibility.

### Expected Output
- A web page that displays a random fortune in a customizable box.
- Clicking the color buttons changes the fortune box’s appearance dynamically.

> Learn to debug your JS with Chrome Dev Tools or Firefox Firebug: http://getfirebug.com  
> Use validator to quickly get syntax error:
> - http://validator.w3.org/
> - http://jigsaw.w3.org/css-validator/
> - http://webster.cs.washington.edu/jslint/

Use `alert()` and `console.log()` to print debug messages.

---

### Part 1 (15 + 15 points)

#### 1.1 Quote Box
Add a random "quote generator" to your home page. That is, your page should contain a list of fortunes (stored as an array of strings), and should randomly select one of those fortunes to display each time the page is loaded. The fortune should be displayed just above the page footer, centered and enclosed in a box. And there will be four color buttons beside the box.

> When clicked, the font color, the border color, and the background color of the box will change.  
> Also the font family and font size will change slightly.  
> (Choose your colors depending on your background so that they don’t mix.)

Example fortune:
> *True wisdom comes not from knowledge, but from understanding.*

#### 1.2 Hero Converter
Create HTML and write a function `convert()` in a JS file that takes the value in the text input and converts it from either:
- kilograms to pounds, or
- pounds to kilograms

depending on the dropdown box.

The result should be displayed in the empty span.

**Conversion factors**:
- 1 pound = 0.4536 kilograms
- 1 kilogram = 2.2046 pounds

---

## Question 2: Stopwatch (35 Marks)

### Objective
Build a stopwatch that counts time in multiples of 3 seconds and stops at 30 seconds unless reset.

### Requirements
1. **Timer Functionality**:
   - The display should count in steps of 3 seconds (i.e., 3, 6, 9… instead of 1, 2, 3…).
   - The timer automatically stops at 30 seconds unless reset.
2. **User Controls**:
   - **Start Button**: Begins the timer.
   - **Stop Button**: Pauses the timer.
   - **Reset Button**: Resets the timer to 0.

### Expected Output
- A functional stopwatch with buttons to start, stop, and reset the timer.
- If the stopwatch is stopped before reaching 30 seconds, it should resume from the last recorded time when started again.
- The timer should only increment in multiples of 3 seconds and automatically stop at 30 seconds.

---

## Question 3: To-Do List (40 Marks)

### Objective
Create a to-do list application that allows users to add, track, and delete tasks, ensuring the data persists between sessions.

### Requirements
1. **Adding Tasks**:
   - Users can type a task into an input field and add it to the list.
2. **Displaying Tasks**:
   - Each task should appear in a list format after being added.
3. **Task Controls**:
   - Each task should have a **delete** button to remove it from the list.
   - Each task should have a **checkbox** to mark it as completed.
4. **Persistent Data Storage**:
   - Use `localStorage` to save tasks, ensuring tasks remain available even after refreshing or reopening the page.

### Expected Output
- A functional to-do list where users can add, delete, and mark tasks as completed.
- The tasks remain saved even after refreshing the page.

---

## Submission Guidelines

- Submit your assignment by sharing the hosted link and all files in a compressed `.zip` format through the submission form.
- Ensure that your JavaScript code is well-commented and structured properly.
- Include all necessary files (HTML, CSS, images, JavaScript, if any).
- Cite any external references used for guidance.
- You should be prepared to explain your code during evaluation.

---

## Evaluation Criteria

| Criteria            | Marks |
|---------------------|-------|
| Fortune Generator   | 25    |
| Stopwatch           | 35    |
| To-Do List          | 40    |

___

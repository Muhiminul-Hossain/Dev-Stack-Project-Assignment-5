1.Project Name: Dev Stack
2.A modern web application built for managing and customizing personal technology stacks.
3.Technologies Used For This Project:
    React.js
    Tailwind CSS, DaisyUI
    React Icon
    Google Font
    TypeScript / JavaScript (ES6+)
    React-Toastify 
    JSON 
    Vite 
4.Three features about my project:
    -> It show's a loading spinner while the JSON data is being fetched.
    -> It Use react-toastify to show alerts for: add to stack, duplicate add attempt, remove, and remove all.
    -> It Responsive For Mobile Devices
**Some Quastion And Answers:
1.What is JSX, and why is it used in React?
=>JSX is a JavaScript Syntax  which is use for using html on JS file 
2.What is the difference between props and state?
=>Props is a read only Data on the other hand State can be changed and also re-render the UI
3.What does the useState hook do, and where did you use it in this project?
=>useState is a react hook which can help component to store data and updating data, I use useState on this project when i am tracking the count of Stack Number
4.What does the useEffect hook do, and why did you need it to load the JSON data?
=>useEffect use for do something after component render, i need it for fetch the json data 
5.Why does every item in a .map() list need a unique key prop?
=>So react can track each item individually
6.What is conditional rendering? Show one place you used it.
=>Showing different UI on the screen based on a condition is called Conditional Rendering. (UserStack.tsx on line 45 -> selectedStack.length === 0 ? )
7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
=> By using props i pass data from parent component to child component, child send something back to the parent as an argument

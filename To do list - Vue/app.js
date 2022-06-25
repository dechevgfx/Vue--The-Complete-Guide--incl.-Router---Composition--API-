Vue.createApp({
    data() {
      return {
        tasks: [],
        taskInput: ''
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.taskInput);
        this.taskInput = '';
      }
    }
  }).mount('#app');

// const buttonElement = document.querySelector('button');
// const inputElement = document.querySelector('input');
// const listElement = document.querySelector('ol');
// function addTask() {
//     const taskValue = inputElement.value;
//     const listTaskElement = document.createElement('li');
//     listTaskElement.textContent = taskValue;
//     listElement.appendChild(listTaskElement)
//     inputElement.value = "";
// }
// buttonElement.addEventListener('click', addTask);


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

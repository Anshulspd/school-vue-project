<template>

  <!-- Lifecycle Hooks -->
  <Parent />
  <div class="student-home">
    <div class="container">
      <h1>Welcome, {{ student.name }}</h1>
      <p>Age: {{ student.age }}</p>
      <p>Class: {{ student.class }}</p>
      <p>Course: {{ student.courseRegistered }}</p>
      <p>Username: {{ student.username }}</p>
      
      
    </div>
     
    <div class="input-field">
      <input type="text" v-model="newCourse" placeholder="New Course">

      <button @click="updateCourse">Update Course</button>
    </div>
    <div class="input-field">
      <input type="text" v-model="newClass" placeholder="New Course">

      <button @click="updateClass">Update Class</button>
    </div>
    
    
  </div>
</template>

<script>
import Parent from './Parent.vue'

export default {
  components: {
    
    Parent,},
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
    student() {
      const username = this.currentUser.username;
      return this.$store.getters.getStudentByUsername(username);
    }
  },
  data() {
    return {
      newCourse: '',
      newClass: ''
    };
  },
  methods: {
    updateCourse() {
    const username = this.student.username; 

    this.$store.dispatch('updateStudentCourse', {
      username: username, 
      newCourse: this.newCourse
    });

    this.newCourse = '';
  },
  updateClass() {
    const username = this.student.username; 

    this.$store.dispatch('updateStudentClass', {
      username: username, 
      class: this.newClass
    });

    this.newClass = '';
  },
  }
};
</script>


<style scoped>
.student-home {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
}

.welcome-message {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.sub-heading {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}

.resource-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
}

.resource-list li {
  margin-bottom: 10px;
}

.resource-list a {
  text-decoration: none;
  color: #007bff;
}

.resource-list a:hover {
  text-decoration: underline;
}

.student-info {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.student-recommendations {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}

.student-recommendations ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.student-recommendations ul li {
  margin-bottom: 10px;
}

.student-recommendations ul li:before {
  content: "➤ ";
  color: #555;
}

</style>

<template>
  <div class='container'>
    <h1>Please log in:</h1>
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Log in</button>
    <p v-if="loginError">{{ loginError }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
      
    };
  },
  methods: {
    login() {
      const user = this.$store.state.teachers.find(teacher => teacher.username === this.username);
      const student = this.$store.state.students.find(student => student.username === this.username);

      if (user && user.password === this.password) {
        const currentUser = this.$store.getters.getTeacherByUsername(this.username);
        this.$store.commit('setCurrentUser', currentUser);
        
        this.$emit('login',  'teacher');
        return;
      }

      

      else if (student && student.password === this.password) {
        const currentUser = this.$store.getters.getStudentByUsername(this.username);
        this.$store.commit('setCurrentUser', currentUser);
        
        this.$emit('login', 'student');
        return;
      }
      else {
        this.loginError = 'Invalid username or password';
      }

    }
  }
};
</script>

<style scoped>

</style>

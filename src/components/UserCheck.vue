<template>
    <div >
      <div v-if="loggedIn">
        <div v-if="userType === 'student'">
          <StudentPage />
        </div>
        <div v-else-if="userType === 'teacher'">
          <TeacherPage />
        </div>
      </div>
      <div v-else>
        <Login @login="handleLogin" />
      </div>
    </div>
</template>
  
  <script>
  import Login from './Login.vue';
  import StudentPage from './StudentPage.vue';
  import TeacherPage from './TeacherPage.vue';
  
  export default {
    components: {
      Login,
      StudentPage,
      TeacherPage
    },
    data() {
      return {
        loggedIn: false,
        userType: ''
      };
    },
    methods: {
      handleLogin(userType) {
        this.loggedIn = true;
        this.userType = userType;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  
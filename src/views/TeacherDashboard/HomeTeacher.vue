<template>
    <div class="container">
      <h1>Welcome, {{ currentUser.name }}</h1>
      
        <h2>Your Details:</h2>
        <div class="card">
          <div class="card-content">
            <span class="card-title">{{ currentUser.name }}</span>
            <p>Age: {{ currentUser.age }}</p>
            <p>Subject: {{ currentUser.subject }}</p>
            <p>Experience: {{ currentUser.experience }}</p>
            <p>Teacher ID: {{ currentUser.id }}</p>
          </div>
        </div>
      </div>
   
  </template>
  
  <script>
  export default {
    computed: {
      currentUser() {
      return this.$store.state.currentUser;
    },
    // teacher() {
    //   const username = this.currentUser.username;
    //   return this.$store.getters.getteacherByUsername(username);
    // }
  }
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .card {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
  
  .card-title {
    font-size: 20px;
    font-weight: bold;
  }
  </style>
  
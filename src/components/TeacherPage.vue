<template>
    <div>
      <h1>Welcome, teacher!</h1>
      
      <nav>
        <router-link to="/teacher/home">Home</router-link>
        <router-link to="/teacher/classes">Classes</router-link>
        <router-link to="/teacher/tests">Students</router-link>
        <router-link to="/teacher/grades">Grades</router-link>
      </nav>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>
  
  nav {
    margin-bottom: 20px;
  }
  
  nav a {
    margin-right: 10px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  </style>
  
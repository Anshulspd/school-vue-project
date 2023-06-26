<template>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <div>
      
        <h1>Welcome, student!</h1>
      <nav>
            <div class="nav-wrapper valign-wrapper text-white ">

            
              <ul class="hide-on-med-and-down " >
                <li><router-link to="/student/home">Home</router-link></li>
                <li><router-link to="/student/learn">Learn</router-link></li>
                <li><router-link to="/student/practice">Practice</router-link></li>
                <li> <router-link to="/student/test">Test</router-link></li>
            </ul>
            </div>
      </nav>
      
  
      <router-view></router-view>
    </div>
    
  </template>
  
  <script>
  export default {
    // Add your logic here
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
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
  

  
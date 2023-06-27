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
      <button class= "logout" @click="logout"><a href="/UserCheck">Logout</a></button>
  
      <router-view></router-view>
    </div>
    
  </template>
  
  <script>
  export default {
    methods: {
    logout() {
      
      this.$router.push('/login');
    }
  }
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
  .logout {
    display: flex;
  justify-content: flex-end;
    display: inline-block;
    padding: 8px 16px;
    background-color: #c5dbe2;
    color: #161515;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  </style>
  
  

  
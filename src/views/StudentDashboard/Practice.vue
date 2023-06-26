
<template>
  <div class="practice-page">
    <h1>Practice</h1>
    <p>Sharpen your skills through practice exercises!</p>

    <div class="practice-items">
      <div class="practice-item">
      
        <h2>Practice Item 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
      </div>
      <div class="practice-item">
        
        <h2>Practice Item 2</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
       
      </div>
      <div class="practice-item">
        
        <h2>Practice Item 3</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Add any necessary logic or data properties
};
</script>

<style scoped>
.practice-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}

.practice-items {
  display: flex;
  justify-content: space-between;
}

.practice-item {
  flex-basis: 30%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.practice-item img {
  max-width: 100%;
  margin-bottom: 10px;
}

.practice-item h2 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.practice-item p {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
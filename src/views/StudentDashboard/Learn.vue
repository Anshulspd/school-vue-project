<template>
  <div class="learn-page">
    <h1>Learn</h1>
    <p>Explore various subjects and expand your knowledge!</p>

    <div class="subjects">
      <div class="subject">
        <img src="subject1.png" alt="Subject 1" />
        <h2>Subject 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
      </div>
      <div class="subject">
        <img src="subject2.png" alt="Subject 2" />
        <h2>Subject 2</h2>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        
      </div>
      <div class="subject">
        <img src="subject3.png" alt="Subject 3" />
        <h2>Subject 3</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
.learn-page {
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

.subjects {
  display: flex;
  justify-content: space-between;
}

.subject {
  flex-basis: 30%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.subject img {
  max-width: 100%;
  margin-bottom: 10px;
}

.subject h2 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.subject p {
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

  
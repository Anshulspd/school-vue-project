<template>
    <div>
      Parent component
      <button @click="showChild = !showChild">Toggle Child</button>
      <Child v-if="showChild" />
      <div>{{text}}</div>
      
    </div>
  </template>
  
  <script>
  import { stringifyQuery } from 'vue-router';
import Child from './Child.vue'
  export default {
    components: { Child },
    name: 'Parent',
    data() {
      return {
        showChild: true,
        text : '',
      }
    },
    beforeCreate() {
        this.text = 'initial text';//has no effect
    console.log('beforeCreate');
    // Perform setup or initialization ,importing libraries, configuring plugins
    // before the component is created
  },
  created() {
    this.text = 'initial text';
    console.log('created');
    // Make API calls or initialize data like this.fetchDataFromApi(); 
    //  after the component is created
  },
  beforeMount() {
    console.log('beforeMount');
    
    // Modify the component's template or perform other DOM-related tasks here
    // before the component is mounted to the DOM
  },
  mounted() {
    console.log('mounted');
    // Interact with the mounted component in the DOM 
    //executed after the component is mounted to the DOM
  },
  beforeUpdate() {
    console.log('beforeUpdate');
    // Perform calculations or update data before re-rendering the component
    // before a component update
  },
  updated() {
    console.log('updated');
    // Interact with the updated DOM or perform additional tasks after a component update
    // after a component update
    // after our component has updated its DOM tree
  },
  beforeUnmount() {
    console.log('beforeUnmount');
    // Clean up resources, remove event listeners, or cancel subscriptions 
    // still access component elements in the DOM
    // before the component is unmounted
  },
  unmounted() {
    console.log('unmounted');
    //  final cleanup tasks or save component state here
    // to remove event listeners or cancelling timers or intervals.
    //  after the component is unmounted
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    // Clean up resources, remove event listeners
    //  before the component is destroyed 
  },
  destroyed() {
    console.log('destroyed');
    // Perform any final cleanup tasks or save component state here
    // after the component is destroyed 
  },
  }
  </script>
  
  <style scoped>
  </style>
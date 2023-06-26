import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeStudent from '../views/StudentDashboard/HomeStudent.vue'
import Learn from '../views/StudentDashboard/Learn.vue'
import Practice from '../views/StudentDashboard/Practice.vue'
import Test from '../views/StudentDashboard/Test.vue'
import Classes from '../views/TeacherDashboard/Classes.vue'
import Grades from '../views/TeacherDashboard/Grades.vue'
import HomeTeacher from '../views/TeacherDashboard/HomeTeacher.vue'
import Tests from '../views/TeacherDashboard/Tests.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
    path: '/student/home',
    name: 'homeStudent',
    component: HomeStudent
  },
  {
    path: '/student/practice',
    name: 'Practice',
    component: Practice
  },
  {
    path: '/student/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/student/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/teacher/home',
    name: 'HomeTeacher',
    component: HomeTeacher
  },
  {
    path: '/teacher/classes',
    name: 'Classes',
    component: Classes
  },
  {
    path: '/teacher/tests',
    name: 'Tests',
    component: Tests
  },
  {
    path: '/teacher/grades',
    name: 'Grades',
    component: Grades
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

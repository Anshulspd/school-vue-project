import { createStore } from 'vuex'
import students from '@/assets/students.json';
import teachers from '@/assets/teachers.json';
export default createStore({
  state: {
    students: students.students,
    teachers: teachers.teachers,
    currentUser: null
  },
  getters: {
    getStudentByUsername: (state) => (username) => {
      return state.students.find((student) => student.username === username);
    },
    getTeacherByUsername: (state) => (username) => {
      return state.teachers.find((teacher) => teacher.username === username);
    },
    
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    UPDATE_STUDENT_COURSE(state, payload) {
      const student = state.students.find(student => student.username == payload.username);
      
    if (student) {
      student.courseRegistered = payload.newCourse;
    }
    console.log(student.course);
    },
    UPDATE_STUDENT_CLASS(state, payload) {
      const student = state.students.find(student => student.username == payload.username);
      
    if (student) {
      student.class = payload.class;
    }
    
    },
  },
  actions: {
    updateStudentCourse({ commit }, payload) {
      commit('UPDATE_STUDENT_COURSE', payload);
    },
    updateStudentClass({ commit }, payload) {
      commit('UPDATE_STUDENT_CLASS', payload);
    },
    
  }
})

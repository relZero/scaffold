// import Todo from '../view/todo/index.vue'
// import Login from '../view/login/index.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: () =>
      import('../views/app.vue')
  }
]

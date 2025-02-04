// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/:MainCategory/:SubCategory',
        name: 'PostList',
        component: () => import('@/views/PostListPage.vue'),
      },
      {
        path: '/:MainCategory/:SubCategory/:PostID',
        name: 'Post',
        component: () => import('@/views/PostPage.vue'),
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/PostSearchList.vue'),
      },
      {
        path: '/PostCreate',
        name: 'PostCreate',
        component: () => import('@/views/CreatePostPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

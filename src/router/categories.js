const categoriesRoutes = [
  {
    path: '/add/payment/',
    component: () => import('@/components/List')
  },
  {
    path: 'Food?value=:value',
    name: 'food',
    component: () => import('@/components/List')
  },
  {
    path: 'Food', // дубль чтобы можно было переходить на эти роуты напрямую
    name: 'food',
    component: () => import('@/components/List')
  },
  {
    path: 'Transport?value=:value',
    name: 'transport',
    component: () => import('@/components/List')
  },
  {
    path: 'Transport', // дубль чтобы можно было переходить на эти роуты напрямую
    name: 'transport',
    component: () => import('@/components/List')
  },
  {
    path: 'Entertainment?value=:value',
    name: 'entertainment',
    component: () => import('@/components/List')
  },
  {
    path: 'Entertainment', // дубль чтобы можно было переходить на эти роуты напрямую
    name: 'entertainment',
    component: () => import('@/components/List')
  }
]
export default categoriesRoutes

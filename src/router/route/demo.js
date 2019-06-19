export default [
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "paged-table" */ '../../layouts/DemoLayout.vue'),
    children: [
      {
        path: 'paged-table',
        component: () => import(/* webpackChunkName: "paged-table" */ '../../views/demo/table/PagedTable.vue')
      }
    ]
  }
]

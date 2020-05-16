import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '2', component: () => import('pages/Index2.vue') },
      { path: 'jobs', component: () => import('pages/JobsPage.vue') },
      { path: 'logs', component: () => import('pages/LogsPage.vue') },
      { path: 'itemeditor', component: () => import('pages/ItemEditorPage.vue') },
      { path: 'wp', component: () => import('pages/WPPage.vue') },
      { path: 'icons', component: () => import('pages/IconsPage.vue') },
      { path: 'product/:id', component: () => import('pages/ProductPage.vue') },
      { path: 'cart', component: () => import('pages/CartPage.vue') },
      { path: 'profile', component: () => import('pages/ProfilePage.vue') },
      { path: 'contacts', component: () => import('pages/ContactsPage.vue') },
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
// import something here

// "async" is optional


import Sidebar1 from 'src/components/Sidebar1.vue';
import DItemEditor from 'src/components/DItemEditor.vue'
import NewsCarousel from 'src/components/NewsCarousel.vue'
import ProductList1 from 'src/components/ProductList1.vue'
import BlockOurServices from 'src/components/BlockOurServices.vue'

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default async ({ app, router, Vue, /*... */ }) => {

  Vue.component('Sidebar1', Sidebar1);
  Vue.component('DItemEditor', DItemEditor);
  Vue.component('NewsCarousel', NewsCarousel);
  Vue.component('ProductList1', ProductList1);
  Vue.component('BlockOurServices', BlockOurServices);

}

// interface Object {
//   isString(): bool
// }

// (Object.prototype as any).isString = function () {
//   return typeof this === 'string' || this instanceof String
// }
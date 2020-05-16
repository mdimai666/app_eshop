<template>
  <q-page>
    <div class="text-center relative-position	">
      <img src="statics/map.png" class="" width="100%" />

      <div class="absolute absolute-bottom ">
        <q-btn color="white" text-color="black" label="Открыть на карте" />
        <p></p>
      </div>
    </div>

    <q-list :bordered="false" :separator="false" class="q-pa-md">
      <!--  -->
      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="room" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-primary text-bold">
            ул. Ильменская 94г</q-item-label
          >
          <q-item-label caption>г. Якутск</q-item-label>
        </q-item-section>
      </q-item>
      <!--  -->
      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="phone" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-primary text-bold"
            >+7 (914) 270-76-56</q-item-label
          >
          <q-item-label caption>Оставьте заказ по телефону</q-item-label>
        </q-item-section>
      </q-item>
      <!--  -->
      <q-item clickable v-ripple>
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="email" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-primary text-bold"
            >info@tcrent.ru</q-item-label
          >
          <q-item-label caption
            >Вопросы и предложения отправляйте по почте</q-item-label
          >
        </q-item-section>
      </q-item>
      <!--  -->
    </q-list>

    <div class="text-center">
      <h6 class="q-my-sm">Наши Соцсети</h6>

      <div class="text-primary q-gutter-md">
        <q-icon name="fab fa-instagram" size="lg" />
        <q-icon name="fab fa-facebook-square" size="lg" />
        <q-icon name="fab fa-vk" size="lg" />
        <q-icon name="fab fa-google" size="md" />
      </div>
    </div>
  </q-page>
</template>

<script  lang="ts">
import Vue from 'vue'
import { openURL, LocalStorage } from 'quasar'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { clone } from 'src/js/functions1'
import store, { StoreType } from '../store/index'
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import RootStore from '../store/RootStore'
import LogItem from 'src/models/LogItem'
import { QTableSetup } from 'src/models/QTableSetup'
import { TableColumn } from '../models/TableColumn'
import { AxiosResponse } from 'axios'
import { IQBackend_ListRequestParam } from 'src/controllers/QController'
import { Wordpress } from '../class/Wordpress'
import mockPosts from '../js/mockPosts'
import ProductStore from '../store/ProductStore'
import { Product } from '../models/Product'


@Component
export default class CartPage extends Vue {

  // public product?: Product = new Product()
  // public id: int = -1

  constructor() {
    super()
  }

  productStore = getModule(ProductStore, this.$store)

  created() {
    // let id: int = (this.$route.params.id) ? parseInt(this.$route.params.id) : 0
    // this.id = id
  }

  mounted() {
    // this.productStore.Update()
    // this.product = this.productStore.getProduct(this.id)
    // console.warn(this.product)
  }

  get products(): Product[] {
    // console.log(clone(this.productStore.productList))
    return this.productStore.productList
  }


  ///////////////////////////////////////
}

</script>

<style lang="scss" scoped>
form /deep/ {
  background: red;
}
</style>
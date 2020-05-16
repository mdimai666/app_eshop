<template>
  <q-page padding>
    <div class="content q-gutter-md" v-if="product">
      <div class="item">
        <q-card class="my-card cursor-pointer">
          <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg" /> -->
          <q-card-section>
            <div class="text-h6" v-text="product.title"></div>
            <div class="text-subtitle2">{{ product.date | moment }}</div>
          </q-card-section>
          <q-card-section>
            <q-img
              :src="product.img"
              spinner-color="white"
              style="height: 140px; max-width: 150px"
            />

            <p>
              <b>rent </b>
              <span v-text="product.rent"></span>
            </p>
            <p>
              <b>price </b>
              <span v-text="product.price"></span>
            </p>
            <p>
              <b>pickup </b>
              <span v-text="product.pickup"></span>
            </p>

            <p v-text="product.desc"></p>

            <div v-if="product.tech" v-for="tech in product.tech">
              <div v-for="t in tech.tech_list">
                <p>
                  <b>{{ t.tech_name }}</b> - {{ t.tech_value }}
                </p>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-else class="flex flex-center" style="height:90vh">
      <q-spinner color="primary" size="3em" />
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
export default class ProductPage extends Vue {

  public product?: Product = new Product()
  public id: int = -1

  constructor() {
    super()
  }

  productStore = getModule(ProductStore, this.$store)

  created() {
    let id: int = (this.$route.params.id) ? parseInt(this.$route.params.id) : 0
    this.id = id
  }

  mounted() {
    this.productStore.Update()
    this.product = this.productStore.getProduct(this.id)
    console.warn(this.product)
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
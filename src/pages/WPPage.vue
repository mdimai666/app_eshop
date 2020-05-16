<template>
  <q-page padding>
    <div class="gt-xs"></div>

    <div class="content q-gutter-md">
      <div class="item" v-for="product in products" :key="product.id">
        <q-card class="my-card cursor-pointer" :to="'#'">
          <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg" /> -->
          <q-card-section>
            <div class="text-h6" v-text="product.title" ></div>
            <div class="text-subtitle2">{{ product.date | moment }}</div>
          </q-card-section>
          <q-card-section>
            <q-img :src="product.img" spinner-color="white" style="height: 140px; max-width: 150px" />

            <p v-text="product.desc"></p>
            <p v-text="product.rent"></p>
            <p v-text="product.price"></p>
            <p v-text="product.pickup"></p>
            <p v-text="product.pickup_address"></p>

            <div v-if="product.tech" v-for="tech in product.tech">
              <div v-for="t in tech.tech_list">
                <p>{{t.tech_name}} - {{t.tech_value}}</p>
              </div>
            </div>
            
          </q-card-section>
        </q-card>
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
export default class WPPage extends Vue {

  constructor() {
    super()
  }

  productStore = getModule(ProductStore, this.$store)

  created() {

  }

  mounted() {
    this.productStore.Update()
  }

  get products(): Product[] {
    console.log(clone(this.productStore.productList))
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
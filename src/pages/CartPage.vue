<template>
  <q-page class="">
    <div class="q-pa-sm" style="min-height:calc(100vh - 100px)">
      <div class="text-h6 q-py-sm text-bold">Корзина</div>

      <!--  -->
      <q-card square flat="" bordered="">
        <div class="bg-accent q-pa-sm text-uppercase">
          Товары
        </div>
        <q-list separator bordered class="product-list">
          <q-item
            borderless
            clickable
            v-for="product in products"
            :key="product.id"
            class="product column"
          >
            <div class="flex no-wrap">
              <img :src="product.img" alt="" class="product-image" />

              <q-item-label
                :lines="3"
                v-text="product.title"
                class="text-bold"
              ></q-item-label>

              <!-- right -->
              <div class="column text-right">
                <q-item-label caption class="flex ">
                  <img
                    src="statics/coin-stack.svg"
                    alt=""
                    class="side-icon-1 q-mr-xs"
                  />
                  {{ product.rent }}₽
                </q-item-label>
                <div class="text-orange">
                  <q-icon name="star" />
                  <q-icon name="star" />
                  <q-icon name="star" />
                </div>
              </div>
              <!-- //right -->
            </div>
            <div class="q-mt-sm flex no-wrap">
              <q-btn-group push unelevated class="">
                <q-btn
                  unelevated
                  flat
                  dense
                  color="primary"
                  icon="remove"
                  size="md"
                  @click="item_count--"
                />
                <q-input
                  type="numeric"
                  input-class="text-center"
                  square
                  dense
                  outlined
                  v-model="item_count"
                  label="кол-во"
                />
                <q-btn
                  unelevated
                  flat
                  dense
                  color="primary"
                  icon="add"
                  size="md"
                  @click="item_count++"
                />
              </q-btn-group>
              <q-space />
              <q-btn-group push unelevated class="">
                <q-btn
                  unelevated
                  flat
                  dense
                  color="primary"
                  icon="remove"
                  size="md"
                  @click="item_days--"
                />
                <q-input
                  type="numeric"
                  input-class="text-center"
                  square
                  dense
                  outlined
                  v-model="item_days"
                  label="дней"
                />
                <q-btn
                  unelevated
                  flat
                  dense
                  color="primary"
                  icon="add"
                  size="md"
                  @click="item_days++"
                />
              </q-btn-group>
            </div>
            <div>
              <h6 class="q-ma-none">Сумма: 600₽</h6>
            </div>
          </q-item>
        </q-list>
      </q-card>
      <!--  -->

      <q-card class="q-my-md" bordered="" flat="" square="">
        <q-card-section class="q-gutter-md">
          <div class="flex">
            <h6 class="q-ma-none">Итого: 1200₽</h6>
            <q-space />
            <h6 class="q-ma-none">Залог: 6000₽</h6>
          </div>
          <div class="text-center">
            <q-btn
              color="accent"
              text-color="black"
              class="text-bold q-px-lg"
              push=""
              label="Заказать"
              unelevated=""
            />
          </div>
        </q-card-section>
      </q-card>

      <!-- address -->
      <q-card bordered="" flat="" square="">
        <q-tabs v-model="tab" dense class="bg-accent" align="justify">
          <q-tab name="self" label="Самовывоз" />
          <q-tab name="send" label="Доставка" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated swipeable infinite>
          <q-tab-panel name="self">
            <!--  -->
            <ul class="order-lists tab-active" data-tab="1">
              <li class="list-items">
                <div class="item-title">Режим работы:</div>
                <div class="item-description">Пн.-Пт. 9:00-19:00</div>
                <i class="zmdi zmdi-time"></i>
              </li>
              <li class="list-items">
                <div class="item-title">Адрес самовывоза:</div>
                <div class="item-description">Ильменская 94Г</div>
                <i class="zmdi zmdi-pin"></i>
              </li>
            </ul>

            <!--  -->
          </q-tab-panel>

          <q-tab-panel name="send">
            <!-- <div class="text-h6">Alarms</div> -->
            <!--  -->
            <ul class="order-lists " data-tab="2">
              <li class="list-items">
                <div class="item-title">Режим работы:</div>
                <div class="item-description">Пн.-Пт. 9:00-19:00</div>
                <i class="zmdi zmdi-time"></i>
              </li>

              <li class="list-items" style="margin-bottom: 0;">
                <div class="item-title">Адрес доставки</div>
                <i class="zmdi zmdi-pin"></i>
              </li>

              <label class="input-block order-input-wrap">
                <span class="input-wrap">
                  <textarea
                    id="deviery_adress"
                    name="deviery_adress"
                  ></textarea>
                  <i class="zmdi zmdi-edit"></i>
                </span>
              </label>
            </ul>
            <!--  -->
          </q-tab-panel>
        </q-tab-panels>

        <q-separator />
      </q-card>
      <!-- address -->
    </div>
    <NewsCarousel v-model="slide2" />
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
  slide2: int = 1

  tab: string = 'self'

  item_count: int = 1
  item_days: int = 2

  constructor() {
    super()
  }

  productStore = getModule(ProductStore, this.$store)

  created() {
    // let id: int = (this.$route.params.id) ? parseInt(this.$route.params.id) : 0
    // this.id = id
  }

  mounted() {
    this.productStore.Update()
    // this.product = this.productStore.getProduct(this.id)
    // console.warn(this.product)
  }

  get products(): Product[] {
    // console.log(clone(this.productStore.productList))
    return this.productStore.productList.slice(0, 2)
  }


  ///////////////////////////////////////
}

</script>

<style lang="scss">
.product-list {
  .product {
    .product-image {
      width: 80px;
      height: 60px;
    }
    .side-icon-1 {
      width: 16px;
      height: 16px;
    }
  }
}
</style>

<template>
  <!-- PRODUCTS -->
  <div class="q-pa-sm product-list">
    <h6 class="q-ma-none q-mt-md">Инструменты</h6>

    <q-tabs
      v-model="tab"
      dense
      class="1shadow-2 bg-grey-3"
      align="left"
      narrow-indicator
      inline-label
    >
      <template v-for="tax of taxonomies">
        <q-tab :name="tax.slug" :key="tax.slug" no-caps class="text-lowercase	">
          <q-icon class="q-mr-md">
            <img :src="tax.img" width="24" height="24" />
          </q-icon>
          {{ tax.text | limit(10) }}
        </q-tab>
      </template>
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated swipeable infinite>
      <template v-for="(tax,ti) of taxonomies">
        <q-tab-panel :name="tax.slug" :key="tax.slug" animated>
          <!-- <div class="text-h6">Alarms</div> -->
          Текст описания возможно
          <!-- </q-tab-panel>
        </template>
    </q-tab-panels> -->

          <q-list separator>
            <q-item
              borderless
              clickable
              v-ripple
              v-for="product in productsByCat(ti)"
              :key="product.id"
              class="product"
              :to="`/product/${product.id}`"
            >
              <q-item-section thumbnail>
                <img :src="product.img" alt="" class="product-image" />
              </q-item-section>

              <q-item-section>
                <q-item-label
                  :lines="2"
                  v-text="product.title"
                  class="text-bold"
                ></q-item-label>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>

              <q-item-section side top>
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
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
      </template>
    </q-tab-panels>
  </div>
  <!-- PRODUCTS -->
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Model, Prop, Emit, Provide, Watch } from 'vue-property-decorator'
import { emit } from 'cluster'
import { getModule } from 'vuex-module-decorators'
import ProductStore from 'src/store/ProductStore'
import { Product } from 'src/models/Product'
import { ITaxonomy, data_taxonomies } from 'src/class/data_taxonomies'

@Component
export default class ProductList1 extends Vue {

  @Model('change', { type: Number, default: 0 })
  readonly value!: number

  productStore = getModule(ProductStore, this.$store)

  tab: string = 'mails'

  constructor() {
    super()
  }

  mounted() {
    this.productStore.Update()
    this.tab = this.taxonomies[0]?.slug ?? 'sverlilno-udarnij-instrument'
  }

  Input(val: bool) {
    this.$emit('change', val)
  }

  ////////////////

  get products(): Product[] {
    return this.productStore.productList.slice(0, 6)
  }

  productsByCat(id: int) {
    return this.productStore.productList.slice(id, id + 6)
  }

  get taxonomies(): ITaxonomy[] {
    return data_taxonomies
  }

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
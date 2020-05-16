<template>
  <q-page class="page-index">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <!-- <q-card>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>

          <q-separator />

          <q-tabs
            v-model="tab"
            dense
            class="bg-grey-3"
            align="justify"
            narrow-indicator
          >
            <q-tab name="mails" label="Mails" />
            <q-tab name="alarms" label="Alarms" />
            <q-tab name="movies" label="Movies" />
          </q-tabs>
        </q-card> -->

        <!-- <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3"
          align="justify"
          narrow-indicator
        >
          <q-tab name="tab-1" label="TAB1" />
          <q-tab name="tab-2" label="TAB2" />
        </q-tabs> -->

        <q-card>
          <q-tab-panels v-model="tab" animated swipeable infinite>
            <q-tab-panel name="mails">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>

          <q-separator />

          <q-tabs
            v-model="tab"
            dense
            class="bg-grey-3"
            align="justify"
            narrow-indicator
          >
            <q-tab name="mails" label="Mails" />
            <q-tab name="alarms" label="Alarms" />
            <q-tab name="movies" label="Movies" />
          </q-tabs>
        </q-card>
        <pageIndex/>
      </div>
    </div>
  </q-page>
</template>

<script  lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getModule } from 'vuex-module-decorators'
import ProductStore from 'src/store/ProductStore'
import { Product } from 'src/models/Product'
import { clone } from 'src/js/functions1'
import { ITaxonomy, data_taxonomies } from 'src/class/data_taxonomies'
import pageIndex from 'src/pages/Index.vue'


@Component({
  components: { pageIndex }
})
export default class IndexPage2 extends Vue {
  constructor() {
    super()
  }

  tab: string = 'mails'

  slide: int = 1
  slide2: int = 1

  productStore = getModule(ProductStore, this.$store)

  created() {

  }

  mounted() {
    this.productStore.Update()
  }

  get products(): Product[] {
    return this.productStore.productList.slice(0, 6)
  }

  get slides(): string[] {

    let local: string[] = [
      'statics/slides/WebBanner_1.jpg',
      'statics/slides/Artboard-2.png',
      'statics/slides/slider_teplovizor.png',
      'statics/slides/Banner_3.png',
      'statics/slides/Banner_4.png',
    ]

    // return this.productStore.slides.map(s => s.sizes.large)
    return local
  }

  get taxonomies(): ITaxonomy[] {
    return data_taxonomies
  }

}
</script>

<style lang="scss">
</style>
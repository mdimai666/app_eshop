<template>
  <q-page class="page-index">
    <div class="q-pa-md1">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        autoplay
        swipeable
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        height="50vw"
      >
        <q-carousel-slide
          v-for="(slide, i) in slides"
          :key="i"
          :name="i"
          :img-src="slide"
        />
      </q-carousel>

      <div class="q-pa-sm">
        <q-expansion-item
          dense
          :duration="300"
          icon="add"
          label="Категории"
          caption="показать все категории"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              <!-- taxonomies -->
              <div class="taxonomies">
                <div class="col-12">
                  <div class="row">
                    <div
                      class="item col-4"
                      v-for="tax in taxonomies"
                      :key="tax.slug"
                    >
                      <div class="column flex-center q-mb-sm">
                        <span
                          class="tax_icon bg-contain"
                          :style="{ 'background-image': `url(${tax.img})` }"
                        ></span>
                        <div class="text text-center">{{ tax.text }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- //taxonomies -->
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>

      <!-- <BlockOurServices /> -->

      <ProductList1 />

      <!-- <NewsCarousel v-model="slide2" /> -->
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

@Component
export default class IndexPage extends Vue {
  constructor() {
    super()
  }

  slide: int = 1
  slide2: int = 1

  productStore = getModule(ProductStore, this.$store)

  created() {

  }

  mounted() {
    // this.productStore.Update()
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
.page-index {
  .taxonomies {
    .tax_icon {
      display: inline-block;
      width: 24px;
      height: 24px;
      transition: all 0.3 ease;
    }
    .text {
      font-size: 11px;
    }
  }
  .q-expansion-item.q-item-type.q-expansion-item--collapsed {
    .q-expansion-item__content.relative-position {
      display: block !important;
      height: 50px !important;
      overflow: hidden;

      .col-4 {
        width: 20%;
      }

      .taxonomies {
        .tax_icon {
          width: 30px;
          height: 30px;
        }
        .text {
          display: none;
        }
      }
    }
  }
}
</style>
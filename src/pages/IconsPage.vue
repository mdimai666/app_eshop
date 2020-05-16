<template>
  <q-page class="page-icons">
    <div class="q-pa-md1 bg-grey">
      <!-- item -->
      <div class="row icon" v-for="icon in icons">
        <div class="col q-mb-md">
          <div class="row">
            <div class="col-6 flex flex-center">
              <img :src="`statics/${icon}`" />
            </div>
            <div class="col-6 q-pt-lg">
              {{ icon }}
            </div>
          </div>
        </div>
      </div>
      <!-- //item -->
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


@Component
export default class IconsPage extends Vue {
  constructor() {
    super()
  }

  get icons(): string[] {

    let items: string[] = [

      '23.svg',
      'add.svg',
      'app-logo-128x128.png',
      'bank-building.svg',
      'black-and-white-credit-cards.svg',
      'clock1.svg',
      'coin-stack.svg',
      'cooling-fan.svg',
      'cooperate.svg',
      'delivery-man.svg',
      'delivery-truck (1).svg',
      'delivery-truck (2).svg',
      'delivery-truck.svg',
      'driller.svg',
      'empty-photo.jpg',
      'engine.svg',
      'evaluate.svg',
      'hydro-power.svg',
      'ice.svg',
      'instagram (1).svg',
      'jpg-file-format-variant.svg',
      'left-arrow.svg',
      'left-quote.svg',
      'like.svg',
      'list-with-dots.svg',
      'logo.svg',
      'logoFooter.svg',
      'man-user.svg',
      'merit.svg',
      'online-pay.svg',
      'percentage.svg',
      'piggy-bank.svg',
      'place.svg',
      'polisher.svg',
      'right-arrow.svg',
      'right-chevron.svg',
      'saw.svg',
      'search.svg',
      'shopping-cart.svg',
      'shovel.svg',
      'target.svg',
      'tel.svg',
      'wallet(2).svg',
    ]

    return items
  }

}
</script>

<style lang="scss">
.page-icons {
  .icon {
    img {
      height: 50px;
      width: auto;
    }
  }
}
</style>
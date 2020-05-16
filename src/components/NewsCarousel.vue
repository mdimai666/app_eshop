
<template>
  <!-- NEWS -->
  <q-carousel
    :value="value"
    @input="Input"
    transition-prev="slide-right"
    transition-next="slide-left"
    animated
    control-color="primary"
    class="rounded-borders"
    swipeable=""
    arrows=""
    autoplay=""
    height="60vw"
  >
    <q-carousel-slide
      :name="slide"
      class="1column 1no-wrap 1flex-center "
      v-for="slide in [1, 2, 3, 4, 5]"
      :key="slide"
      img-src="https://i0.wp.com/tcrent.ru/wp-content/uploads/2019/12/malina.png?fit=600%2C311&ssl=1"
    >
      <div class="absolute-bottom custom-caption">
        Химчистка мягкой мебели по выгодной цене
      </div>
    </q-carousel-slide>
  </q-carousel>

  <!-- //NEWS -->
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Model, Prop, Emit, Provide, Watch } from 'vue-property-decorator'
import { emit } from 'cluster'

@Component
export default class NewsCarousel extends Vue {

  @Model('change', { type: Number, default: 0 })
  readonly value!: number

  constructor() {
    super()
  }

  Input(val: bool) {
    this.$emit('change', val)
  }

}
</script>

<style lang="scss">
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

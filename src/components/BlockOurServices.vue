
<template>
  <!-- НАШИ УСЛУГИ -->
  <div class="bg-black q-pa-sm text-white our-services">
    <h6 class="text-white q-ma-none">НАШИ УСЛУГИ</h6>
    <div class="col-12 q-pa-sm">
      <div class="row">
        <div class="col-3">
          <div class="inner flex flex-row flex-center text-center">
            <img src="statics/ic_hammer_drill.png" alt="" style="" />
            Аренда инструмента
          </div>
        </div>
        <div class="col-3">
          <div class="inner flex flex-row flex-center text-center">
            <img src="statics/ic_maintenance.png" alt="" style="" />
            Сервисный центр
          </div>
        </div>
        <div class="col-3">
          <div class="inner flex flex-row flex-center text-center">
            <img src="statics/ic_welding.png" alt="" style="" />
            Аргонная сварка
          </div>
        </div>
        <div class="col-3">
          <div class="inner flex flex-row flex-center text-center">
            <img src="statics/ic_knife.png" alt="" style="" />
            Цех заточки
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //НАШИ УСЛУГИ -->
</template>

<script lang="ts">
import Component from 'vue-class-component'
import Vue from 'vue'
import { Model, Prop, Emit, Provide, Watch } from 'vue-property-decorator'
import { emit } from 'cluster'

@Component
export default class BlockOurServices extends Vue {

  @Model('change', { type: Boolean, default: false })
  readonly value!: boolean

  constructor() {
    super()
  }

  Input(val: bool) {
    this.$emit('change', val)
  }

}
</script>

<style lang="scss">
.our-services {
  .inner {
    font-size: 11px;
    img {
      width: 45px;
      height: 45px;
    }
  }
}
</style>
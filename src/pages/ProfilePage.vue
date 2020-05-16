<template>
  <q-page class="q-pa-md">
    <!-- <BlockOurServices /> -->

    <div class="text-center q-gutter-sm">
      <q-btn
        color="accent"
        text-color="black"
        class="text-bold q-px-lg"
        label="Промокод"
        unelevated=""
      />
      <q-btn
        color="accent"
        text-color="black"
        class="text-bold q-px-lg"
        label="На сайт"
        unelevated=""
      />
    </div>

    <section class="flex flex-center q-pa-lg">
      <q-form class="q-gutter-md">
        <div class="text-center">
          <img src="statics/undraw_account_490v.svg" class="" width="33%" />
        </div>

        <q-input
          filled
          type="text"
          v-model="phone"
          label="Телефон *"
          hint="Телефон"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Требуется']"
        />
        <q-input
          filled
          type="text"
          v-model="address"
          label="Адрес"
          lazy-rules
          :rules="[
            val => (val !== null && val !== '') || 'Требуется',
            val =>
              (val !== null && val.length > 9 && val < 100) ||
              'Введите корректный адрес'
          ]"
        />
        <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
        <div class="text-center">
          <q-btn
            label="Сохранить"
            type="submit"
            color="primary"
            unelevated=""
          />
        </div>
      </q-form>
    </section>
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
export default class ProfilePage extends Vue {

  phone: string = '999 999 999'
  address: string = 'Ленина 1'

  constructor() {
    super()
  }

  productStore = getModule(ProductStore, this.$store)

  created() {
  }

  mounted() {
  }

  ///////////////////////////////////////
}

</script>

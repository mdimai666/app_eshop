<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar class="header1">
        <q-btn
          v-if="$route.path !== '/'"
          class="xs"
          flat
          round
          dense
          icon="keyboard_arrow_left"
          @click="$router.back()"
        />
        <q-btn v-else class="xs" flat round dense :ripple="false" />

        <q-toolbar-title class="text-center">
          <a href="#/">
            <img
              src="statics/logo.svg"
              alt=""
              class=""
              style="height:40px;position:relative;top:3px;"
            />
          </a>
        </q-toolbar-title>

        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        /> -->

        <q-btn flat dense round disable />

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      overlay
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-2"
    >
      <Sidebar1 />
    </q-drawer> -->

    <q-footer class="bg-white text-black" :elevated="false">
      <q-toolbar class="">
        <q-space />
        <q-tabs
          v-model="aTab"
          class="text-black d-tabs-footer"
          dense
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <!-- <q-tab name="index" icon="mail" /> -->
          <q-route-tab label="Меню" name="index" icon="reorder" to="/" />
          <q-route-tab
            label="Профиль"
            name="profile"
            icon="account_circle"
            to="profile"
          />
          <q-route-tab
            label="Контакты"
            name="contacts"
            icon="explore"
            to="contacts"
          />
          <q-route-tab
            label="Корзина"
            name="cart"
            icon="shopping_cart"
            to="cart"
          >
            <q-badge color="red" floating>2</q-badge>
          </q-route-tab>
          <!-- <q-tab name="settings" icon="alarm" /> -->
        </q-tabs>
        <q-space />
      </q-toolbar>
    </q-footer>

    <!-- <q-page-container>
      <transition
        name="transitions"
        enter-active-class="animated slideInRight"
        enter="animated zoomIn"
        leave-active-class="animated slideOutLeft"
        mode="out-in"
      >
        <router-view />
      </transition>
    </q-page-container> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script  lang="ts">
// Vue
import Vue from 'vue'
import Component from 'vue-class-component'

// Store modules
import { getModule } from 'vuex-module-decorators'
import LayoutStoreModule, { TABS } from './LayoutStoreModule'

// @Component
// export default class MyLayout extends Vue {
//   leftDrawerOpen = false;
// }

@Component
export default class MyLayout extends Vue {
  store = getModule(LayoutStoreModule);

  get leftDrawerOpen() {
    return this.store.leftDrawerOpen
  }

  set leftDrawerOpen(value: boolean) {
    this.store.setLeftDrawerOpen(value)
  }
  //

  get aTab() {
    return this.store.tab
  }

  set aTab(value: TABS) {
    this.store.setTab(value)
  }

}

// export default Vue.extend({
//   name: 'MyLayout',

//   data () {
//     return {
//       leftDrawerOpen: false
//     }
//   }
// })
</script>

<style lang="scss" scoped>
.header1 /deep/ {
  .q-btn .q-icon {
    font-size: 2.1em;
  }
}

.d-tabs-footer /deep/ {
  .q-tab__label {
    text-transform: none;
    font-size: 12px;
  }
}
</style>

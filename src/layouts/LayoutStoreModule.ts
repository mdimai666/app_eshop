import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import Store from 'src/store/index'

export type TABS = 'index' | 'settings'

@Module({
  dynamic: true,
  name: 'layout',
  namespaced: true,
  store: Store
})
export default class LayoutStoreModule extends VuexModule {
  public leftDrawerOpen = false;
  public tab: TABS = 'index'

  @Mutation
  public SET_LEFT_DRAWER_OPEN(value: boolean) {
    this.leftDrawerOpen = value
  }

  @Action
  public setLeftDrawerOpen(value: boolean) {
    this.SET_LEFT_DRAWER_OPEN(value)
  }

  @Action
  public toggleLeftDrawer() {
    this.SET_LEFT_DRAWER_OPEN(!this.leftDrawerOpen)
  }

  ///

  @Mutation
  public SET_TAB(value: TABS) {
    this.tab = value
  }

  @Action
  public setTab(value: TABS) {
    this.SET_TAB(value)
  }

}
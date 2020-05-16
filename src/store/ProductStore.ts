import Vue from 'vue'
import * as Vuex from 'vuex'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
// https://github.com/championswimmer/vuex-module-decorators#hello-decorators-

import store from '.'
import { productsWithAcf } from 'src/class/data_productsWithACF'
import { Product } from 'src/models/Product'
import { data_indexpage_acf } from '../class/data_indexPage_acf'
import { Wordpress } from 'src/class/Wordpress.Index.Acf'
import { Wordpress as WPImpl } from 'src/class/Wordpress.Index.Acf.Impl'


@Module({
    namespaced: true,
    name: 'product',
    store,
    stateFactory: true,
})
export default class ProductStore extends VuexModule {

    productList: Product[] = []
    indexpage_acf: WPImpl.ImplAcf_Index = new WPImpl.ImplAcf_Index

    // @Mutation increment(delta: number) { this.count += delta }
    // @Mutation decrement(delta: number) { this.count -= delta }

    @Mutation updateIndexPage(index: Wordpress.Acf_Index) {
        this.indexpage_acf = index
    }

    // action 'incr' commits mutation 'increment' when done with return value as payload
    @Action({ commit: 'increment' }) incr() {
        return 5
    }
    // action 'decr' commits mutation 'decrement' when done with return value as payload
    @Action({ commit: 'decrement' }) decr() {
        return 5
    }

    @Mutation
    AddProduct(product: Product) {
        if (!this.productList.find(s => s.id == product.id))
            this.productList.push(product)
    }

    @Action
    async Update() {
        let json = productsWithAcf
        for (let e of json) {
            let product = new Product(e as any)
            this.AddProduct(product)
        }

        this.updateIndexPage(data_indexpage_acf)

    }

    get slides(): Wordpress.Banner[] {


        return this.indexpage_acf.banners
    }

    get getProduct() {
        return (id: int): Product | undefined => {
            return this.productList.find(s => s.id == id)
        }
    }

    // @Action
    // async GetProduct(id: int) {
    //     // return this._productList.find(s=>s.id == id)

    // }

}
// https://app.quicktype.io/?l=ts

import * as W from 'src/class/Wordpress.IPage'
import { Wordpress as WP } from './Wordpress.Common'
import { Wordpress as WpImpl } from './Wordpress.Common.impl'

export namespace Wordpress {
    export class Page implements W.Wordpress.IPage {
        public id: number = -1
        public date: Date = new Date(0)
        public date_gmt: Date = new Date(0)
        public guid: WP.Common.Rendered = new WpImpl.Common.Impl.ImplRendered
        public modified: Date = new Date(0)
        public modified_gmt: Date = new Date(0)
        public slug: string = ''
        public status: string = ''
        public type: string = ''
        public link: string = ''
        public title: WP.Common.Rendered = new WpImpl.Common.Impl.ImplRendered
        public content: WP.Common.Content = new WpImpl.Common.Impl.ImplContent
        public excerpt: WP.Common.Content = new WpImpl.Common.Impl.ImplContent
        public author: number = 0
        public featured_media: number = 0
        public parent: number = 0
        public menu_order: number = 0
        public comment_status: string = ''
        public ping_status: string = ''
        public template: string = ''
        public meta: WP.Common.IMeta = new WpImpl.Common.Impl.ImplIMeta
        // public acf: WP.Common.Acf
        public jetpack_sharing_enabled: boolean = false
        public jetpack_shortlink: string = ''
        public "jetpack-related-posts": any[]
        public _links: WP.Common.Links = new WpImpl.Common.Impl.ImplLinks

        constructor(page: Partial<Page>) {
            Object.assign(this, page)
        }
    }


}
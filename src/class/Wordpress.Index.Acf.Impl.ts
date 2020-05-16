// https://app.quicktype.io/?l=ts

import { Wordpress as WP } from './Wordpress.Index.Acf'
import { Wordpress as Common } from './Wordpress.Common'

export namespace Wordpress {

    export class ImplAcf_Index implements WP.Acf_Index {
        public logo: string = ''
        public tel: string = ''
        public work: string = ''
        public banners: WP.Banner[] = []
        public services: WP.Banners2[] = []
        public sections: WP.Section[] = []
        public footer_logo: string = ''
        public partners: WP.Partner[] = []
        public comment_advantages: string = ''
        public catalog_banner: string = ''
        public catalog_banner_link: string = ''
        public videos: boolean = false
        public manufacturers: WP.Manufacturer[] = []
        public instagram: string = ''
        public latitude: string = ''
        public longtitude: string = ''
        public address: string = ''
        public cities: WP.City[] = []
        public scr_blocks: string = ''
        public main_content: string = ''
        public banners2: WP.Banners2[] = []
    }

    export class ImplBanner implements WP.Banner {
        public ID: number = 0
        public id: number = 0
        public title: string = ''
        public filename: string = ''
        public filesize: number = 0
        public url: string = ''
        public link: string = ''
        public alt: string = ''
        public author: string = ''
        public description: string = ''
        public caption: string = ''
        public name: string = ''
        public status: string = ''
        public uploaded_to: number = 0
        public date: Date = new Date(0)
        public modified: Date = new Date(0)
        public menu_order: number = 0
        public mime_type: string = ''
        public type: string = ''
        public subtype: string = ''
        public icon: string = ''
        public width: number = 0
        public height: number = 0
        public sizes: WP.Sizes = new ImplSizes
    }

    export class ImplSizes implements WP.Sizes {
        public thumbnail: string = ''
        public "thumbnail-width": number = 0
        public "thumbnail-height": number = 0
        public medium: string = ''
        public "medium-width": number = 0
        public "medium-height": number = 0
        public medium_large: string = ''
        public "medium_large-width": number = 0
        public "medium_large-height": number = 0
        public large: string = ''
        public "large-width": number = 0
        public "large-height": number = 0
        public "1536x1536": string = ''
        public "1536x1536-width": number = 0
        public "1536x1536-height": number = 0
        public "2048x2048": string = ''
        public "2048x2048-width": number = 0
        public "2048x2048-height": number = 0
    }

    export class ImplBanners2 implements WP.Banners2 {
        public block_img: string = ''
        public block_title: string = ''
        public block_text: string = ''
        public block_link?: string = ''
    }

    export class ImplCity implements WP.City {
        public city_name: string = ''
        public city_address: string = ''
        public city_tel: string = ''
        public city_work: string = ''
    }

    export class ImplManufacturer implements WP.Manufacturer {
        public partner_logo: boolean | string = ''
        public partner_link: string = ''
    }

    export class ImplPartner implements WP.Partner {
        public block_img: string = ''
    }

    export class ImplSection implements WP.Section {
        public acf_fc_layout: string = ''
        public scr_bg: string = ''
        public scr_title: string = ''
        public scr_blocks: WP.ScrBlock[] = []
    }

    export class ImplScrBlock implements WP.ScrBlock {
        public block_icon?: string = ''
        public block_title?: string = ''
        public icon_link?: string = ''
        public ID?: number = 0
        public post_author?: string = ''
        public post_date?: Date = new Date(0)
        public post_date_gmt?: Date = new Date(0)
        public post_content?: string = ''
        public post_title?: string = ''
        public post_excerpt?: string = ''
        public post_status?: string = ''
        public comment_status?: string = ''
        public ping_status?: string = ''
        public post_password?: string = ''
        public post_name?: string = ''
        public to_ping?: string = ''
        public pinged?: string = ''
        public post_modified?: Date = new Date(0)
        public post_modified_gmt?: Date = new Date(0)
        public post_content_filtered?: string = ''
        public post_parent?: number = 0
        public guid?: string = ''
        public menu_order?: number = 0
        public post_type?: string = ''
        public post_mime_type?: string = ''
        public comment_count?: string = ''
        public filter?: string = ''
        public block_img?: string = ''
        public block_text?: string = ''
    }

}
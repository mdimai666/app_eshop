// https://app.quicktype.io/?

// https://app.quicktype.io/?

// import { Wordpress as } from './Wordpress.Index.Acf'
// import { Wordpress as Common } from './Wordpress.Common'

export namespace Wordpress {

    export interface Acf_Index {
        logo: string
        tel: string
        work: string
        banners: Banner[]
        services: Banners2[]
        sections: Section[]
        footer_logo: string
        partners: Partner[]
        comment_advantages: string
        catalog_banner: string
        catalog_banner_link: string
        videos: boolean
        manufacturers: Manufacturer[]
        instagram: string
        latitude: string
        longtitude: string
        address: string
        cities: City[]
        scr_blocks: string
        main_content: string
        banners2: Banners2[]
    }

    export interface Banner {
        ID: number
        id: number
        title: string
        filename: string
        filesize: number
        url: string
        link: string
        alt: string
        author: string
        description: string
        caption: string
        name: string
        status: string
        uploaded_to: number
        date: Date
        modified: Date
        menu_order: number
        mime_type: string
        type: string
        subtype: string
        icon: string
        width: number
        height: number
        sizes: Sizes
    }

    export interface Sizes {
        thumbnail: string
        "thumbnail-width": number
        "thumbnail-height": number
        medium: string
        "medium-width": number
        "medium-height": number
        medium_large: string
        "medium_large-width": number
        "medium_large-height": number
        large: string
        "large-width": number
        "large-height": number
        "1536x1536": string
        "1536x1536-width": number
        "1536x1536-height": number
        "2048x2048": string
        "2048x2048-width": number
        "2048x2048-height": number
    }

    export interface Banners2 {
        block_img: string
        block_title: string
        block_text: string
        block_link?: string
    }

    export interface City {
        city_name: string
        city_address: string
        city_tel: string
        city_work: string
    }

    export interface Manufacturer {
        partner_logo: boolean | string
        partner_link: string
    }

    export interface Partner {
        block_img: string
    }

    export interface Section {
        acf_fc_layout: string
        scr_bg: string
        scr_title: string
        scr_blocks: ScrBlock[]
    }

    export interface ScrBlock {
        block_icon?: string
        block_title?: string
        icon_link?: string
        ID?: number
        post_author?: string
        post_date?: Date
        post_date_gmt?: Date
        post_content?: string
        post_title?: string
        post_excerpt?: string
        post_status?: string
        comment_status?: string
        ping_status?: string
        post_password?: string
        post_name?: string
        to_ping?: string
        pinged?: string
        post_modified?: Date
        post_modified_gmt?: Date
        post_content_filtered?: string
        post_parent?: number
        guid?: string
        menu_order?: number
        post_type?: string
        post_mime_type?: string
        comment_count?: string
        filter?: string
        block_img?: string
        block_text?: string
    }

}
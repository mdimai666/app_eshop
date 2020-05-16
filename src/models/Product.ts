import { stripHtml } from 'src/js/functions1'
import { Wordpress as Common } from 'src/class/Wordpress.Common.impl'

export namespace Wordpress {
    export interface Product {
        id: number
        date: Date
        date_gmt: Date
        guid: Rendered
        modified: Date
        modified_gmt: Date
        slug: string
        status: string
        type: string
        link: string
        title: Rendered
        content: Content
        featured_media: number
        template: string
        jetpack_sharing_enabled: boolean
        _links: Links

        acf: Wordpress.ACF.ACF
    }

    export interface Links {
        self: Link[]
        collection: Link[]
        Href: Link[]
        "wp:attachment": Link[]
        curies: Cury[]
    }

    export interface Link {
        href: string
    }

    export interface Cury {
        name: string
        href: string
        templated: boolean
    }

    export interface Content {
        rendered: string
        protected: boolean
    }

    export interface Rendered {
        rendered: string
    }
}

export namespace Wordpress {
    export namespace ACF {
        export interface ACF {
            post_img: string
            post_gallery: PostGallery[]
            post_desc: string
            post_rent: string
            post_price: string
            post_pickup: string
            post_pickup_address: string
            post_lat: string
            post_lng: string
            post_tech: PostTech[]
            post_city_delivery: string
            post_moment_delivery: string
        }

        export interface PostGallery {
            gallery_img: string
        }

        export interface PostTech {
            tech_list: TechList[]
        }

        export interface TechList {
            tech_name: string
            tech_value: string
        }
    }
}

export interface IProduct {
    id: number
    date: Date
    guid: Wordpress.Rendered
    modified: Date
    slug: string

    status: EPostStatus
    title: string

    img: string
    gallery: Wordpress.ACF.PostGallery[]
    desc: string
    rent: string
    price: string
    pickup: string
    pickup_address: string
    lat: string
    lng: string
    tech: Wordpress.ACF.PostTech[]
    city_delivery: string
    moment_delivery: string
}

export enum EPostStatus {
    PUBLISH = 'publish',
    FUTURE = 'future',
    DRAFT = 'draft',
    PENDING = 'pending',
    PRIVATE = 'private',
    TRASH = 'trash',
    AUTODRAFT = 'auto-draft',
    INHERIT = 'inherit',
}

export class Product implements IProduct {
    public id: number = 0
    public date: Date = new Date(0)
    public guid: Wordpress.Rendered = new Common.Common.Impl.ImplRendered()
    public modified: Date = new Date(0)
    public slug: string = ''
    public status: EPostStatus = EPostStatus.DRAFT
    public title: string = ''

    public img: string = ''
    public gallery: Wordpress.ACF.PostGallery[] = []
    public desc: string = ''
    public rent: string = ''
    public price: string = ''
    public pickup: string = ''
    public pickup_address: string = ''
    public lat: string = ''
    public lng: string = ''
    public tech: Wordpress.ACF.PostTech[] = []
    public city_delivery: string = ''
    public moment_delivery: string = ''

    constructor(wpProduct?: Partial<Wordpress.Product>) {
        // this.id = wpProduct.id
        // this.date = wpProduct.date
        // this.guid = wpProduct.guid
        // this.modified = wpProduct.modified
        // this.slug = wpProduct.slug

        // this.status = this.statusToEnum(wpProduct.status)
        // this.title = stripHtml(wpProduct.title.rendered)

        // this.img = wpProduct.acf.post_img
        // this.gallery = wpProduct.acf.post_gallery;
        // this.desc = wpProduct.acf.post_desc
        // this.rent = wpProduct.acf.post_rent
        // this.price = wpProduct.acf.post_price
        // this.pickup = wpProduct.acf.post_pickup
        // this.pickup_address = wpProduct.acf.post_pickup_address
        // this.lat = wpProduct.acf.post_lat
        // this.lng = wpProduct.acf.post_lng
        // this.tech = wpProduct.acf.post_tech
        // this.city_delivery = wpProduct.acf.post_city_delivery
        // this.moment_delivery = wpProduct.acf.post_moment_delivery

        Object.assign(this, wpProduct)

        if (wpProduct) {
            if (wpProduct.status) this.status = this.statusToEnum(wpProduct.status)
            if (wpProduct.title) this.title = stripHtml(wpProduct.title.rendered)

            if (wpProduct.acf) {
                this.img = wpProduct.acf.post_img
                this.gallery = wpProduct.acf.post_gallery
                this.desc = wpProduct.acf.post_desc
                this.rent = wpProduct.acf.post_rent
                this.price = wpProduct.acf.post_price
                this.pickup = wpProduct.acf.post_pickup
                this.pickup_address = wpProduct.acf.post_pickup_address
                this.lat = wpProduct.acf.post_lat
                this.lng = wpProduct.acf.post_lng
                this.tech = wpProduct.acf.post_tech
                this.city_delivery = wpProduct.acf.post_city_delivery
                this.moment_delivery = wpProduct.acf.post_moment_delivery
            }
        }

    }

    statusToEnum(status: string): EPostStatus {
        return (<any>EPostStatus)[status]
    }
}
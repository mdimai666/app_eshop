// https://app.quicktype.io/?l=ts

import { Wordpress as WP } from './Wordpress.Common'


export namespace Wordpress {
    export interface IPage {
        id: number
        date: Date
        date_gmt: Date
        guid: WP.Common.Rendered
        modified: Date
        modified_gmt: Date
        slug: string
        status: string
        type: string
        link: string
        title: WP.Common.Rendered
        content: WP.Common.Content
        excerpt: WP.Common.Content
        author: number
        featured_media: number
        parent: number
        menu_order: number
        comment_status: string
        ping_status: string
        template: string
        meta: WP.Common.IMeta
        // acf: WP.Common.Acf
        jetpack_sharing_enabled: boolean
        jetpack_shortlink: string
        "jetpack-related-posts": any[]
        _links: WP.Common.Links
    }

}
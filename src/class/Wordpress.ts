// https://app.quicktype.io/?l=ts

export namespace Wordpress {

    export class Post implements IPost {
        id: number = -1
        date: Date = new Date(0)
        date_gmt: Date = new Date(0)
        guid: GUID = new GUID
        modified: Date = new Date(0)
        modified_gmt: Date = new Date(0)
        slug: string = ''
        status: string = ''
        type: string = ''
        link: string = ''
        title: GUID = new GUID
        content: Content = new Content
        excerpt: Content = new Content
        author: number = -1
        featured_media: number = -1
        comment_status: string = ''
        ping_status: string = ''
        sticky: boolean = false
        template: string = ''
        format: string = ''
        meta: Meta = new Meta
        categories: number[] = []
        tags: any[] = []
        jetpack_featured_media_url?: string | undefined
        jetpack_publicize_connections?: any[] | undefined
        jetpack_sharing_enabled?: boolean | undefined
        jetpack_shortlink?: string | undefined
        "jetpack-related-posts"?: JetpackRelatedPost[] | undefined
        _links?: Links | undefined

        constructor(post?: Partial<IPost>) {
            if (post) Object.assign(this, post)
        }

    }

    export interface IPost {
        id: number
        date: Date
        date_gmt: Date
        guid: IGUID
        modified: Date
        modified_gmt: Date
        slug: string
        status: string
        type: string
        link: string
        title: IGUID
        content: IContent
        excerpt: IContent
        author: number
        featured_media: number
        comment_status: string
        ping_status: string
        sticky: boolean
        template: string
        format: string
        meta: IMeta
        categories: number[]
        tags: any[]
        jetpack_featured_media_url?: string
        jetpack_publicize_connections?: any[]
        jetpack_sharing_enabled?: boolean
        jetpack_shortlink?: string
        // "jetpack-related-posts"?: JetpackRelatedPost[]
        _links?: Links
    }



    export interface Links {
        self: Link[]
        collection: Link[]
        about: Link[]
        author: Author[]
        replies: Author[]
        "version-history": VersionHistory[]
        "predecessor-version": PredecessorVersion[]
        "wp:attachment": Link[]
        "wp:term": WpTerm[]
        curies: Cury[]
    }

    export interface Link {
        href: string
    }

    export interface Author {
        embeddable: boolean
        href: string
    }

    export interface Cury {
        name: string
        href: string
        templated: boolean
    }

    export interface PredecessorVersion {
        id: number
        href: string
    }

    export interface VersionHistory {
        count: number
        href: string
    }

    export interface WpTerm {
        taxonomy: string
        embeddable: boolean
        href: string
    }

    export class Content implements IContent {
        rendered: string = ''
        protected: boolean = false


    }

    export interface IContent {
        rendered: string
        protected: boolean
    }

    export class GUID implements IGUID {
        rendered: string = ''
    }
    export interface IGUID {
        rendered: string
    }

    export interface JetpackRelatedPost {
        id: number
        url: string
        url_meta: URLMeta
        title: string
        date: string
        format: boolean
        excerpt: string
        rel: string
        context: string
        img: Img
        classes: any[]
    }

    export interface Img {
        alt_text: string
        src: string
        width: number
        height: number
    }

    export interface URLMeta {
        origin: number
        position: number
    }

    export class Meta implements IMeta {
        spay_email: string = ''
        jetpack_publicize_message: string = ''


    }

    export interface IMeta {
        spay_email: string
        jetpack_publicize_message: string
    }

}
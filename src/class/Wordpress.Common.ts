// https://app.quicktype.io/?l=ts


export namespace Wordpress.Common {
    export interface Links {
        self: Link[]
        collection: Link[]
        about: Link[]
        author: Author[]
        replies: Author[]
        "version-history": VersionHistory[]
        "predecessor-version": PredecessorVersion[]
        "wp:attachment": Link[]
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

    export interface Acf {
    }

    export interface Content {
        rendered: string
        protected: boolean
    }

    export interface Rendered {
        rendered: string
    }

    export interface IMeta {
        spay_email: string
    }
}
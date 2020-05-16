// https://app.quicktype.io/?l=ts


export namespace Wordpress.Common.Impl {
    export class ImplLinks {
        public self: ImplLink[] = []
        public collection: ImplLink[] = []
        public about: ImplLink[] = []
        public author: ImplAuthor[] = []
        public replies: ImplAuthor[] = []
        public "version-history": ImplVersionHistory[] = []
        public "predecessor-version": ImplPredecessorVersion[] = []
        public "wp:attachment": ImplLink[] = []
        public curies: ImplCury[] = []
    }

    export class ImplLink {
        public href: string = ''
    }

    export class ImplAuthor {
        public embeddable: boolean = false
        public href: string = ''
    }

    export class ImplCury {
        public name: string = ''
        public href: string = ''
        public templated: boolean = false
    }

    export class ImplPredecessorVersion {
        public id: number = 0
        public href: string = ''
    }

    export class ImplVersionHistory {
        public count: number = 0
        public href: string = ''
    }

    export class ImplAcf {
    }

    export class ImplContent {
        public rendered: string = ''
        public protected: boolean = false
    }

    export class ImplRendered {
        public rendered: string = ''
    }

    export class ImplIMeta {
        public spay_email: string = ''
    }
}
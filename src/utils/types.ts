export interface InputProps {
    type: string;
    label: string;
    name: string;
    error?: boolean;
    errorMessage?: string;
    events?:any
    value?:string | number;
    isDisable?:boolean;
}

export interface ButtonProps {
    type: string;
    text: string;
    likeLink?: boolean;
    redLink?: boolean;
    id?: string;
    events?: { click: () =>void },
}

export interface ArrowButtonProps {
    type: string;
    toLeft?:boolean
}

export interface MessageInputBlockProps {
    events: { submit: (e:Event) =>void },
    name:string,
    error:boolean
}

export interface DndProps { DownloadButton?: string; name: string }

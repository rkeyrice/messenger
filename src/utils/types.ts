import Block from './Block';

export interface InputProps {
    type: string;
    label: string;
    name: string;
    error?: boolean;
    errorMessage?: string;
    events?: any
    value?: string | number;
    isDisable?: boolean;
}

export interface ButtonProps {
    type: string;
    text: string;
    likeLink?: boolean;
    redLink?: boolean;
    id?: string;
    events?: { click: () => void },
}

export interface ArrowButtonProps {
    type: string;
    toLeft?: boolean
}

export interface MessageInputBlockProps {
    events: { submit: (e: Event) => void },
    name: string,
    error: boolean
}

export enum Routes {
    Index = '/',
    Register = '/signup',
    Profile = '/profile',
    Chat = '/chat',
    ChangeProfile = '/change-profile',
    ChangePassword = '/change-password',
    Error500 = '/500',
    Error404 = '/404'
}

export interface IUser {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}

export interface DndProps { DownloadButton?: string; name: string }

export interface PersonCardProps {
    buttons?: ButtonProps[];
    inputs: InputProps[]
    changeAvatar?: boolean;
    popup?: Block;
}
export interface PasswordTypes {
    oldPassword: string,
    newPassword: string,
    repeatNewPassword: string,
}

export interface Chat {
    id: string,
    title: string,
    avatar: string,
    unread_count: number,
    last_message: string
}

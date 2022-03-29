export interface CategoriesDTO {
    id: string;
    href: string;
    icons: IIcons[];
    name: string;
}

interface IIcons {
    height: number;
    width: number;
    url: string;
}
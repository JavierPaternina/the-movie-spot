export type DescriptionModel = 'Slider' | 'Media';
export type TCardInfo = {
    id: string | number;
    title?: string;
    year?: string | number;
    media?: string;
    image?: string;
    MediaIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    mode: DescriptionModel;
};

export type TCardImage = Pick<TCardInfo, 'image' | 'title' | 'id'>; 
export type TCardDescription = Omit<TCardInfo, 'image'>;
export enum ThemeVariant {
    Light,
}

export type ColorT = {
    base: string;
    text: string;
    lightblue: string;
    blue: string;
    green: string;
};

export type FontWeightT = {
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
    black: string;
};

export type FontFamilyT = {
    base: string;
    heading: string;
};

export type ThemeT = {
    type: ThemeVariant;
    colors: ColorT;
    font: {
        weight: FontWeightT;
        family: FontFamilyT;
    };
    transition: {
        fast: string;
        normal: string;
        slow: string;
    };
};

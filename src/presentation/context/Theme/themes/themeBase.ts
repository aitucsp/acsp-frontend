import { ThemeT } from 'presentation/context/Theme/types';

const themeBase: Omit<ThemeT, 'type' | 'colors'> = {
    font: {
        weight: {
            regular: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            black: '900',
        },
        family: {
            base: 'SF Pro Display, sans-serif',
            heading: 'Graphik LCG, sans-serif',
        },
    },
    transition: {
        fast: '200ms',
        normal: '400ms',
        slow: '700ms',
    },
};

export default themeBase;

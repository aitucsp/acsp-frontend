import { ThemeT, ThemeVariant } from 'presentation/context/Theme/types';
import themeBase from './themeBase';

const light: ThemeT = {
    ...themeBase,
    type: ThemeVariant.Light,
    colors: {
        base: '#FFFFFF',
        text: '#13293D',
        lightblue: '#3E92CC',
        blue: '#2A628F',
        green: '#0DA16C',
    },
};

export default light;

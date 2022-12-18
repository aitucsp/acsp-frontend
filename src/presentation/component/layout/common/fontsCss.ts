import { css, SerializedStyles } from '@emotion/react';
import fontFace from 'polished/lib/mixins/fontFace';
import { ThemeT } from 'presentation/context/Theme';

const fontsCss = (theme: ThemeT): SerializedStyles => css`
    html,
    body {
        font-family: ${theme.font.family.base}, sans-serif;
    }

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFProDisplay-Regular',
        fileFormats: ['woff2', 'woff'],
        fontWeight: theme.font.weight.regular,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFProDisplay-Medium',
        fileFormats: ['woff2', 'woff'],
        fontWeight: theme.font.weight.medium,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFProDisplay-Semibold',
        fileFormats: ['woff2', 'woff'],
        fontWeight: theme.font.weight.semibold,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.base,
        fontFilePath: '/fonts/SFProDisplay-Bold',
        fileFormats: ['woff2', 'woff'],
        fontWeight: theme.font.weight.bold,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}

    ${fontFace({
        fontFamily: theme.font.family.heading,
        fontFilePath: '/fonts/GraphikLCG-Black',
        fileFormats: ['woff2', 'woff'],
        fontWeight: theme.font.weight.black,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    })}
`;

export default fontsCss;

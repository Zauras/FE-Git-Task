import { Theme } from '@emotion/react';

const theme: Theme = {
    colors: {
        primary: 'rgb(68, 117, 253)', //'#20b2fd', //'rgb(32, 178, 253)', //'#20b2fd', // rgb(32, 178, 253)
        primaryHover: '#128bce',
        primaryDisabled: '#6b73b1',

        secondary: '#fff',
        secondaryDisabled: '#BFBFBF',

        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',

        border: '#bbbec3',

        textHeader: '#000',
        textMain: '#606369',
        textInvert: '#fff',
        textSup: '#7A7E88',
        textBackgroundHighlight: '#FF9E30',

        backgroundDisabled: '#ccc',
        backgroundDim: '#e3e7ec',
        backgroundPrimary: '#ffffff',

        accentPrimarySolid: '#00adfd',
        accentPrimaryGradient: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
    },
    fontSize: {
        xs: '0.688rem', // 11px
        sm: '0.85rem', // 13px
        md: '0.938rem', // 15px
        lg: '1.063rem', // 17px
        xl: '1.188rem', // 19px
    },
    bps: {
        sm: '641px',
        md: '769px',
        lg: '1025px',
        xl: '1281px',
    },
};

export default theme;

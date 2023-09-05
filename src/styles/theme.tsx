import { Theme } from '@emotion/react';

const theme: Theme = {
    colors: {
        primary: 'rgb(32, 178, 253)', //'#20b2fd', //'rgb(32, 178, 253)', //'#20b2fd', // rgb(32, 178, 253)
        primaryHover: '#128bce',
        primaryDisabled: '#6b73b1',

        secondary: '#fff',
        secondaryDisabled: '#BFBFBF',

        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',

        border: '#c4c7cc',

        textHeader: '#000',
        textMain: '#4E5157',
        textInvert: '#fff',
        textSup: '#7A7E88',

        backgroundDim: '#e3e7ec',
        backgroundPrimary: '#ffffff',

        accentPrimarySolid: '#1DA1F2',
        accentPrimaryGradient: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
    },
    fontSize: {
        sm: '0.75rem', // 12px
        md: '0.875', // 14px
        lg: '1rem', // 16px
    },
    bps: {
        sm: '641px',
        md: '769px',
        lg: '1025px',
        xl: '1281px',
    },
};

export default theme;

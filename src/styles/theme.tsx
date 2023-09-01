import { Theme } from '@emotion/react';

const theme: Theme = {
    colors: {
        primary: '#1ea7fd',
        primaryDisabled: '#6b73b1',

        secondary: '#fff',
        secondaryDisabled: '#BFBFBF',

        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',

        border: '#D3D7DC',

        textHeader: '#000',
        textMain: '#4E5157',
        textInvert: '#fff',
        textSup: '#7A7E88',

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

import { Theme } from '@emotion/react';

const theme: Theme = {
    colors: {
        primary: '#3c6ed3',
        primaryDisabled: '#6b73b1',
        success: '#28a745',
        warning: '#ffc107',
        error: '#dc3545',

        borderGray: '#D3D7DC',

        textLightGray: '#7A7E88',
        textGray: '#4E5157',

        backgroundPrimary: '#ffffff',
        accentPrimarySolid: '#1DA1F2',
        accentPrimaryGradient: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
    },
    bps: {
        sm: '641px',
        md: '769px',
        lg: '1025px',
        xl: '1281px',
    },
};

export default theme;

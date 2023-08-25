import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: Record<string, string>;
        bps: Record<string, string>;
    }
}

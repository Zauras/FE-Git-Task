import { FC, PropsWithChildren } from 'react';

// Functional Component with children<PropsT>
type FCwC<ChildPropsT = Record<string, unknown>> = FC<PropsWithChildren<ChildPropsT>>;

export type { FCwC };

import { createContext, ReactNode, useMemo } from 'react';

const TableLoadingContext = createContext<{ isLoading: boolean }>({ isLoading: false });

const TableLoadingProvider = ({
    isLoading,
    children,
}: {
    isLoading: boolean | undefined;
    children: ReactNode;
}) => {
    const ctxValue = useMemo(() => {
        return { isLoading: Boolean(isLoading) };
    }, [isLoading]);

    return <TableLoadingContext.Provider value={ctxValue}>{children}</TableLoadingContext.Provider>;
};

export { TableLoadingContext, TableLoadingProvider };

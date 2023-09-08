import { createContext, ReactNode } from 'react';

const TableActionsContext = createContext<{
    // Functions:
    onRowClick?: null | ((e: void) => void);
}>({
    // Functions:
    onRowClick: null,
});

const TableActionsProvider = ({
    onRowClick = null,
    children,
}: {
    onRowClick?: null | ((e: void) => void);
    children: ReactNode;
}) => {
    return (
        <TableActionsContext.Provider value={{ onRowClick }}>
            {children}
        </TableActionsContext.Provider>
    );
};

export { TableActionsContext, TableActionsProvider };

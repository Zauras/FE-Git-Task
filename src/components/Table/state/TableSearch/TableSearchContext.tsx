import { createContext, ReactNode, useState } from 'react';

const defaultContextValue = {
    tableSearchValue: '',
    setTableSearchValue: (keyword: string) => null,
};

const TableSearchContext = createContext<{
    tableSearchValue: string;
    setTableSearchValue: (keyword: string) => void;
}>(defaultContextValue);

const TableSearchProvider = ({ children }: { children: ReactNode }) => {
    const [tableSearchStr, setTableSearchStr] = useState<string>(
        defaultContextValue.tableSearchValue
    );

    return (
        <TableSearchContext.Provider
            value={{
                tableSearchValue: tableSearchStr,
                setTableSearchValue: setTableSearchStr,
            }}
        >
            {children}
        </TableSearchContext.Provider>
    );
};
export { TableSearchContext, TableSearchProvider };

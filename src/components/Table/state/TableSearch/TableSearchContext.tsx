import { createContext, ReactNode, useState } from 'react';

const TableSearchContext = createContext<{
    tableSearchValue: string;
    setTableSearchValue: (keyword: string) => void;
}>({
    tableSearchValue: '',
    setTableSearchValue: (keyword: string) => null,
});

const TableSearchProvider = ({ children }: { children: ReactNode }) => {
    const [tableSearchStr, setTableSearchStr] = useState<string>('');

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

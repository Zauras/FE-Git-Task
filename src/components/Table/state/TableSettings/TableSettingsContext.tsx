import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

import { ITableSettingsProps } from '@/components/Table/models/config.models';
import { TableConfigContext } from '@/components/Table/state/TableConfig/TableConfigContext';

const TableSettingsContext = createContext<{
    // Data:
    isRowCountEnabled: boolean;
    isMultiSortEnabled: boolean;
    isSearchEnabled: boolean;
    // Functions:
    toggleIsSearchEnabled: () => void;
    toggleIsMultiSortEnabled: () => void;
    toggleIsRowCountEnabled: () => void;
    resetAllSettings: () => void;
}>({
    // Data:
    isRowCountEnabled: true,
    isMultiSortEnabled: true,
    isSearchEnabled: true,
    // Functions:
    toggleIsSearchEnabled: () => null,
    toggleIsMultiSortEnabled: () => null,
    toggleIsRowCountEnabled: () => null,
    resetAllSettings: () => null,
});

const defaultTableSettings = {
    isMultiSortEnabled: true,
    isRowCountEnabled: true,
    isSearchEnabled: true,
};

const TableSettingsProvider = ({
    overrideDefaultTableSettings = {},
    children,
}: {
    overrideDefaultTableSettings: ITableSettingsProps;
    children: ReactNode;
}) => {
    const initTableSettings = useMemo(
        () => ({ ...defaultTableSettings, ...overrideDefaultTableSettings }),
        [overrideDefaultTableSettings]
    );

    // Settings State:

    const [isRowCountEnabled, setIsRowCountEnabled] = useState<boolean>(
        initTableSettings.isRowCountEnabled
    );

    const [isMultiSortEnabled, setIsMultiSortEnabled] = useState<boolean>(
        initTableSettings.isMultiSortEnabled
    );

    const [isSearchEnabled, setIsSearchEnabled] = useState<boolean>(
        initTableSettings.isSearchEnabled
    );

    // Action Handlers:

    const toggleIsSearchEnabled = useCallback(() => {
        setIsSearchEnabled(!isSearchEnabled);
    }, [isSearchEnabled]);

    const toggleIsRowCountEnabled = useCallback(() => {
        setIsRowCountEnabled(!isRowCountEnabled);
    }, [isRowCountEnabled]);

    const toggleIsMultiSortEnabled = useCallback(() => {
        setIsMultiSortEnabled(!isMultiSortEnabled);
    }, [isMultiSortEnabled]);

    const resetAllSettings = useCallback(() => {
        setIsSearchEnabled(initTableSettings.isSearchEnabled);
        setIsRowCountEnabled(initTableSettings.isRowCountEnabled);
        setIsMultiSortEnabled(initTableSettings.isMultiSortEnabled);
    }, []);

    return (
        <TableSettingsContext.Provider
            value={{
                // Dynamic Settings:
                isRowCountEnabled,
                isMultiSortEnabled,
                isSearchEnabled,
                // Action Handler Functions:
                toggleIsSearchEnabled,
                toggleIsRowCountEnabled,
                toggleIsMultiSortEnabled,
                resetAllSettings,
            }}
        >
            {children}
        </TableSettingsContext.Provider>
    );
};

export { TableSettingsContext, TableSettingsProvider };

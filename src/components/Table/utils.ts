const generateListKey = (prefix: string | number = ''): string => {
    return `${prefix}_${new Date().getTime()}`;
};

export { generateListKey };

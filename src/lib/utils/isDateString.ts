export const isDateString = (str:string):boolean => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{1}Z$/;

    return dateRegex.test(str);
};

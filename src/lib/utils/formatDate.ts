export const formatDate = (inputDate:Date):string => {
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    return `${formattedDate}, ${formattedTime}`;
};
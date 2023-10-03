export function addTagToNumber(number: string) {
    const addTag = `No.${number.padStart(4, '0')}`
    return addTag;
}

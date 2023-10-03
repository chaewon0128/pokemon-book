export function addTagToNumber(number: number) {
    const addTag = `No.${String(number).padStart(4, '0')}`
    return addTag;
}

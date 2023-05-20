export const pushInto = <Item>(
    arr: Item[], 
    value: Item, 
    idx: number
): Item[] => {
    const _arr = Array.from(arr);
    _arr.splice(idx, 0, value);
    return _arr;
}

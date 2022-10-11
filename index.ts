const arr = [1, [2, [3, [4, [5,6,7,8]]]], 9, [10]];

type HardArr = Array<number | HardArr>

function arrSpread(arr: HardArr): Array<number> {
    if (!arr.length) return [];

    let res = [];

    const elem = arr[0];

    Array.isArray(elem) ? res = [...res, ...arrSpread(elem)] : res.push(elem);

    return [...res, ...arrSpread(arr.slice(1))];
}

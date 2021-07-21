function addTwoDigits(n: number): number {
    let nStr = n.toString();
    let nStr1 = nStr[0];
    let nStr2 = nStr[1];
    return parseInt(nStr1) + parseInt(nStr2)
}
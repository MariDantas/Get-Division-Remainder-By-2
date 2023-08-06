/**
 * @param {string} number
 */
export function evenOrOdd(number) {
    if (Number.parseInt(number, 10) % 2 === 0){
        return "even";
    }
    return "odd";
}
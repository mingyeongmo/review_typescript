// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message) {
    throw new Error(message);
}
// 반환 타입이 never로 추론된다.
function fail() {
    return error("Something failed");
}
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop() {
    while (true) {
    }
}

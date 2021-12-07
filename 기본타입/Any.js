var notSure = 4;
notSure.ifItExists(); // 성공, ifItExists 는 런타임엔 존재할 것입니다.
notSure.toFixed();
var prettySure = 4;
prettySure.toFixed(); // 오류: 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.
var list = [1, true, "free"];
list[1] = 100;
console.log(list[1]);

function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
unusable = null; // 성공 `--strictNullChecks` 을 사용하지 않을때만

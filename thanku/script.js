let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "最近总是闹矛盾,是我性格太奇怪了吗",
    "我想和他谈一谈", 
    "该怎么做才能和他在一起",
    "…也是理所当然的吧", 
    "这真的是我想要的吗？",
    "好想见他…", 
    "不应该这样…", 
    "他是我的全部",
    "道贤啊…"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 9 次变化）
    if (clickCount <= 9) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 8 次变化）
    if (clickCount === 1) mainImage.src = "images/strange.png"; // 奇怪
    if (clickCount === 2) mainImage.src = "images/talk.png";   // 谈话
    if (clickCount === 3) mainImage.src = "images/howtodo.png";   // 怎么做
    if (clickCount === 4) mainImage.src = "images/comprehensive.png";  // 理所当然
    if (clickCount === 5) mainImage.src = "images/wanna.png"; // 真的是我想要的吗
    if (clickCount === 6) mainImage.src = "images/miss.png";  // 想念
    if (clickCount === 7) mainImage.src = "images/fault.png";    // 不应该这样的
    if (clickCount === 8) mainImage.src = "images/faith.png"; // 全部
    if (clickCount >= 9) mainImage.src = "images/dohyun.png";  // 道贤啊

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">道贤啊,我想要的是你的真心</h1>
            <h2 class="yes-subtext">정성호 좋아해</h2>
            <img src="images/love.png" alt="爱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});
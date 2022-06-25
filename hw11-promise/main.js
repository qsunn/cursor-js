async function getRandomChinese(length) {
    let result = '';
    while (length > 0) {
        result += String.fromCharCode((Date.now() + '').slice(-5));
        await new Promise(res => setTimeout(() => {
            length--;
            res(), 50;
        }));
    };
    console.log(result);
};
getRandomChinese(8);
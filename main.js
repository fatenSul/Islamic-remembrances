const increaseCount = (value) => {
    let count = 0;
    return () => {
        count += value;
        return count;
    };
};

const counters = {
    count1: increaseCount(1),
    count2: increaseCount(1),
    count3: increaseCount(1),
    count4: increaseCount(1),
    count5: increaseCount(1),

};

function updateCount(circleId) {
    const countId = circleId.replace('circle', 'count');
    const currentCount = counters[countId]();
    document.getElementById(countId).textContent = currentCount;
}

document.getElementById("circle1").onclick = () => updateCount("circle1");
document.getElementById("circle2").onclick = () => updateCount("circle2");
document.getElementById("circle3").onclick = () => updateCount("circle3");
document.getElementById("circle4").onclick = () => updateCount("circle4");
document.getElementById("circle5").onclick = () => updateCount("circle5");

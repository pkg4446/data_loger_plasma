function updateMinutes() {
    const minutes = document.getElementById('minutes').value;
    console.log(`작동시간 (분): ${minutes}분`);
    alert(`작동시간이 ${minutes}분으로 업데이트되었습니다.`);
}

function updateSeconds() {
    const seconds = document.getElementById('seconds').value;
    console.log(`작동시간 (초): ${seconds}초`);
    alert(`작동시간이 ${seconds}초로 업데이트되었습니다.`);
}
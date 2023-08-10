const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {
    if (gridContainer.children.length >= 30) {
        const confirmed = confirm("이미지가 30개 찼습니다. 모든 사진을 지우시겠습니까?");
        if (confirmed) {
            gridContainer.innerHTML = "";
        }
    } else { 
        const randomNumber = Math.floor(Math.random() * 1000) + 1; 
        const imgUrl = `https://picsum.photos/200/300?random=${randomNumber}`;

        const img = document.createElement('img');
        img.src = imgUrl;

        gridContainer.appendChild(img);
    }
});

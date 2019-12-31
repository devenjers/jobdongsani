
let mapIndex = -1;
const positions = [
    {
        title: '셀렉토커피', 
        y: 37.4814283,
        x: 126.8971222,
        latlng: new kakao.maps.LatLng(37.4814283, 126.8971222)
    },
    {
        title: '타미하우스', 
        y: 37.481194,
        x: 126.8968091,
        latlng: new kakao.maps.LatLng(37.481194, 126.8968091)
    },
    {
        title: '컴포즈커피', 
        y: 37.4810258,
        x: 126.896599,
        latlng: new kakao.maps.LatLng(37.4810258, 126.896599)
    },
    {
        title: '도사',
        y: 37.4810951,
        x: 126.8952441,
        latlng: new kakao.maps.LatLng(37.4810951, 126.8952441)
    }
];
const pos = [positions[0],positions[0],positions[1],positions[1],positions[2],positions[3]]

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
    //center: new kakao.maps.LatLng(posDosa[0], posDosa[1]), // 지도의 중심좌표
    center: positions[3].latlng,
    level: 2 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

function setCenter(y=positions[3].y, x=positions[3].x) {
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new kakao.maps.LatLng(y, x);

    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
}

function panTo(y=positions[1].y, x=positions[1].x) {
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new kakao.maps.LatLng(y, x);

    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);            
}        

// 마커 이미지의 이미지 주소입니다
var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
   
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
}
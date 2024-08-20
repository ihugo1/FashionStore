const $bannerBackgroundImg = document.getElementById("home-banner__img");

const $backgroundsPaths = [
    "/img/home/home-banner.jpg",
    "/img/home/banner-2.jfif",
    "/img/home/banner-3.jpg"
];

let index = 0;

export function changeImg() {
    $bannerBackgroundImg.classList.add('hidden');
    setTimeout(() => {

        $bannerBackgroundImg.src = $backgroundsPaths[index];
        index = (index + 1) % $backgroundsPaths.length;
        $bannerBackgroundImg.classList.remove('hidden');
        
    }, 500);
}
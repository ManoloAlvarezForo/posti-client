const imageList = [
"https://25.media.tumblr.com/tumblr_lsr0gpbbID1qz8u8ho1_500.jpg",
"https://25.media.tumblr.com/tumblr_lyzn15YanD1r6b7kmo1_500.jpg",
"https://25.media.tumblr.com/tumblr_m4g9kxA3Ip1qhwmnpo1_500.jpg",
"https://25.media.tumblr.com/tumblr_m37udwTJNg1rojd34o1_500.jpg",
"https://25.media.tumblr.com/tumblr_m18s33hi3b1qbe5pxo1_500.jpg",
"https://25.media.tumblr.com/tumblr_lxrp78iWoj1qbuk0so1_500.png",
"https://25.media.tumblr.com/tumblr_lslxn2TU7V1qzysl7o1_500.jpg",
"https://30.media.tumblr.com/tumblr_m1k4t6TcB91r6b7kmo1_500.jpg",
"https://24.media.tumblr.com/tumblr_ljllp7Qqqo1qdvbl3o1_500.jpg",
"https://24.media.tumblr.com/tumblr_m3wlupIVQY1qzex9io1_500.jpg",
"https://25.media.tumblr.com/tumblr_lwiazpNwwd1qbhms5o1_500.jpg",
"https://26.media.tumblr.com/tumblr_m3ibdlDbyc1r6b7kmo1_500.jpg",
"https://30.media.tumblr.com/tumblr_ltyq49dAQp1r0mbi6o1_500.jpg",
"https://24.media.tumblr.com/tumblr_lyk4tcFyl81qzv52ko1_500.jpg",
"https://25.media.tumblr.com/tumblr_lg8xrv57h81qfyzelo1_500.jpg",
"https://25.media.tumblr.com/tumblr_lx50axM8Yz1r0mbi6o1_500.jpg",
"https://25.media.tumblr.com/tumblr_lvldkzoTNA1qa2n8so1_500.png",
"https://27.media.tumblr.com/tumblr_m2tm98gTwj1qhwmnpo1_500.png",
"https://28.media.tumblr.com/tumblr_m2l660tgVD1r6b7kmo1_500.jpg",
"https://24.media.tumblr.com/tumblr_m45yojxGDY1qzf8xpo1_500.jpg",
"https://24.media.tumblr.com/tumblr_m3xu50jhlD1qh8927o1_500.jpg",
"https://25.media.tumblr.com/Jjkybd3nSai5apclxwbXFgex_500.jpg",
"https://25.media.tumblr.com/GxlDeM8kxp3bb4a9sl4nmbzMo1_500.jpg",
"https://24.media.tumblr.com/tumblr_lqalydcG8N1qb50zjo1_500.jpg",
"https://29.media.tumblr.com/tumblr_ll0sl7cHzW1qcf1jwo1_500.jpg",
"https://29.media.tumblr.com/tumblr_lh6z45FiQW1qfyzelo1_500.jpg",
"https://24.media.tumblr.com/Jjkybd3nSdh5b0o44zsQaLla_500.jpg",
"https://25.media.tumblr.com/tumblr_m38djsFmRV1r73wdao1_500.jpg",
"https://24.media.tumblr.com/tumblr_lqhu13JZXM1qbhms5o1_500.jpg",
"https://24.media.tumblr.com/tumblr_m0500eu4Mf1qenqklo1_500.jpg",
"https://25.media.tumblr.com/tumblr_lzjzw5YAP31qzex9io1_500.jpg",
"https://26.media.tumblr.com/tumblr_m120yjjBEZ1qzfd8bo1_500.png",
"https://24.media.tumblr.com/tumblr_m4g9v4ivuq1r73wdao1_500.jpg",
"https://30.media.tumblr.com/tumblr_luer4jADqV1qbltjxo1_500.jpg",
"https://25.media.tumblr.com/tumblr_lrl90wJDUT1r30oy5o1_500.jpg",
"https://26.media.tumblr.com/tumblr_m1ujutUnzE1r6b7kmo1_500.jpg",
"https://25.media.tumblr.com/tumblr_m3o3vq537S1qhsuv2o1_500.jpg"
]

export function getImageUrl() {
    const index = Math.floor((Math.random() * 37) + 0);
    return imageList[index];
}
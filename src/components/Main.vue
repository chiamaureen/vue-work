<template>
    <div class="main">
        <ToolBar/>
        <div class="wrapper">
            <div class="hero-section">
                <div class="heto-title">
                    <div class="title">PLANTA</div>
                    <div class="subtitle">plant shop</div>
                </div>
                <div class="hero-img"></div>
            </div>
            <div class="about-wrapper">
                <div class="about-title">
                    植感 <br/>
                    生活
                    <div class="area-title">Concept /</div>
                </div>
                <div class="about-content">
                    有植物的生活絕對是史無前例的。 <br/>
                    總結來說，有植物的生活的存在，令我無法停止對他的思考。<br/>
                    蘭格倫告訴我們，幽雅是上帝的禮物，而智慧則是天賜的機遇。<br/>
                    這讓我的思緒清晰了。<br/>
                    不如馬上體驗 PLANTA 的植感生活。
                </div>
            </div>
            <div class="product-list-wrapper">
                <div class="area-title">Product /</div>
                <div class="product-row">
                    <div 
                        v-for="(item, index) in product_row"
                        :key="index"
                    >
                        <img :src="item.img_url" alt="">
                        <div>{{ item.category }}</div>
                    </div>
                </div>
                <div class="product-btn">選購更多</div>
            </div>
            <div class="about-wrapper">
                <div>
                    <p class="area-title">Produced by Maureen</p> 
                    <p>僅供練習使用</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ToolBar from './ToolBar.vue';
import { get_product_list_ajax } from "../utils/product.js";
export default {
  components: {
    ToolBar
  },

  mounted () {
    get_product_list_ajax.call(this);
  },

  data () {
    return {
        product_row: [
            {
                category: '植栽盆栽',
                img_url: 'https://images.pexels.com/photos/1022922/pexels-photo-1022922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                category: '擺飾花瓶',
                img_url: 'https://images.pexels.com/photos/6757651/pexels-photo-6757651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                category: '吊掛盆栽',
                img_url: 'https://storage.googleapis.com/vue-course-api.appspot.com/kfa1401dc%2F1536938739338.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NYUPe9uiGl3gJuoj98cuAL0z7MtMGPaX1CLtJFmt7ZDcGd2mSDCCxTUTxR1rKIBlHmUgVxVRP5aUfi28DlBPUlrzpcukQk6R%2BoEBEhminIHifvPYRpOs27uwhlT1O11PIBsI6iKZEEl%2FbhlfQUJ3JscMa8RJz2a0ilFfMf3aXhl1OA1UGP1lMM7hG5WIz7lJK7En0twHR7uLORHrDDQQLtRJilP5F0XQBt8BNOLK%2Fg79zsnEkbBjDzCsfATDyvh4NnMWeE959z3MCb%2F6pfMy1kKAF1Qa7ADVPxBpoq6dgQ63prn%2FI6zq6azz2soapfRhzhL5pVnVOQ1U%2BsDo0CV7yQ%3D%3D'
            }
        ]
    }
  },

  methods: {
  }
}

</script>

<style scoped>
    .main {
        position: relative;
    }

    .wrapper {
        /* padding-left: 6rem; */
    }

    .hero-section {
        padding: 2rem 3rem 0 12rem;
    }

    .heto-title {
        position: absolute;
        top: 10%;
        left: 10%;
    }

    .heto-title .title {
        font-size: 70px;
        font-weight: 600;
        letter-spacing: 5px;
    }

    .heto-title .subtitle {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 5px;
        text-align: center;
    }

    .hero-img {
        max-height: 1200px;
        height: 95vh;
        width: 100%;
        background-image: url("../assets/img/hero_img_pc.jpeg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .about-wrapper {
        padding: 10rem 4rem 5rem 12rem;
        display: flex;
    }
    .about-title {
        font-size: 50px;
        width: 30%;
        letter-spacing: 10px;
        line-height: 100px;
    }

    .area-title {
        font-size: 20px;
        letter-spacing: 3px;
        font-weight: 600;
    }

    .about-content {
        text-align: left;
        line-height: 60px;
        letter-spacing: 3px;
    }

    .product-list-wrapper {
        padding: 10rem 0 5rem 12rem;
        background-color: #eaeaea;
    }

    .product-row {
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 5px;
    }

    .product-row div {
        margin: 2rem 3rem;
        text-align: center;
        cursor: pointer;

    }

    .product-row img {
        width: 288px;
        height: 250px;
        object-fit: cover;
        object-position: 50% 90%;
    }

    .product-btn {
        width: 20%;
        padding: 1rem;
        margin: 2rem auto;
        background: #000;
        color: #fff;
        text-align: center;
        letter-spacing: 5px;
        cursor: pointer;
    }
</style>

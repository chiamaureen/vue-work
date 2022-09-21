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
        padding: 0 3rem 0 6rem;
    }

    .hero-section {
        padding: 2rem 1rem 0 6rem;
    }

    .heto-title {
        position: absolute;
        top: 15%;
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
        padding: 10rem 1rem 5rem 6rem;
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
        padding: 10rem 1rem 5rem 6rem;
        display: flex;
    }
</style>

<template>
    <div class="main">
        <ToolBar/>
        <div class="hero-section">
            <div class="heto-title">
                <div class="title">PLANTA</div>
                <div class="subtitle">plant shop</div>
            </div>
            <div class="hero-img"></div>
        </div>
    </div>
</template>
<script>
import ToolBar from "./ToolBar.vue";
export default {
    components: {
        ToolBar
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

    .hero-section {
        padding: 3rem 6rem 0 12rem;
    }

    .heto-title {
        position: absolute;
        top: 28%;
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
</style>
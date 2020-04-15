<template>
    <div class="slider-container">
        <div class="arrow icon-prev"></div>
        <div class="arrow icon-next"></div>

        <div id="slider">
            <ul class="slider-list">
                <li class="slider-item">
                    <div></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slider"
    }
</script>

<style lang="less" scoped>
    .slider-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .icon-prev {
        left: 0;
    }
    .icon-next {
        right: 0;
    }
</style>
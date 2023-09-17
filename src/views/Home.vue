<script setup>

</script>

<template>
    <div class="main-container">
        <p class="flex-end mr-12">Développeuse d'Applications Web et Web Mobile</p>
        <div class="flower-banner"></div>  
    </div>
</template>



<style scoped lang="scss">
@import "../styles/settings.scss";
.main-container {

    .flex-end {
        display: flex;
        justify-content: flex-end;
    }


    .flower-banner {
        position: absolute;
        bottom: 20vh;
        width: 100%;
        height: 200px;
        background-image: url(../assets/img/fleur.jpg);
        background-size: cover;
        background-position: center;
    }
}



</style>

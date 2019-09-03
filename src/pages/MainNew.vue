<template>
    <div class="container">
        <div class="top-information">
            <div style="width: 75rem; 
            height: 75rem; 
            background-color: #fff7d4; 
            border-radius: 50rem / 60rem; 
            position: absolute; 
            top: -20rem; 
            right: 55rem;"
            ></div>
            <img style="position: absolute; right: 0;" src="../assets/main/background.png"
                 srcset="../assets/main/background@2x.png 2x" alt="">
            <img style="position: absolute; right: 108rem; top: 8rem;" src="../assets/main/logo.png"
                 srcset="../assets/main/logo@2x.png 2x, ../assets/main/logo@3x.png 3x" alt="">
        </div>
        <div class="group-recruitment">
            <img style="position: absolute; left: 0; top: -5rem;" src="../assets/main/group-recruitment.png"
                 srcset="../assets/main/group-recruitment@2x.png 2x, ../assets/main/group-recruitment@3x.png 3x"
                 alt="">
        </div>
        <div class="courses">

        </div>
        <div class="events">

        </div>
        <div class="teachers">

        </div>
        <div class="feedback">
            <img style="position: absolute; left: 0; top: 10rem;" src="../assets/main/feedback-left.svg" alt="">
            <img style="position: absolute; left: 0; bottom: 0;" src="../assets/main/feedback-bottom.svg" alt="">
            <img style="position: absolute; right: 0; top: 10rem;" src="../assets/main/feedback-right.svg" alt="">
            <img style="position: absolute; right: 6rem; top: 8rem;" src="../assets/main/feedback-right-2.svg"
                 alt="">
        </div>
        <div class="blog">

        </div>
        <div class="about">
            <img style="position: absolute; left: 0;" src="../assets/main/about-left.svg" alt="">
            <img style="position: absolute; right: 0; top: 10rem;" src="../assets/main/about-right.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

    .container {
        background-color: white;
    }

    .top-information {
        height: 87rem;
    }

    .group-recruitment {
        height: 44.4rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3));
        position: relative;
    }

    .courses {
        height: 70rem;
    }

    .events {
        height: 78rem;
        background-color: var(--background-color-lighter);
    }

    .teachers {
        height: 80rem;
    }

    .feedback {
        background-color: var(--background-color-white);
        height: 70rem;
        position: relative;
    }

    .blog {
        height: 70rem;
    }

    .about {
        height: 84rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3));
        position: relative;
    }

</style>
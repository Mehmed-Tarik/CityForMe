<template>
    <div class="card">
        <div class="img-container">
            <img :src="require(`../../assets/${city.name}.jpg`)" alt="city">
        </div>
        <div class="details">
            <h3>{{city.name}}&nbsp;<i>{{city.name_native}}</i></h3>
            <h3>{{city.country}}</h3>
            <svg color="white" width="17" height="17" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></g></svg>
            <p id="population">{{city.population}}</p>
            <p id="founded">Founded: {{city.founded}}</p>
            <p id="landmarks">Landmarks:</p>
            <ul id="landmark" v-for="landmark in city.landmarks" :key="landmark">
                <li>{{landmark}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityCard',
    props: {
        city: Object
    }
}
</script>

<style lang="scss" scoped>
.card {
    background-color: #1c1b29;
    border-radius: 20px;
    max-width: 600px;
    box-shadow: 0 0 30px rgba(0,0,0,0.18);
    transition: all 0.3s; 
    &:hover {
        transform: scale(1.10);
    }
    .img-container {
        position: relative;
        clip-path: polygon(0 0,100% 0,100% 85%, 0 100%);
        img {
            width: 100%;
            height: 40vh;
            display: block; 
            border-radius: 20px 20px 0 0;
        }
    }
    .details {
        padding: 20px 10px;
        p {
            color: #ffffff;
            margin: 3px 0 3px 0;
        }
        h3 {
            color: #ffffff;
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 3px;
            i {
                font-weight: 400;
                font-size: 15px
            }
            &:nth-child(2) {
                font-weight: 500;
            }
        }
        #population {
            display: inline-block;
            position: relative;
            top: -2px;
            left: 5px;
        }
        #description {
            color: #a0a0a0;
            font-size: 15px;
            font-weight: 400;
            margin-top: 5px;
        }
        #landmark {
            color: #ffffff;
            position: relative;
            left: 110px;
            bottom: 21px;
        }
    }
}

</style>
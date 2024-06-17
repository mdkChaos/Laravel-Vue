<template>
    <div>
        Post
        <single-post-component>

        </single-post-component>
        <div>Name: {{ name }}</div>
        <button @click="sayHello">Hello</button>
        <button @click="sayGoodbye">Goodbye</button>
    </div>
</template>

<script>
import SinglePostComponent from './SinglePostComponent.vue';
export default {
    name: "PostComponent",

    data(){
        return {
            name: "Andrii",
            age: 41,
        }
    },

    methods: {
        sayHello() {
            console.log('Hello');
        },
        sayGoodbye() {
            console.log('Goodbye');
        }
    },

    components: {
        SinglePostComponent
    }
}
</script>

<style scoped></style>
<template>
    <div class="col-3">
        <div class="mb-3">
            <input type="text" v-model="name" placeholder="Name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="age" placeholder="Age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="job" placeholder="Job" class="form-control">
        </div>
        <div class="mb-3">
            <input type="submit" @click.prevent="store" value="Add" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Create",

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        store() {
            axios.post('/api/people', { name: this.name, age: this.age, job: this.job })
                .then(res => {
                    router.push({ name: 'person.index' });
                });
        }
    },
}
</script>

<style scoped></style>
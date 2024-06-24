<template>
    <div class="col-3">
        <div class="mb-3">
            <input type="text" v-model="person.name" placeholder="Name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="person.age" placeholder="Age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="person.job" placeholder="Job" class="form-control">
        </div>
        <div class="mb-3">
            <input type="submit" @click.prevent="$store.dispatch('storePerson', person)" value="Add"
                class="btn btn-primary" :disabled="isDisabled">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Create",

    computed: {
        ...mapGetters({
            isDisabled: 'isDisabled',
            person: 'person',
        })
    },

    mounted() {
        this.$store.commit('setPerson', { name: null, age: null, job: null });
    },
}
</script>

<style scoped></style>

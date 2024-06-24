<template>
    <div class="col-3" v-if="person">
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
            <input type="submit" @click.prevent="$store.dispatch('updatePerson', person)" value="Update"
                class="btn btn-primary" :disabled="isDisabled">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Edit",

    computed: {
        ...mapGetters({
            isDisabled: 'isDisabled',
            person: 'person',
        })
    },

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id);
    },
}
</script>

<style scoped></style>
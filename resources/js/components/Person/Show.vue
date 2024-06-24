<template>
    <div class="container mt-4" v-if="person">
        <div class="card col-6">
            <div class="card-body">
                <h5 class="card-title">Person Details</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Name:</strong> {{ person.name }}</li>
                    <li class="list-group-item"><strong>Age:</strong> {{ person.age }}</li>
                    <li class="list-group-item"><strong>Job:</strong> {{ person.job }}</li>
                </ul>
                <router-link :to="{ name: 'person.edit', params: { id: person.id } }"
                    class="btn btn-success">Edit</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Show",

    computed: {
        person() {
            return this.$store.getters.person;
        }
    },

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id);
    },
}
</script>

<style scoped></style>
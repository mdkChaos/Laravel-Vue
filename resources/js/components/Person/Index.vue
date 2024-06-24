<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                    <th scope="col" colspan="3" class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="person in people">
                    <tr>
                        <th scope="row">{{ person.id }}</th>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                        <td class="text-center">
                            <router-link :to="{ name: 'person.show', params: { id: person.id } }"
                                class="btn btn-primary">Show</router-link>
                        </td>
                        <td class="text-center">
                            <router-link :to="{ name: 'person.edit', params: { id: person.id } }"
                                class="btn btn-success">Edit</router-link>
                        </td>
                        <td class="text-center">
                            <a href="#" @click.prevent="$store.dispatch('deletePerson', person.id)"
                                class="btn btn-outline-danger">Delete</a>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",

    computed: {
        people() {
            return this.$store.getters.people;
        },
    },

    mounted() {
        this.$store.dispatch('getPeople');
    },
}
</script>

<style scoped></style>
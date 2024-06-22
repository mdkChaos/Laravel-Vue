<template>
    <tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none'">
        <th scope="row">{{ person.id }}</th>
        <td><input type="text" class="form-control" v-model="name"></td>
        <td><input type="number" class="form-control" v-model="age"></td>
        <td><input type="text" class="form-control" v-model="job"></td>
        <td><a href="#" class="btn btn-success" @click.prevent="updatePerson(person.id)">Update</a>
        </td>
    </tr>
</template>

<script>
import axios from 'axios';


export default {
    name: "EditComponent",

    props: [
        'person',
    ],

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    mounted() {

    },

    methods: {
        updatePerson(id) {
            this.$parent.editPersonId = null;
            axios.patch(`/api/people/${id}`, { name: this.name, age: this.age, job: this.job }).then(res => {
                this.$parent.getPeople();
            });
        },
    },
}
</script>

<style scoped></style>
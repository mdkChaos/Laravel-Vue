<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                    <th scope="col" colspan="2" class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="person in people">
                    <tr :class="isEdit(person.id) ? 'd-none' : ''">
                        <th scope="row">{{ person.id }}</th>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>{{ person.job }}</td>
                        <td><a href="#" class="btn btn-success"
                                @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)">Edit</a>
                        </td>
                        <td><a href="#" class="btn btn-danger" @click.prevent="deletePerson(person.id)">Delete</a>
                        </td>
                    </tr>
                    <tr :class="isEdit(person.id) ? '' : 'd-none'">
                        <th scope="row">{{ person.id }}</th>
                        <td><input type="text" class="form-control" v-model="name"></td>
                        <td><input type="number" class="form-control" v-model="age"></td>
                        <td><input type="text" class="form-control" v-model="job"></td>
                        <td><a href="#" class="btn btn-success" @click.prevent="updatePerson(person.id)">Update</a>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: "IndexComponent",

    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null,
        }
    },

    mounted() {
        this.getPeople();
    },

    methods: {
        getPeople() {
            axios.get('/api/people').then(res => {
                this.people = res.data;
            });
        },

        updatePerson(id) {
            this.editPersonId = null;
            axios.patch(`/api/people/${id}`, { name: this.name, age: this.age, job: this.job }).then(res => {
                this.getPeople();
            });
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`).then(res => {
                this.getPeople();
            });
        },

        changeEditPersonId(id, name, age, job) {
            this.editPersonId = id;
            this.name = name;
            this.age = age;
            this.job = job;
        },

        isEdit(id) {
            return this.editPersonId === id;
        },
    },
}
</script>

<style scoped></style>
<template>
    <div>
        <nav class="nav mb-3">
            <router-link class="btn btn-outline-primary me-3" :to="{ name: 'person.index' }">People</router-link>
            <router-link class="btn btn-outline-primary me-3" :to="{ name: 'person.create' }">Create</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped></style>
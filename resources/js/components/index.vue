<template>
    <div>
        <nav class="nav">
            <router-link class="nav-link" :to="{ name: 'person.index' }">People</router-link>
            <router-link class="nav-link" :to="{ name: 'person.create' }">Create</router-link>
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
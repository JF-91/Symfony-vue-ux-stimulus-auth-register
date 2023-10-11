<template>
    <div>About {{ name }}!</div>
</template>

<script setup>
    defineProps({
        name: String
    });
</script>

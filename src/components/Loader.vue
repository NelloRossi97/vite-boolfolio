<template>
    <div class="loading">
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'Loader'
}
</script>

<style lang="scss" scoped>
.loading {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    background-color: #202020;
    color: white;
}
</style>
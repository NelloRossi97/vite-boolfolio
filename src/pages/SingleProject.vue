<template>
    <div v-if="project">
        <h1>{{ project.title }}</h1>
        <img :src="project.image" :alt="project.title">
        <span class="badge rounded-pill text-bg-primary" v-for="tag in project.tags">{{ tag.title }}</span>
    </div>
    <div v-else><Loader/></div>
    
</template>

<script>
import axios from 'axios'
import { router } from '../router';
import Loader from '../components/Loader.vue';
    export default {
    name: "SingleProject",
    data() {
        return {
            project: null,
            apiUrl: "http://127.0.0.1:8000/api",
            imgBasePath: "http://127.0.0.1:8000/storage/",
        };
    },
    methods: {
        getProject() {
            axios.get(`${this.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                console.log(res.data.results);
                if (res.data.success) {
                    this.project = res.data.results;
                }
                else {
                    this.$router.push({ name: "not-found" });
                }
            });
        }
    },
    mounted() {
        // console.log(this.$router);
        // console.log(this.$route);
        this.getProject();
    },
    components: { Loader }
}
</script>

<style lang="scss" scoped>

</style>
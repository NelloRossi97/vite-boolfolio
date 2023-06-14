<template>
    <div class="container py-5" v-if="projects != 0">

        <div class="d-flex justify-content-between pb-5">
            <h1 class="text-white">Progetti</h1>
            <div>
                <router-link :to="{name: 'home'}" class="btn btn-primary">
                    Torna alla Home
                </router-link>
            </div>

        </div>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3 px-3 mb-5" v-for="project in projects">
              <div class="card bg-dark text-white">
                <img :src="project.image" class="card-img-top" alt="{{ project.title }}">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <span class="card-text">Creato il: {{ project.created_at }}</span><br>
                    <span class="card-text">Tecnologia: <strong>{{ project.type.name }}</strong></span><br>
                    <span class="card-text">Tags: <strong v-for="tag in project.tags"> {{ tag.name }} </strong></span>
                    <div class="d-flex justify-content-between pt-4">
                      <router-link :to="{name: 'single-project', params:{slug: project.slug}}" class="btn btn-primary">
                        <i class="fa-solid fa-eye"></i>
                      </router-link>
                      <a href="#" class="btn btn-warning text-white"><i
                              class="fa-solid fa-pencil"></i></a>
                      <form action="#" method="POST">
                          <button type='submit' class="delete-button btn btn-danger"
                              data-item-title="{{ $project->title }}"> <i class="fa-solid fa-trash"></i></button>
                      </form>
                    </div>
                
                </div>
              </div>
            </div>
          </div>
          
          <nav aria-label="Page navigation example">
                  <ul class="pagination">
                      <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
                              @click="getData(currentPage - 1)">Previous</button></li>
                      <li class="page-item" v-for="n in lastPage"><button
                              :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n }}</button>
                      </li>

                      <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === lastPage }"
                              @click="getData(currentPage + 1)">Next</button></li>
                  </ul>
              </nav>
      </div>
      <div v-else><Loader/></div>
</template>

<script>
    import axios from 'axios';
import Loader from '../components/Loader.vue';
    export default {
    name: "ProjectList",
    data() {
        return {
            title: "Ciao",
            projects: [],
            apiUrl: "http://127.0.0.1:8000/api",
            imgBasePath: "http://127.0.0.1:8000/storage/",
            currentPage: 1,
            lastPage: null,
        };
    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiUrl}/projects`, {
                params: {
                    "page": numPage
                }
            }).then((res) => {
                this.projects = res.data.results.data;
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });
        }
    },
    mounted() {
        this.getData(1);
    },
    components: { Loader }
}
</script>

<style lang="scss" scoped>

</style>
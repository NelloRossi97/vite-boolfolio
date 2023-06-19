<template>
    <div class="container my-5">
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="address" v-model="address"
                required>
            </div>
            <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" name="name" v-model="name"
                    required>
                </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="body"
                required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Invia</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ContactUs',
    data() {
        return {
            address: '',
            name: '',
            body: '',
            apiUrl: "http://127.0.0.1:8000/api",
        }
    },
    methods: {
        sendForm() {
            const data = {
                address: this.address,
                name: this.name,
                body: this.body
            }
            axios.post(`${this.apiUrl}/contacts`, data).then((res) => {
                console.log(res.data);
            })
            this.address = '';
            this.name = '';
            this.body = '';
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
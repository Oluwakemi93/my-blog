<template>
    <div class="container">
        <span><img src="../assets/pix1.png" alt="Dribbleblog"></span>
        <span class="rightnav">
            <ul>
                <li><router-link class="link" to="/"><b>HOME</b></router-link></li>
                <li><router-link class="link" to="/trending">TRENDING</router-link></li>
                <li><router-link class="link" to="/addstory">ADD STORY</router-link></li>
            </ul>
            <hr/>
        </span>
        <button class="btn btn-success mt-5 mb-5"
        @click="addNewArticleForm()">
        Publish
        </button> &nbsp; &nbsp; <span>Publish an Article!</span>

        <form id="searchForm" @submit.prevent="performFilter">
        <label for="Name">Name: </label>
        <input type="text" id="Name" v-model="form.name">
        <label for="Age">Age: </label>
        <input type="text" id="Age" v-model="form.age">
        <label for="Address">Address: </label>
        <input type="text" id="Address" v-model="form.address">
        <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddStory',
            data: function() {
            return {
                form: new Form()
            }
        },
        computed: {
            searchFilters() {
                return this.$store.state.searchFilters;
            }
        },
        mounted() {
            this.form = new Form(this.searchFilters, 'updateSearchFilters')
        },
        methods: {
            performFilter() {
                this.form.submit('get', 'https://jsonplaceholder.typicode.com/users') //just for testing
                    .then(response => {
                        this.$store.commit('updateSearchFilters', this.form)
                        this.form = new Form(this.searchFilters)
                    })
            }
        }
 
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  font-size: 12px;
  font-weight: 200;
}
.link {
    color: rgb(82, 80, 80);
    padding: 20px;
    text-decoration: none;
}
.rightnav {
    float: right;
    margin-right: 300px;
    margin-top: 5px;
}
</style>
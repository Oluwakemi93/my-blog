<template>
  <div id="add-blog">
    <span><b id="d">D</b></span><span id="daily">Dailyblog</span>
        <span class="rightnav">
            <ul>
                <li><router-link class="link" to="/">HOME</router-link></li>
                <li><router-link class="link" to="/trending">TRENDING</router-link></li>
                <li><router-link class="link" to="/addstory">ADD STORY</router-link></li>
            </ul>
        </span>
      <form v-on:submit.prevent>
            <h2>Add an Article!</h2>
            <input type="text" v-model.lazy="blog.title" placeholder="title..."/>
            <input type="text" v-model.lazy="blog.author" placeholder="author..."/>
            <textarea v-model.lazy="blog.content" placeholder="content..."></textarea>
            <button @click="save" id="save">Save</button>
            <button><router-link class="link2" to="/preview">Preview</router-link></button>
      </form>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    name: "addBlog",
    data() {
        return {
            blog:{
                title: "",
                author: "",
                content: ""
            },
        }
    },
    computed: mapState(["blogs"]),
    methods: {
        save() {
            // console.log(this.blogs);
            this.$store.commit("addPost", {...this.blog});
            // this.blog={
            //     title: "",
            //     author: "",
            //     content: ""
            // }
            console.log(this.$store.state.blogs);
        }
    }
}

</script>

<style scoped>
#d {
    border-radius: 50%;
    background-color: #fa678a;
    color: #fff;
    padding: 7px 10px;
    margin-left: 120px;
}
#daily {
    color: #fa678a;
    margin-left: 8px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 550;
}
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
    margin: 20px;
    text-decoration: none;
}
.link:hover {
    padding-bottom: 1em;
    border-bottom: 2px solid #f5668c;
    color: #000;
    font-weight: 600;
}
.rightnav {
    float: right;
    margin-right: 282px;
    margin-top: -15px;
}

form {
    border: 1px outset rgb(204, 197, 203);
    border-radius: 5px;
    margin: 50px 280px;
    max-width: 450px;
    height: 350px;
}
label {
    display:block;
    margin: 20px 20px 10px;
}
input[type="text"],textarea{
    display: block;
    width: 70%;
    padding: 8px;
    margin: 20px;
    outline: none;
}
textarea {
    height: 90px;
}
button{
    padding:10px 30px;
    color: #fff;
    border:1px solid #fa678a;
    background-color: #fa678a;
    margin: 0 20px 10px;
}
.link2 {
    text-decoration: none;
    color: #fff;
}
h2{
    margin: 20px;
    font-size: 16px;
}
</style>
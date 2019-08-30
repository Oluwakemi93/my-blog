<template>
    <div id="preview">
        <span><b id="d">D</b></span><span id="daily">Dailyblog</span>
        <span class="rightnav">
            <ul>
                <li><router-link class="link" to="/">HOME</router-link></li>
                <li><router-link class="link" to="/trending">TRENDING</router-link></li>
                <li><router-link class="link" to="/addstory">ADD STORY</router-link></li>
            </ul>
        </span>
          <h3>Preview Blog</h3>
        <div class="box">
          <p>Blog Title: {{ blog.title }}</p>
          <p>Blog Author:</p>
          <p>{{ blog.author }}</p>
          <p>Blog content:</p>
          <p>{{ blog.content }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    
    data() {
        return {
            blog:{
                title: "",
                content: ""
            }
        }
    },
    computed: mapState(["blogs"]),
    methods: {
        save() {
            console.log(this.blogs);
            this.$store.commit("addPost", this.blog);
            console.log(this.blogs)
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
.box {
    border: 2px solid #f5668c;
    border-radius: 5px;
    width: 500px;
    height: 330px;
    margin: 40px 250px;
}
p {
    margin:40px;
}
h3 {
    margin-left: 270px;
}
</style>
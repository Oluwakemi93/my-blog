<template>
    <div class="main-wrap">
   <span><b id="d">D</b></span><span id="daily">Dailyblog</span>
        <span class="rightnav">
            <ul>
                <li><router-link class="link" to="/">HOME</router-link></li>
                <li><router-link class="link" to="/trending">TRENDING</router-link></li>
                <li><router-link class="link" to="/addstory">ADD STORY</router-link></li>
            </ul>
        </span>
        <img src="../assets/articlepix.png" width="530" height="200" class="image1">
              <div class="posts">Articles!</div>
      <div class="story"
        v-for="(blog, index) in blogs"
        :key="blog.title"
        >
        <span class="float-right" style="cursor:pointer"
            @click="del(index)">
            x
        </span>
        <p class="title">{{ blog.title}}</p>
        <p class="author">{{ blog.author}}</p>
        <p class="content">{{ blog.content}}</p>
        <a href="#" @click="edit(blog)">
            <button class="edit">Edit</button>
        </a>
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
                author: "",
                content: ""
            }
        }
    },
    computed: mapState(["blogs"]),
    methods: {
        save() {
            if(this.blog  !=''){
                this.$store.commit("addPost", this.blog);
                this.blog = "";
                event.target.reset();
                // console.log(this.blogs)
            }
        },
        del(id){
            this.$delete(this.blogs, id);
            console.log(id);
            // this.blogs.splice(id,1);
            // this.$store.commit("delPost", this.blog);
        },
        edit(blog){
            this.blogs.reset();
            $('')
        }
    }
};
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
.image1{
    padding-top: 50px; 
    position: absolute;
}
.posts {
    margin: 280px 480px 0;
}
.story {
    width: 500px;
    text-align: justify;
     margin: 30px 250px 0;
     border-bottom: 2px solid #f5668c;
}
.float-right {
    float: right;
}
.title {
    font-family: cursive;
}
.author {
    font-family: 'Courier New', Courier, monospace;
}
.edit{
    float:right;
    background-color: #f5668c;
    border-color: #f5668c;
    color:#fa678a;
}
</style>
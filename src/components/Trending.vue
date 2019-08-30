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
        <div class="bio">
            <img src="../assets/bio.png" width="235" height="350">
        </div>
        <span class="sam">
            <img src="../assets/sama.png" width="40">
        </span>
        <span id="saman">Samantha</span>
        <div class="p1">
            TRENDING
            
            <router-link class="link2" to="/article"><button>Read More</button></router-link>
        </div>
        <div class="pic1">
            <img src="../assets/pix2.png" width="220" height="520">
        </div>
        <div class="pic2">
             <iframe width="240" height="270" src="https://www.youtube.com/embed/n3iG1gkW9R0" class="video"></iframe>
        </div>
        <h1>TOP PICK</h1>
        <strong class="pick-art">Top Pick Article</strong>
        <div class="blank">
            <p id="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
        </div>
        <carousel class="caro">
            <slide><img src="../assets/three.png" width="920" height="300"></slide>
            <slide><img src="../assets/edu.png" width="320" height="300"></slide>
            <slide><img src="../assets/music.png" width="320" height="300"></slide>
            <slide><img src="../assets/adv.png" width="320" height="300"></slide>
            <slide><img src="../assets/edu.png" width="320" height="300"></slide>
            <slide><img src="../assets/music.png" width="320" height="300"></slide>
            <slide><img src="../assets/adv.png" width="320" height="300"></slide>
        </carousel>
    </div>
</template>

<script>
export default {
   name: 'Trending'
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
.bio {
    position: absolute;
    margin-left: 115px;
    margin-top: 50px;
}
.sam {
    position: absolute;
    text-align: center;
    left: 490px;
    top: 210px;
}
#saman {
    position: absolute;
    text-align: center;
    left: 535px;
    top: 222px;
    font-size: 13.5px;
}
.pic1 {
    position: absolute;
    right: 0px;
    top: 185px;
}
.pic2 {
    position: absolute;
    left: 130px;
    top: 500px;
}
.p1 {
    position: absolute;
    font-family: 'Times New Roman', Times, serif;
    width: 490px;
    font-weight: 800;
    line-height: 1.5cm;
    text-align: center;
    right: 280px;
    top: 285px;
    font-size: 55px;
    color: black;
}
p {
    font-size: 15px;
    color: rgb(52, 47, 70);
    text-align: justify;
    line-height: 0.9cm;
    margin-left: 100px;
    margin-top: 40px;
}
button {
    border: none;
    background-color: rgb(226, 14, 85);
    width: 140px;
    height: 50px;
    color: white;
    padding: -41px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-top: 20px;
    margin-right: 65px;
}
.top {
    position: absolute;
}
h1 {
    opacity: 0.3;
    margin-top: 800px;
    padding-left: 80px;
    font-size: 100px;
    letter-spacing: -0.1em;
    color: #999;
}
.link2{
    text-decoration: none;
}
h1 {
    opacity: 0.1;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 780px;
    padding-left: 80px;
    font-size: 80px;
    letter-spacing: -0.1em;
    color: #999;
}
.pick-art {
    position: absolute;
    margin-top: -120px; 
    padding-left: 140px;
    font-size: 30px;
    font-weight: 600;
    font-family:Arial, Helvetica, sans-serif;
}
.blank {
    margin-top: -100px;
    width: 750px;
    height: 290px;
    background-color: #f0f5f5;
}
#p2 {
    margin-left: 144px;
    padding-top: 50px;
    color: #999;
}
.caro {
    margin-top: -150px;
    margin-left: 75px;
    padding-left: 20px;
}
</style>
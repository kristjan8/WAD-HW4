<template>
    <div class="contentcompo">
        <p class="posts" v-for="post in postsList" :key="post.id">
            <table width="100%">
                <tr>
                    <td>{{post.username}}</td>
                    <td style="text-align: right">{{post.datetime}}</td>
                </tr>
            </table>
            <br>
            {{post.body}}
        </p>
        <br>
        <router-link to="/addpost" class="button">Add post</router-link>
        <button @click="deleteAll" class="button">Delete all</button>
    </div>
</template>
  
<script>
    export default {
        name: 'ContentCompo',
        data() {
            return {
                postsList: [],
            };
        },
        methods: {
            fetchPosts() {
            fetch('http://localhost:3000/api/posts')
                .then((response) => response.json())
                .then((data) => (this.postsList = data))
                .catch((err) => console.log(err.message));
            },
            deleteAll() {
                fetch('http://localhost:3000/api/posts/', {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                .then((response) => {
                console.log(response.data);
                })
                .catch((e) => {
                console.log(e);
                });
                setTimeout(function() {location.reload()}, 500);
            },
        },
        mounted() {
            this.fetchPosts();
            console.log("mounted");
        },
    }
</script>

<style scoped>
    .contentcompo {
        background-color: transparent;
        width: 60%;
        height: 100%;
    }

    .posts {
        background-color: lightgray;
        border-radius: 10px;
        padding: 10px;
        margin-left: 10px;
        margin-right: 10px;
        text-align: left;
    }

    .button {
        background-color: rgb(19, 59, 44);
        color: aliceblue;
        padding: 10px;
        padding-inline: 30px;
        border-radius: 20px;
        margin: 10px;
        cursor: pointer;
        text-decoration: none;
        font-size: medium;
    }

    .button:hover {
    background-color: #45a049; /* Change background color on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Add a shadow on hover */
    }
</style>
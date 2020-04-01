<template>
    <div>
        <section class="content">
            <div class="row justify-content-around">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Post List</h3>
                            <div class="card-tools">
                                <button class="btn btn-primary">
                                    <router-link to="/add-post" style="color:#fff"> Add New Post</router-link>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>

                                    <th>Sl</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr v-for="( post,index) in allpost">
                                    <td>{{index+1}}</td>
                                    <td v-if="post.user">{{post.user.name}}</td>
                                    <td v-if="post.category">{{post.category.cat_name}}</td>
                                    <td>{{post.title | shortlength(15,'...')}}</td>
                                    <td>{{post.description | shortlength(30,'...')}}</td>

                                    <td><img :src="ourImage(post.photo)" alt="" width="40" height="50"></td>
                                    <td>
                                        <router-link class="btn btn-primary"  :to="`/edit-post/${post.id}`"><i class="fas fa-pen-square"></i></router-link>
                                        <br>
                                        <a class="btn btn-danger" href="#" @click.prevent="deletePost(post.id)"><i class="fas fa-trash-alt"></i></a>
                                    </td>

                                </tr>
                                </tbody>

                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
    </div>
</template>

<script>
    export default {
        name: "List",
        mounted() {
            this.$store.dispatch('getAllPost')
        },
        computed:{
            allpost(){
                return this.$store.getters.getPost
            }
        },
        methods:{
            ourImage(img){
                return 'uploadImage/'+img;
            },
            deletePost(id){
                axios.get ('/delete/'+id)
                    .then(()=>{
                        this.$store.dispatch('getAllPost')
                        Toast.fire({
                            icon: 'success',
                            title: 'Post  Deleted  successfully'
                        })
                    })
                    .catch(()=>{

                    })
            }
        }

    }
</script>

<style>

</style>

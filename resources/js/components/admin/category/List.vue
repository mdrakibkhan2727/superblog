<template>
<div>

    <section class="content">
        <div class="row justify-content-around">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Category List</h3>
                        <div class="card-tools">
                            <button class="btn btn-primary">
                                <router-link to="/add-category" style="color:#fff"> Add Category</router-link>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table id="example2" class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Category Name</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr v-for="(category,index) in getallCategory" :key="category.id">
                                <td>{{index+1}}</td>
                                <td>{{category.cat_name}}</td>
                                <td>{{category.created_at | timeformat }}</td>
                                <td>
                                    <router-link :to="`/edit-category/${category.id}`" class="btn btn-primary" >Edit</router-link>
                                    <button class="btn btn-danger" @click.prevent="deletecategory(category.id)">Delete</button>
                                </td>

                            </tr>
                            </tbody>

                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->


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
        name: "List.vue",
        mounted(){
            this.$store.dispatch('allCategory')
        },
        computed:{
           getallCategory(){
            return this.$store.getters.getCategory
           }
        },
        methods:{
            deletecategory(id){
                axios.get('/category/'+id)
                .then(()=>{
                    this.$store.dispatch('allCategory')
                    Toast.fire({
                        icon: 'success',
                        title: 'Category Deleted  successfully'
                    })
                })
                .catch(()=>{

                })
            }
        },
    }
</script>

<style scoped>

</style>

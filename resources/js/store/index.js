export default {
    state:{
      category:[],
        post:[],
        blogpost:[],
        singlepost:[],
        allcategories:[],
    },
    getters:{
       getCategory(state){
         return state.category
       },
        getPost(state){
           return state.post
        },
        getblogPost(state){
            return state.blogpost
        },
        singlepost(state){
            return state.singlepost
        },
        allcategories(state){
            return state.allcategories
        }
    },
    actions:{
        allCategory(context){
        axios.get('/category')
            .then((response)=>{
                context.commit('categories',response.data.categories)
            })
        },
        getAllPost(context){
            axios.get('/post')
                .then((response)=>{
                    context.commit('allpost',response.data.posts)
                })

        },
        getblogPost(context){
            axios.get('/blogpost')
                .then((response)=>{
                    context.commit('getblogPost',response.data.posts)
                })

        },
        getPostById(context,payload){
            axios.get('/singlepost/'+payload)
                .then((response)=>{
                    context.commit('singlePost',response.data.post)
                })
        },
        allcategories(context){
            axios.get('/categories')
                .then((response)=>{
                    context.commit('allcategories',response.data.categories)
                })
        },
        getPostByCatId(context,payload){
            axios.get('/categorypost/'+payload)
                .then((response)=>{
                    context.commit('getPostByCatId',response.data.posts)
                })
        },
        SearchPost(context,payload){
            axios.get('/search?s='+payload)
                .then((response)=>{
                    context.commit('getSearchPost',response.data.posts)
                })
        }
    },
    mutations:{
        categories(state,data){
          return state.category=data
        },
        allpost(state,payload){
            return state.post = payload
        },
        getblogPost(state,data){
            return state.blogpost = data
        },
        singlePost(state,payload){
            return state.singlepost = payload
        },
        allcategories(state,payload){
            return state.allcategories = payload
        },
        getPostByCatId(state,payload){
            state.blogpost = payload
        },
        getSearchPost(state,payload){
            state.blogpost = payload
        }
    }
}

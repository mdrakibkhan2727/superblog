///////////*Backend Component start here........... *//////


import AdminHome from './components/admin/AdminHome'
//Category import here..
import CategoryList from './components/admin/category/List'
import AddCategory from './components/admin/category/New'
import EditCategory from './components/admin/category/Edit'
//Post import here
import PostList from './components/admin/post/List'
import AddPost from './components/admin/post/New'
import EditPost from './components/admin/post/Edit'
////////////*Frontend Component start here .....*//////////
import  PublicHome from  './components/public/PublicHome'
import  BlogPost from  './components/public/blog/BlogPost'
import  SinglePost from  './components/public/blog/SingleBlog'

export const routes = [
    ///Backend Route
    {
        path: '/home',
        component: AdminHome
    },
    {
        path: '/category-list',
        component: CategoryList
    },
    {
        path: '/add-category',
        component: AddCategory
    },
    {
        path: '/edit-category/:categoryid',
        component: EditCategory
    },
    //Post route start here...
    {
        path: '/post-list',
        component: PostList
    },
    {
        path: '/add-post',
        component: AddPost
    },
    {
        path: '/edit-post/:postid',
        component: EditPost
    },

    //Frontend Route
    {
        path: '/',
        component: PublicHome
    },
    {
        path: '/blog',
        component:  BlogPost
    },
    {
        path: '/blog/:id',
        component:  SinglePost
    },
    {
        path: '/categories/:id',
        component:  BlogPost
    },

]

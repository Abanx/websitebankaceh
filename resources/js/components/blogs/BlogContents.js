import React, { Component }from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';
import { Fragment } from 'react';

const BLOG_URL = "http://dev.semangatngedrakor.my.id/api/blog";

class BlogContents extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            blogs: []
        };
    }

    componentDidMount(){
        this.getBlogs();
    }

    getBlogs = () => {
        axios.get(BLOG_URL)
        .then((res) => {
            this.setState({
                blogs: res.data.blog
            })
            // console.log(res.data);
        })
        .catch( err => console.log(err))
    }

    render() {
        var contents = [{
            id: 0,
            title: '',
            body: '',
            image: '',
            thumbnail: '',
            id_author: 0,
            id_publisher: 0,
            id_editor: 0,
            status: 0,
            id_menu: 0,
            category: '',
            type: ''
        }];
        var i = 0;

        const blogList = this.state.blogs.map((blog, index) => {
            contents = [{
                id: blog.id,
                title: blog.title,
                body: blog.body,
                image: blog.image,
                thumbnail: blog.thumbnail,
                id_author: blog.id_author,
                id_publisher: blog.id_publisher,
                id_editor: blog.id_editor,
                status: blog.status,
                id_menu: blog.id_menu,
                category: blog.category,
                type: blog.type
            }]
            i = index;
            return blog;
        });
        // console.log(blogList);

        const columns = [
            { field: 'id', headerName: 'ID', width: 100},
            { field: 'title', headerName: 'Title', width: 160},
            { field: 'body', headerName: 'Body', width: 160},
            { field: 'image', headerName: 'Image', width: 160},
            { field: 'thumbnail', headerName: 'Thumbnail', width: 160},
            { field: 'id_author', headerName: 'ID Author', width: 140},
            { field: 'id_publisher', headerName: 'ID Publisher', width: 160},
            { field: 'id_editor', headerName: 'ID Editor', width: 140},
            { field: 'status', headerName: 'Status', width: 120},
            { field: 'id_menu', headerName: 'Id Menu', width: 150},
            { field: 'category', headerName: 'Category', width: 180},
            { field: 'type', headerName: 'Type', width: 140},
        ];

        return(
            <Fragment>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={blogList} columns={columns} pageSize={5}/>
                </div>
            </Fragment>
        );
    }
}
export default BlogContents;
import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface IPosts{
    id:number,
    category_id:number,
    title:string,
    content:string,
    image:string
}

const ListPost=()=>{

    const [loading, setLoading]=useState(true);
    const [posts, setPosts]=useState<IPosts[]>([]);

    useEffect(()=>{
        getAllPosts();
    }, [])

    const getAllPosts = async()=>{
        await axios.get('http://127.0.0.1:8000/api/posts').then(
            (res)=>{
                setPosts(res.data.posts);
                setLoading(false);
                console.log(res.data.posts);
            }
        )

    }

    if(loading)
    {
        return <h4>Chargement des données...</h4>
    }
    else
    {
        var posts_HTMLTABLE = [];
       
        posts_HTMLTABLE = posts.map( (post, index) => {
            return (
                <tr key={index}>
                    <td>{post.id}</td>
                    <td>{post.category_id}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td><img src={`http://127.0.0.1:8000/${post.image}`} width="5Opx" alt="Post Image" /></td>
                    <td><Link to="" className="btn btn-success btn-sm">Edit</Link></td>
                    <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            );
        });
    }

    return (
            <>           
                <div className="card px-4 mt-5">
                    <div className="card-header">
                        <h4>Post Data
                            <Link to="/admin/create-post" className="btn btn-primary btn-sm float-end"> Add Post</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Category</th>
                                        <th>Title</th>
                                        <th>Content</th>
                                        <th>Image</th>
                                        <th>Editer</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts_HTMLTABLE}
                                </tbody>
                            </table>
                        </div>  
                    </div>
                </div>        
            </>
        )
}
export default ListPost;
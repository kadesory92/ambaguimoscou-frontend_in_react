import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface ICategories{
    id:number,
    title:string,
    description:string
}

const ListCategories=()=>{

    const [loading, setLoading]=useState(true);
    const [categories, setCategories]=useState<ICategories[]>([]);

    useEffect(()=>{
        getAllCategories();
    }, [])

    const getAllCategories = async()=>{
        await axios.get('http://127.0.0.1:8000/api/categories').then(
            (res)=>{
                setCategories(res.data.categories);
                setLoading(false);
                console.log(res.data.categories);
            }
        )

    }

    if(loading)
    {
        return <h4>Chargement des données...</h4>
    }
    else
    {
        var categories_HTMLTABLE = [];
       
        categories_HTMLTABLE = categories.map( (category, index) => {
            return (
                <tr key={index}>
                    <td>{category.id}</td>
                    <td>{category.title}</td>
                    <td>{category.description}</td>
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
                            <Link to="/admin/create-post" className="btn btn-primary btn-sm float-end"> Add Category</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Editer</th>
                                        <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories_HTMLTABLE}
                                </tbody>
                            </table>
                        </div>  
                    </div>
                </div>        
            </>
        )
}
export default ListCategories;
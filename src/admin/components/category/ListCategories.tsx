import React, {useState, useEffect} from "react";
import axios from "axios";

/* interface Categories{
    title:string,
    description:string
} */

const ListCategories=()=>{

    const [loading, setLoading]=useState(true);
    const [categories, setCategories]=useState([]);

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

    return (<>Catégory: {categories.length}</>)
}
export default ListCategories;
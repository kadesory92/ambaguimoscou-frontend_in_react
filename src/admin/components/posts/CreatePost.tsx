import axios from "axios";
import { useEffect, useState } from "react";

type TCategory={
    id:number,
    title:string,
}

/* interface IPostInput{
    category_id:number,
    id:number,
    title:string,
    content:string,
    image:string
} */

const CreatePost=()=>{

    const [categoryList, setCategoryList]=useState<TCategory[]>([]);
    const [postInput, setPostinput]=useState({
        category_id:'',
        title:'',
        content:'',
        image:''
    });


    const handleInput=(e:any)=>{
        e.persist();
        setPostinput({...postInput,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categories')
          .then(res=>{
            setCategoryList(res.data.categoryList);
            console.log(res.data.categoryList);
          })
      }, []);
    

    return (
            <>
               <div className="container py-5 ">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Ajouter de post</h3>
                                </div>
                                <div className="card-body">
                                    <form action="">
                                        <div className="form-group md-6">
                                            <label htmlFor="">Category :</label>
                                            <select name="category_id" onChange={handleInput} value={postInput.category_id} className="form-control">
                                                <option>Select Category</option>
                                                {
                                                    categoryList.map((item)=>{
                                                       return (
                                                        <option value={item.id} key={item.id}>{item.title}</option>
                                                       )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group md-6">
                                            <label htmlFor="">Titre :</label>
                                            <input type="text" name="title" onChange={handleInput} value={postInput.title} className="form-control" />
                                        </div>
                                        <div className="form-group md-6">
                                            <label htmlFor="">Contenu :</label>
                                            <textarea name="content" id="content" onChange={handleInput} value={postInput.content} className="form-control"></textarea>
                                        </div>
                                        <div className="form-group md-6">
                                            <label htmlFor="">Image :</label>
                                            <input type="file" name="image" onChange={handleInput} className="form-control" />
                                        </div>
                                        <div className="form-group md-6 mt-2">
                                            <button type="submit" className="btn btn-primary w-100">Enregistrer</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </>
    )
}
export default CreatePost;
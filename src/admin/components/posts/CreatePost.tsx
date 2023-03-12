const CreatePost=()=>{
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
                                            <select name="category_id" className="form-control">
                                                <option value="">Select Category</option>
                                            </select>
                                        </div>
                                        <div className="form-group md-6">
                                            <label htmlFor="">Titre :</label>
                                            <input type="text" name="password" className="form-control" />
                                        </div>
                                        <div className="form-group md-6">
                                            <label htmlFor="">Contenu :</label>
                                            <textarea name="content" id="content" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group md-6">
                                            <label htmlFor="">Image :</label>
                                            <input type="file" name="image" className="form-control" />
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
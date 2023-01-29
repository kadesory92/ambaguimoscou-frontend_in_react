const Register=()=>{
    return (
            <>
               <div className="container py-5 auth">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Inscription</h3>
                                </div>
                                <div className="card-body">
                                    <form action="">
                                        <div className="form-group md-3">
                                            <label htmlFor="">Nom :</label>
                                            <input type="text" name="firstname" className="form-control" />
                                        </div>
                                        <div className="form-group md-3">
                                            <label htmlFor="">Prénom :</label>
                                            <input type="text" name="lastname" className="form-control" />
                                        </div>
                                        <div className="form-group md-3">
                                            <label htmlFor="">Email :</label>
                                            <input type="email" name="email" className="form-control" />
                                        </div>
                                        <div className="form-group md-3">
                                            <label htmlFor="">Mot de passe :</label>
                                            <input type="password" name="password" className="form-control" />
                                        </div>
                                        <div className="form-group md-3">
                                            <label htmlFor="">Confirmation de Mot de passe :</label>
                                            <input type="password" name="password" className="form-control" />
                                        </div>
                                        <div className="form-group md-3">
                                            <label htmlFor="">Passeport :</label>
                                            <input type="file" name="passport" className="form-control" />
                                        </div>
                                        <div className="form-group md-3">
                                            <label htmlFor="">Photo :</label>
                                            <input type="file" name="image" className="form-control" />
                                        </div>
                                        <div className="form-group md-3 mt-2">
                                            <button type="submit" className="btn btn-primary w-100">Inscrire</button>
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
export default Register;
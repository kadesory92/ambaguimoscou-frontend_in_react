import React from "react";

const Login=()=>{
    return (
            <>
                <div className="container py-5 auth">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Connexion</h3>
                                </div>
                                <div className="card-body">
                                    <form action="">
                                        <div className="form-group md-3">
                                            <label htmlFor="">Email:</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group md-3">
                                            <label htmlFor="">Mot de passe:</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group md-3 mt-2">
                                            <button type="submit" className="btn btn-primary w-100">Login</button>
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
export default Login;
import { Link } from "react-router-dom";
import Header from "../components/layouts/inc/Header";

const Home=()=>{
    return (
            <>
                <header className="py-5 mt-5">
                    <Header/>
                </header>
                <div className="section_one">
                    <section className="container my-4">
                        <h2 className="text-center mb-5">A qui s'adresse -t-elle?</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100 text-center">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 text-center">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 text-center">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="pt-4">
                        <h2 className="text-center mb-5">Nos Services</h2>
                        <div className="container px-lg-5">
                            {/* <!-- Page Features--> */}
                            <div className="row gx-lg-5">
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                                            <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                                            <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download"></i></div>
                                            <h2 className="fs-4 fw-bold">Free to download</h2>
                                            <p className="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading"></i></div>
                                            <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                                            <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap"></i></div>
                                            <h2 className="fs-4 fw-bold">Feature boxes</h2>
                                            <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code"></i></div>
                                            <h2 className="fs-4 fw-bold">Simple clean code</h2>
                                            <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check"></i></div>
                                            <h2 className="fs-4 fw-bold">A name you trust</h2>
                                            <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                    </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>  
                </div>
            </>
    )
}
export default Home;
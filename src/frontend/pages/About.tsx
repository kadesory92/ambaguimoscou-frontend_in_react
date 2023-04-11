import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const About=()=>{
    return (
        <>
            <div className="container mt-5 about-page">
                <div className="row">

                    <div className="col-6">
                        <div className="card mb-3 first-card">
                            <div className="row g-0">
                                <div className="pageAbout col-md-4">
                                    <img src={img1} className="img-fluid rounded-start ms-auto h-75 w-100 ml-2" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-6"></div>

                </div>

                <div className='row'>
                    <div className="col-6"></div>

                    <div className="col-6">
                        <div className="card mb-3 second-card">
                        <div className="row g-0">
                            <div className="pageAbout col-md-4">
                                <img src={img2} className="img-fluid rounded-start ms-auto h-75 w-100 ml-2" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="row">
                    
                    <div className="col-6">
                        <div className="card mb-3 third-card">
                            <div className="row g-0">
                                <div className="pageAbout col-md-4">
                                    <img src={img3} className="img-fluid rounded-start ms-auto h-75 w-100 ml-2" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-6"></div>

                </div>

            </div>
        </>
    )
}
export default About;
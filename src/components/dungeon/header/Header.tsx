import Name from "./Name";
import HealthBar from "./HealthBar";


function Header(){
    return(
        <div className="row fixed-top mt-5 clearfix bg-dark align-items-center pt-3 pb-1">
            <div className="col-2 col-sm-1 d-md-none">
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-5 ms-auto col-sm-11 col-10">
                <Name/>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-7">
                <HealthBar/>
            </div>
        </div>
    )
}

export default Header;
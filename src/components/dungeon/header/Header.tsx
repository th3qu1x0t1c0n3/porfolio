import HealthBar from "./HealthBar";
import {Form, FormSelect} from "react-bootstrap";
import {ICharactere} from "../../../assets/models/dungeon/character";
import {useNavigate} from "react-router-dom";

interface IHeaderDnd {
    character: ICharactere,
    characters: ICharactere[],
    changeCharacter(e: any): void,
    decrementHealth(): void,
    incrementHealth(): void
}
function Header({character, characters, changeCharacter, decrementHealth, incrementHealth}: IHeaderDnd){
    const navigate = useNavigate();

    return(
        <div className="row fixed-top mt-5 clearfix bg-dark align-items-center pt-3 pb-1">
            <div className={"mt-3"}></div>
            <div className="col-2 col-sm-1 d-md-none">
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            {/*TODO: Change to put on the left */}
            <div className="col-xl-3 col-lg-3 col-md-3 ms-auto col-sm-11 col-10">
                <div className="row text-light">
                    <a className="col-1 ms-2 " onClick={() => navigate('/portfolio')}><i
                        className="fa-sharp fa-solid fa-house-user fa-3x text-warning"></i></a>
                    <Form className={`col-6`}>
                        <FormSelect className="form-select badge w-50 bg-light text-dark mt-1 p-2"
                                    aria-label="Default select example" onChange={changeCharacter} defaultValue={character.id}>
                            {
                                characters.map((character: ICharactere, index) => {
                                    return <option key={index} value={character.id} className="fw-bold">{character.name}</option>
                                })
                            }
                        </FormSelect>
                    </Form>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <HealthBar character={character} decrementHealth={decrementHealth} incrementHealth={incrementHealth}/>
            </div>
        </div>
    )
}

export default Header;
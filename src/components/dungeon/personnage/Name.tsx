import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


function Name() {
    const navigate = useNavigate();
    const {t} = useTranslation()


        // [(ngModel)]="lePerso" (ngModelChange)="persoChoisi()"
        // [value]="per.id" *ngFor="let per of getPerso() | async">{{per.name}}
    return(
        <div className="row text-light">
            <a className="col-1 ms-2 " onClick={() => navigate('/portfolio')}><i className="fa-sharp fa-solid fa-house-user fa-3x text-warning"></i></a>

            <select id="nomPersonnage" className="form-select badge w-50 bg-light text-dark ms-5 mt-1">
            <option className="fw-bold"></option>
            </select>
        </div>
    );
}

export default Name;
import './profile.css';
import { ProfileImage } from './ProfileImage';

export const Bio = () => {
    return(
        <div className="profile">
            <ProfileImage />
            <div>
                <h1>MICHELL ZIPITRÍA</h1>
                <div>
                    <p>Soy una persona perfeccionista. Apasionado por la informática. <br />Estoy constantemente informándome y aprendiendo.
                    <br />Actualemte estoy mejorando mi inglés, mi desempeño en desarrollo web. Y también estoy aprendiendo diseño gráfico.</p>
                </div>
            </div>
        </div>
    )
}
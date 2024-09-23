import { RiBuilding2Line } from 'react-icons/ri';
import '../main.css';

function Card({ title, info }) {

    return (
        <div className='boxShadow' style={{ width: "30%", background: "white", borderRadius: "10px", padding: "1em", display: "flex", justifyContent: "space-between", alignItems: "start" }}>
            <div>
                <h3 style={{ margin: 0 }}>{title}</h3>
                <p>{info}</p>
            </div>
            <div style={{ width: "40px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", background: "rgb(229, 229, 235)" }}>
                <RiBuilding2Line style={{ fontSize: "25px" }} />
            </div>

        </div>
    )
}
export default Card;

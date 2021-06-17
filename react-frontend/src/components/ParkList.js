import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    width: "500px",
    height: "auto",
}
const ParkList = ({ parks }) => (
    <>
        {Array.from(parks).map((park, key) => (
            <Link className="article-list-item mb-3" key={key} to={`/park/${park.name}`}>
                {/* <div className="card w-50 mx-auto">
                    <img src={park.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{park.name}</h5>
                        <p className="card-text">{park.address}</p>
                        <p className="card-text">{park.desc}</p>
                    </div>
                </div> */}
                <div className="media">
                    <img className="img-fluid" src={park.image} style={style} alt="" />
                    <div className="media-body text-center">
                        <h1 className="mt-0">{park.name}</h1>
                        <h4 className="mt-0">{park.address}</h4>
                        <p>{park.desc}</p>
                    </div>
                </div>

            </Link>
        ))}
    </>
);

export default ParkList;
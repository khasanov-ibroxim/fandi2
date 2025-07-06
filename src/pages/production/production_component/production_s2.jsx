import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link} from "react-router-dom"


const ProductionS2 = ({item}) => {
    return (
        <div>
            <div className="s2_top">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="s2_top_img" style={item.top_right.top_img_style}></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="s2_top_right">
                            <div className="subtitle_box">
                                <span></span>
                                <h2>{item.top_right.subtitle}</h2>
                            </div>
                            <h1>{item.top_right.title}</h1>
                            <p>{item.top_right.p}</p>
                            <h3>{item.top_right.list_title}</h3>
                            <ul>
                                {item.top_right.list.map((itemList , index)=>(
                                    <li key={index}><CheckCircleIcon/>{itemList}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s2_bottom">
                {item.top_bottom.map((itemBottom, index)=>(
                    <div key={index} className="s2_bottom_item">
                        <div className="s2_bottom_item_top">
                            <div className="s2_bottom_item_top_element">
                                <div className="s2_bottom_item_top_line"></div>
                                <img src={itemBottom.icon} alt="Fablio"/>
                            </div>
                            <div className="s2_bottom_item_top_text">
                                <h1>{itemBottom.title}</h1>
                                <h2>{itemBottom.subtitle}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductionS2;
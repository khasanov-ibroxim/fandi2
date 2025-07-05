import React, {useState} from 'react';
import {Link} from "react-router-dom"
const ProductionS3 = ({item}) => {
    const [activeTab, setActiveTab] = useState(1)
    const activeItem = item.find(tabs => tabs.id === activeTab)

    return (
        <div className={"production_s3"}>
            <div className="production_s3_tab">
                {item.map(({title, id}, index) => (
                    <div key={index} className={`production_s3_tab_item ${id === activeTab && "active"}`}
                         onClick={() => setActiveTab(id)}>{title}</div>
                ))}
            </div>
            <div className="production_s3_content">
                <div className="production_s3_left">
                    <img src={activeItem.tab_img} alt=""/>
                </div>
                <div className="production_s3_right">
                    <div className="production_s3_right_title">{activeItem.title}</div>
                    {activeItem.p.map((itemP , index)=>(<p key={index}>{itemP}</p>))}
                    <Link className={"production_s3_right_btn"} to={"#"}>Свяжитесь</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductionS3;
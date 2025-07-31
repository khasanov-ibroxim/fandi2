import React, { useState } from 'react';
import { useParams } from "react-router-dom";

const ProductionS3 = ({ item }) => {
    const [activeTab, setActiveTab] = useState(1);
    const { id } = useParams();

    const itemArray = Object.values(item); // object to array
    const activeItem = itemArray.find(tabs => tabs.id === activeTab);

    return (
        <div className="production_s3">
            <div className="production_s3_tab">
                {itemArray.map((tab) => (
                    <div
                        key={tab.id}
                        className={`production_s3_tab_item ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>

            {activeItem && (
                <div className="production_s3_content">
                    <div className="production_s3_left">
                        <img src={activeItem.tab_img} alt="" />
                    </div>
                    <div className="production_s3_right">
                        <p dangerouslySetInnerHTML={{__html:activeItem.p}}></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductionS3;

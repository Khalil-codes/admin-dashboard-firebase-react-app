import { ArrowDownward } from '@mui/icons-material';
import React from 'react';
import './Info';
const Info = () => {
    return (
        <div className="featured">
            <div className="featured-item">
                <span className="featured-title"></span>
                <div className="featured-money-container">
                    <span className="featured-money">$1000</span>
                    <span className="featured-money-rate">
                        -7.5 <ArrowDownward />
                    </span>
                </div>
                <span className="featured-sub">Demo Text Here</span>
            </div>
        </div>
    );
};

export default Info;

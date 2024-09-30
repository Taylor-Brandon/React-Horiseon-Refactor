import React from 'react';
import LeadImg from '../../images/lead.png';
import BrandImg from '../../images/brand.png';
import CostImg from '../../images/cost.png';

export default function Benefits() {
    return (
        <div className='benefits'>
             <div>
                <h3>Lead Generation</h3>
                <img src={LeadImg} alt="funnel and gear image" />
                <p>Inbound strategies for lead generation require less work for your business, bringing customers
                    directly to your website.</p>
            </div>
            <div>
                <h3>Brand Awareness</h3>
                <img src={BrandImg} alt="lightbulb awareness image" />
                <p>Users find your business through paid and organic searches, increasing the search ranking and
                    visibility for your business.</p>
            </div>
            <div>
                <h3>Cost Management</h3>
                <img src={CostImg} alt="coin img"></img>
                <p>As the search ranking for your business increases, your advertising costs decrease, and you no longer
                    need to advertise your page.</p>
            </div>
        </div>
    )
}
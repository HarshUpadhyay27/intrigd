import React from 'react'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';

const Feature = () => {
    return (
        <div>
        <h1>OUR APP FEATURE</h1>
            <ul>
                <li>
                    <CheckBoxOutlinedIcon className="logo" />
                    <h1>Selection</h1>
                    <p>Cut out the clutter with curated content handpicked especially for you.</p>
                </li>
                <li>
                    <AccountTreeOutlinedIcon className="logo"/>
                    <h1>Aggregation</h1>
                    <p>Differing opinions aggregated in an easy-to-consume fashion.</p>
                </li>
                <li>
                    <ChromeReaderModeIcon className="logo"/>
                    <h1>Simplification</h1>
                    <p>Diverse range of complex topics simplified for you.</p>
                </li>
            </ul>
        </div>
    )
}

export default Feature
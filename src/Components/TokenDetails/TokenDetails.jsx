import React from 'react';
import './TokenDetails.css';

function TokenDetails() {
    return (
        <div className='token__details'>
            <div className="token">
                <h2 className='toke_title'>Token Details</h2>
                <table>
                    <tr>
                        <th>Token Name</th>
                        <th>HIVE Token</th>
                    </tr>
                    <tr>
                        <td>Abbreviation if any</td>
                        <td>HT</td>
                    </tr>
                    <tr>
                        <td>Token Standard</td>
                        <td>BEP-20</td>
                    </tr>
                    <tr>
                        <td>Total Number of coins</td>
                        <td>500,000,000</td>
                    </tr>
                    <tr>
                        <td>Decimals</td>
                        <td>18</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default TokenDetails

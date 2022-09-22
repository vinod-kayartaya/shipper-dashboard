import React from 'react';

const ShipperList = ({ shippers }) => {
    console.log('shippers', shippers);
    const shipperListJsx = shippers.map((sh) => (
        <tr key={sh.shipperId}>
            <td>{sh.shipperId}</td>
            <td>{sh.companyName}</td>
            <td>{sh.phone}</td>
        </tr>
    ));

    return (
        <>
            <h3>Existing shipper list</h3>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company name</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>{shipperListJsx}</tbody>
            </table>
        </>
    );
};

export default ShipperList;

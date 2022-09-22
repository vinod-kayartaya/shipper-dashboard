import axios from 'axios';
import { useEffect, useState } from 'react';
import NewShipper from './components/NewShipper';
import ShipperList from './components/ShipperList';
const hostname = '3.88.10.138';
const shipperServiceUrl = `http://${hostname}:8080/api/shippers/`;

const App = () => {
    const [shippers, setShippers] = useState([]);

    useEffect(() => {
        axios
            .get(shipperServiceUrl)
            .then((resp) => setShippers(resp.data.shipperList));
    }, []);

    const addShipper = (shipper) => {
        axios
            .post(shipperServiceUrl, shipper)
            .then((resp) => resp.data)
            .then((shipper) => setShippers([...shippers, shipper]));
    };

    return (
        <>
            <div className='alert alert-primary'>
                <div className='container'>
                    <h1>Shipper dashboard</h1>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <NewShipper addShipper={addShipper} />
                    </div>
                    <div className='col'>
                        <ShipperList shippers={shippers} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;

import { useState } from 'react';

const NewShipper = ({ addShipper }) => {
    const [shipper, setShipper] = useState({
        companyName: '',
        phone: '',
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setShipper({ ...shipper, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!shipper.companyName || !shipper.phone) {
            alert(
                'Both the input fields are mandatory. Please enter data and try again'
            );
            return;
        }
        addShipper(shipper);
        setShipper({ companyName: '', phone: '' });
    };

    return (
        <>
            <h3>Add a new shipper data</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='companyName' className='form-label'>
                        Company name
                    </label>
                    <input
                        type='text'
                        name='companyName'
                        id='companyName'
                        value={shipper.companyName}
                        className='form-control'
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='phone' className='form-label'>
                        Phone number
                    </label>
                    <input
                        type='text'
                        name='phone'
                        id='phone'
                        value={shipper.phone}
                        className='form-control'
                        onChange={handleChange}
                    />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </>
    );
};

export default NewShipper;

import React, { useState } from 'react';

function CreateFolder() {
    const [open, setIsOpen] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [formData, setFormData] = useState({});
    const [allFormsData, setAllFormsData] = useState([]);

    const openForm = () => setIsOpen(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayText(formData.ingredients);
        setAllFormsData(prevFormsData => [...prevFormsData, formData]);
        setFormData({}); // Reset formData for a new form
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openForm}>Add new Folder</button>
            {open && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter in Steps:
                        <textarea
                            name="ingredients"
                            cols="40"
                            rows="5"
                            className='boxStyle'
                            onChange={handleChange}
                        />
                        <button type="submit">Done</button>
                    </label>
                </form>
            )}
            <div>
                {allFormsData.map((form, index) => (
                    <div key={index} className='centerText' style={{ whiteSpace: 'pre-wrap' }}>
                        <h4>{`Form ${index + 1}`} Ingredients:</h4>
                        <h4 key={index} className='centerText' style={{ whiteSpace: 'pre-wrap' }}>{form.ingredients}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateFolder;
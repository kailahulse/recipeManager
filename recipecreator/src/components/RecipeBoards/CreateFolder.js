import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

function CreateFolder () {
    const [open, setIsOpen] = React.useState(false);

    const openForm = () => setIsOpen(true);
    
    return (
        <div>
            <button onClick={openForm}> Add new Folder</button>
            {/* <Form open={open}/> */}
            {open && (
            <form>
                <label>
                    Enter in Steps:
                    <input 
                        type='text'

                    />
                </label>

                </form>)}

        </div>
    )
}

export default CreateFolder;
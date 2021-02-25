import React from 'react';
import './addcontent.styles.css';


const AddContentForm = () => {

        return (
            <form>
                <label htmlFor="contentName">Name of content</label>
                <input id="contentName" type="text" />
                <label htmlFor="contentDescription">Description</label>
                <input id="contentDescription" type="text" />
                <input type="submit" />
            </form>
        );
}

export default AddContentForm;

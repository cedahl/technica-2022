import React from 'react';
import '../index.css';

const NameForm = () => {
    return (
        <form>
            <label class="border-solid border-b-8 text-3xl  border-gray-700">
                <input type="text" name="name" class = "w-1/3 p-3 m-5"/>
            </label>
            <input class="text-3xl" type="submit" value="Submit!"  />
        </form>
    )
}

export default NameForm;
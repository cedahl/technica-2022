import React from 'react';
import '../index.css';

const NameForm = () => {
    return (
        <form class = "flex ">
            <div class="flex-auto text-3xl">
                <label >
                    <input type="text" name="name" class = "p-3 m-5"/>
                </label>
                <input class="text-3xl bg-blue-800 text-gray-100 p-3" type="submit" value="Submit"/>
            </div>

        </form>
    )
}

export default NameForm;
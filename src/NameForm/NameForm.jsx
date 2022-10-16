import React from 'react';
import '../index.css';

const NameForm = () => {
    return (
        <form class = "flex ">
            <div class="flex-auto text-3xl">
                <label >
                    <input type="text" name="name" class = "p-3 m-5"/>
                </label>
                <input class="text-3xl bg-blue-800 p-3 rounded-md text-gray-100 transition ease-in-out delay-325 hover:bg-blue-400" type="submit" value="Enter"/>
            </div>

        </form>
    )
}

export default NameForm;
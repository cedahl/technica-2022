import React from 'react';

const CreateCache = () => {
    return (
        <div class="small-box">
            <h1 class="text-3xl pt-2">Drop a cache</h1>
            <p>Leave your message & photo</p>
            <form>
                <div class="text-3xl">
                    <label >
                        <input type="text" name="name" class = "p-3 m-5"/>
                    </label>
                    <input class="text-xl bg-blue-800 text-gray-100 py-2 px-4 rounded-md transition ease-in-out delay-325 hover:bg-blue-400" type="submit" value="Leave your mark"/>
                </div>
        </form>
        </div>
    );
}

export default CreateCache;
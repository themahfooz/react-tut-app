import { useState } from "react";

function Profile(){

    const [loggedIn, setLoggedIn]=useState(2);
    return(
        <div>
            {
                loggedIn === 1 ?
                   <h1>Welcome user 1</h1>
                :loggedIn === 2 ?
                <h1>Welcome user 2</h1>
                :<h1>Welcome user 3</h1>
                

            }
        </div>
    );
}
export default Profile
// Code EyesOnMe Component Here
import React, { useState } from "react";

function EyesOnMe(){

    return (
        <button 
        onFocus={(e) => console.log('Good!')}
        onBlur={(e) => console.log('Hey! Eyes on me!')}
        >Eyes on me.</button>
    )
}

export default EyesOnMe

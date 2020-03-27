import React from 'react';

const Form = props =>{
    return(
        <div className="formContainer">
            <form>
                <input 
                    type="text"
                    value={props.value}
                    placeholder="Wpisz miasto"
                    onChange={props.change}
                    />
            </form>
            <div className="hr"></div>
        </div>
    );
}

export default Form
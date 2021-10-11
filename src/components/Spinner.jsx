import React from 'react'

function Spinner() {
    return (
        <div class="preloader-wrapper big active" style={{marginTop:'5%'}}>
        <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
            <div class="circle"></div>
        </div><div class="gap-patch">
            <div class="circle"></div>
        </div><div class="circle-clipper right">
            <div class="circle"></div>
        </div>
        </div>
    </div>
    )
}

export default Spinner

import React from 'react'

function Loading() {
    return (
        <div classname="d-flex justify-content-center" style={{height:"80vh"}}>
            <div class="spinner-grow ml-3 text-primary" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow ml-3 text-secondary" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow ml-3 text-success" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow ml-3 text-danger" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow ml-3 text-warning" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow ml-3 text-info" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow ml-3 text-primary" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow ml-3 text-dark" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading

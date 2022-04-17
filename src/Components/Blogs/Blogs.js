import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center m-5'>Difference between authorization and authentication</h2>
            <table class="table table-striped container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Authorization</th>
                            <th scope="col">Authentication</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>The authority of the individual or user to access the resources is evaluated during the authorisation procedure.</td>
                            <td>The identity of users is validated during the authentication process before they are granted access to the system.</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Users or individuals are validated during this process.</td>
                            <td>Users or individuals are validated during the authentication procedure.</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>This procedure is carried out after the authentication procedure has been completed.</td>
                            <td>It is completed prior to the authorization procedure.</td>
                        </tr>
                    </tbody>
                </table>
            </table>
            <div className='container'>
                <h2 className='text-center m-5'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h4>Using firebase:</h4> <p>
                    Indeed, using Firebase as a backend for dynamic apps is a less technical and time-consuming alternative to building full-fledged backend code.</p>
                <p>You might also want to use this tool if you intend to host and administer your app in the cloud in the future. Because Firebase is serverless, it eliminates the need to bother about cloud server configuration details.</p>
                <p>
                    It also allows you access to other Google goods and capabilities, such as Google Drive and Sheets, as a Google Cloud service. For example, you can import dummy data from Google Sheets and utilize it to serve your app momentarily.
                </p>
                <h4>Other options do you have to implement authentication:</h4>
                <p>1. Password-based authentication</p>
                <p>2. Multi-factor authentication</p>
                <p>
                    3. Biometric authentication
                </p>
                <p>4.  Certificate-based authentication</p>
            </div>
            <div className='container'>
                <h2 className='text-center m-5'>What other services does firebase provide other than authentication</h2>
                <h4>There are many services which Firebase provides, Most useful of them are: </h4>
                <p>1. Cloud Firestore.</p>
                <p>2. Cloud Functions.</p>
                <p>3. Authentication.</p>
                <p>4. Hosting.</p>
                <p>5. Cloud Storage.</p>
                <p>6. Google Analytics.</p>
                <p>7. Predictions.</p>
                <p>8. Cloud Messaging.</p>
            </div>
        </div>
    );
};

export default Blogs;
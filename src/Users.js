import React from 'react';
import './App.css';

function Users({ data }){
    return(
        <div className='App'>
            {data.length > 0 ? (
                data.map((user)=>{
                    return(
                        <div
                            key={user.id}
                            className='card custom-card'
                            style={{ width: '18rem', marginBottom: '20px' }}
                        >
                            <div className='card-body'>
                                <h5 className='card-title'> {user.name} </h5>
                                <p className='card-text'>
                                    <b>Email:</b> {user.email} <br />
                                    <b>Website:</b> {user.website} <br />
                                </p>
                            </div>
                        </div>
                    );
                })
            ): (
                <p className='text-center'>Loading Data</p>
            )}
        </div>
    );
}

export default Users;
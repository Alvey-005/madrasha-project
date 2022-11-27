import React, { useEffect } from 'react';
import router from 'next/router';
import 'firebase/auth';
import {app} from '../firebaseConfig';

const auth = app.auth();

const WithAuth = Component => {
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (!authUser) {
                router.push('/signin');
            }
        });
    }, []);

    return (
        <div>
            <Component {...props} />
        </div>
    )
};

export default WithAuth;
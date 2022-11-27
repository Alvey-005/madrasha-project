import {GoogleAuthProvider} from "firebase/auth";

export const uiConfig = firebase => {
    const provider = new GoogleAuthProvider();
    return {
        signInFlow: 'popup',
        signInSuccessUrl: '/admin/all-notice',
        tosUrl: '/terms-of-service',
        privacyPolicyUrl: '/privacy-policy',
        signInOptions: [
            provider.PROVIDER_ID
        ]
    }
}
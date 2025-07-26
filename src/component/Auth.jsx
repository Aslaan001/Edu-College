"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 
import { useEffect } from 'react';

const Auth = (Component) => {
    return function IsAuth(props) {
        const { data: session, status } = useSession();
        const router = useRouter();

        useEffect(() => {
            if (status === "unauthenticated") {
                router.push('/'); 
            }
        }, [status, router]);

        if (status === "loading") {
           
            return <p>Loading...</p>;
        }

        if (!session) {
            return null;
        }

        return <Component {...props} />;
    };
};

export default Auth;

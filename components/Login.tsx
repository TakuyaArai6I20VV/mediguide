import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'
import Sidebar from './Sidebar'
import { TutorialData } from './FrontEndData'
import { getDatabase, ref, update } from "firebase/database"
import Image from "next/image"

const Login = () => {
    const [user] = useAuthState(auth);

    // ユーザーがログインしたら、そのユーザーの情報をデータベースに保存する
    useEffect(() => {
        if (user) {
            const db = getDatabase();
            const userRef = ref(db, `users/${user.uid}`);
            update(userRef, {
                email: user.email,
                displayName: user.displayName,
            });
        }
    }, [user]);

    return (
        <div>
            {user ? (
                <div>
                    <div className = 'w-full h-full'>
                            <main className='grow'>
                                <section className='container mx-auto'>
                                    <h2 className='my-16 text-6xl font-bold text-center'>
                                        <span>MediGuide</span>へようこそ！
                                    </h2>
                                    <div className='my-16 text-center text-3xl'>
                                        <div className='py-5'>
                                            このwebアプリは長期的な診察を必要とする人々を
                                        </div>
                                        <div className='py-5'>
                                            サポートするために開発されました。
                                        </div>
                                        <div className='pt-24 text-sky-300 font-bold'>
                                            このwebアプリではこんな機能が使用できます！
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        {TutorialData.map((value, key) => {
                                            return(
                                                <div key={key} className='border-2 flex flex-col items-center p-4 m-2 w-full md:w-1/2 lg:w-1/3'>
                                                    <div className='font-bold text-lg text-center'>
                                                        {value.description}
                                                    </div>
                                                    <div className='flex justify-center pt-4'>
                                                        <Image src={String(value.img)} width="100" height="100" alt={value.alt}/>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </section>
                            </main>
                    </div>
                </div>
            ) : (
                <div>
                    <SignInButton />
                </div>
            )}
        </div>
    )
}

function SignInButton() {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
    }
    return (
        <div className='z-20 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600'>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 max-w-md w-full p-8 bg-blue-100 bg-opacity-75 rounded-lg shadow-lg">
                <h2 className="font-semibold text-6xl text-center py-1.5 mb-4 text-white">
                    <span>MediGuide</span>
                </h2>
                <button onClick={signInWithGoogle} className="rounded-lg flex items-center justify-center mx-auto">
                    <p className="text-xl font-bold cursor-pointer bg-orange-300 text-white p-4 rounded-full shadow-2xl">
                        グーグルでサインイン
                    </p>
                </button>
                <div className="mt-8">
                    <p className="text-gray-500 text-sm text-center">© 2024 MediGuide. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Login

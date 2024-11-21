'use client';

import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/components/firebase';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const font = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const metadata = {
    title: "MediGuide",
    description: "",
  };

  // ログインしていない場合、または読み込み中の場合にリダイレクト
  useEffect(() => {
    if (!loading && !user) {
      // ログインしていない場合、ホームにリダイレクト
      router.push('/');
    }
  }, [loading, user, router]);

  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className="flex min-h-screen">
        {user && <Sidebar />}
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}

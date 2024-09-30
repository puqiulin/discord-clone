export default function AuthLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full flex justify-center items-center bg-indigo-500">
            {children}
        </div>
    );
}

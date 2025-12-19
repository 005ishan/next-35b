export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            Header
            {children}  
            Footer
        </section>
    );
}
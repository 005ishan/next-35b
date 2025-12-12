export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            User header
            {children}
            user footer
        </section>
    );
}
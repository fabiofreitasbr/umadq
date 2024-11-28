import Header from "../parts/estrutura/header";
import Footer from "../parts/estrutura/footer";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    );
}

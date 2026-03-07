import { ShieldCheck, Search, ShoppingBag, Fingerprint } from 'lucide-react';
import './Features.css';

export default function Features() {
    const benefits = [
        {
            icon: <ShieldCheck size={32} className="feature-icon" />,
            title: "Lojas Oficiais",
            description: "Só compartilhamos links de lojas 100% seguras como Amazon e Mercado Livre."
        },
        {
            icon: <Search size={32} className="feature-icon" />,
            title: "Garimpo Diário",
            description: "Todos os dias vasculhamos a internet para encontrar os descontos de verdade."
        },
        {
            icon: <ShoppingBag size={32} className="feature-icon" />,
            title: "Compre com Confiança",
            description: "Esqueça as fraudes e sites falsos. Aqui sua compra é protegida e inteligente."
        },
        {
            icon: <Fingerprint size={32} className="feature-icon" />,
            title: "Facilidade Total",
            description: "Você não precisa fazer nada. Apenas acompanhe os grupos e clique quando gostar."
        }
    ];

    return (
        <section className="section bg-light" id="features">
            <div className="container">
                <div className="features-header text-center mb-12 animate-fade-in">
                    <h2 className="section-title">Por que fazer parte do <span>Compra Inteligente</span>?</h2>
                    <p className="section-subtitle">Nós fazemos o trabalho duro para você economizar com segurança total.</p>
                </div>

                <div className="features-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className={`feature-card delay-${(index + 1) * 100}`}>
                            <div className="icon-wrapper">
                                {benefit.icon}
                            </div>
                            <h3 className="feature-title">{benefit.title}</h3>
                            <p className="feature-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="logos-section animate-fade-in delay-300">
                    <p className="logos-text">OFERTAS EXCLUSIVAS DAS MAIORES LOJAS</p>
                    <div className="logos-container">
                        <div className="store-badge amazon-badge">
                            <img src="/amazon.svg" alt="Amazon" className="store-logo" />
                        </div>
                        <div className="store-badge ml-badge">
                            <img src="/mercadolivre.png" alt="Mercado Livre" className="store-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

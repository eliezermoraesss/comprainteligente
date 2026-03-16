import { MessageCircle, Send } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero section">
            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <div className="badge animate-float">🔥 OFERTAS E CUPONS EXCLUSIVOS!</div>
                    <div className="hero-cta-group delay-200">
                        <a
                            href="https://chat.whatsapp.com/HMQHz338yUn9nall7l2i54"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp animate-pulse-green"
                        >
                            <MessageCircle size={24} />
                            <span>Entrar no Grupo VIP</span>
                        </a>

                        <a
                            href="https://whatsapp.com/channel/0029Vb76HYMCBtxGmtnsCq0W"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp animate-pulse-green"
                        >
                            <MessageCircle size={24} />
                            <span>Acessar Canal do WhatsApp</span>
                        </a>

                        <a
                            href="https://t.me/comprainteligenteofc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-telegram animate-pulse-blue"
                        >
                            <Send size={24} />
                            <span>Acessar Canal do Telegram</span>
                        </a>
                    </div>

                    <h2 className="hero-title">
                        As melhores <span className="highlight">ofertas e achados</span> com <span className="highlight">descontos reais</span> das maiores lojas online do <span className="highlight">Brasil</span>
                    </h2>

                    <p className="hero-description">
                        Só compartilho links de <strong>lojas oficiais ou autorizadas</strong>, pra você comprar com total segurança. Você não precisa fazer nada: é só acompanhar, escolher e aproveitar!
                    </p>

                    <p className="hero-guarantee delay-300">
                        ✅ 100% Gratuito. Sem spans. Só ofertas de verdade.
                    </p>
                </div>
            </div>
        </section>
    );
}

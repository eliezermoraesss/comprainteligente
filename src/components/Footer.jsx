import { MessageCircle, Send } from 'lucide-react';
import './Footer.css';
import { ShoppingCart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-dark">
            <div className="container footer-content pt-8 pb-4">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <ShoppingCart size={24} className="text-secondary" />
                        <span className="font-bold">Compra Inteligente</span>
                    </div>
                    <p className="footer-description">
                        Sua fonte diária dos melhores achados e descontos reais da internet, com foco em lojas parceiras oficiais e segurança total.
                    </p>
                </div>

                <div className="footer-links">
                    <h4 className="footer-heading">Nossas Comunidades</h4>
                    <ul className="footer-list">
                        <li>
                            <a href="https://chat.whatsapp.com/HMQHz338yUn9nall7l2i54" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MessageCircle size={18} /> Grupo Vip no WhatsApp
                            </a>
                        </li>
                        <li>
                            <a href="https://whatsapp.com/channel/0029Vb76HYMCBtxGmtnsCq0W" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MessageCircle size={18} /> Canal Oficial no WhatsApp
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/comprainteligenteofc" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Send size={18} /> Canal Oficial no Telegram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom border-t text-center pt-4 pb-4">
                <div className="container">
                    <p className="footer-legal">
                        &copy; {currentYear} Compra Inteligente. Todos os direitos reservados.
                        <br />
                        Este site não faz parte do website do Meta/Facebook/Instagram. Recomendamos apenas ofertas reais e não nos responsabilizamos pela negociação, uma vez que o cliente finaliza a compra diretamente no site do lojista (ex: Amazon, Mercado Livre).
                    </p>
                </div>
            </div>
        </footer>
    );
}

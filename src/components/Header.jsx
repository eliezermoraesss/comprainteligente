import { ShoppingCart, CheckCircle } from 'lucide-react';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo-container animate-fade-in">
                    <img src="/logo.png" alt="Compra Inteligente" className="brand-logo" />
                </div>
            </div>
        </header>
    );
}

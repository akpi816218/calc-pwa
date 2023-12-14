import App from '@/App';
import { createRoot } from 'react-dom/client';

if (!window.location.pathname.endsWith('/')) window.location.pathname += '/';
else createRoot(document.getElementById('root')!).render(<App />);

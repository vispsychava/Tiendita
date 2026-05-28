import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background: #1e2230; /* Fondo slate oscuro pero azulado, ya no es negro */
      color: #f1f5f9;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    .dashboard {
      display: flex;
      min-height: 100vh;
      background: #1e2230;
    }

    /* SIDEBAR CON MÁS HERMOSO CONTRASTE */
    .sidebar {
      width: 260px;
      background: #121520; /* Más oscuro que el fondo general para dar profundidad */
      border-right: 1px solid rgba(255, 255, 255, 0.05);
      padding: 35px 24px;
      display: flex;
      flex-direction: column;
    }

    .logo {
      margin: 0 0 35px;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: 3px;
      background: linear-gradient(135deg, #38bdf8, #818cf8); /* Gradiente más vivo */
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .sidebar h1 {
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    nav a {
      text-decoration: none;
      color: #94a3b8;
      padding: 12px 16px;
      border-radius: 12px;
      font-weight: 500;
      font-size: 15px;
      transition: all 0.2s ease;
    }

    nav a:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #38bdf8;
      transform: translateX(4px);
    }

    /* MAIN CON TARJETAS QUE FLOTAN (GLASSMORPHISM) */
    .main {
      flex: 1;
      padding: 40px;
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      flex-wrap: wrap;
      gap: 20px;
    }

    .header h1 {
      margin: 0;
      font-size: 34px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: -0.5px;
    }

    .header p {
      margin: 6px 0 0;
      color: #94a3b8;
      font-size: 15px;
    }

    /* BOTÓN CON LUZ Y GRADIENTE */
    .btn {
      background: linear-gradient(135deg, #0ea5e9, #2563eb);
      border: none;
      color: white;
      padding: 14px 24px;
      border-radius: 14px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
      transition: all 0.25s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(14, 165, 233, 0.5);
      background: linear-gradient(135deg, #38bdf8, #2563eb);
    }

    /* CONTENEDORES CLANCOS TRASLÚCIDOS (GLASS EFFECT) */
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .card {
      background: rgba(255, 255, 255, 0.04); /* Blanco ultra translúcido */
      backdrop-filter: blur(10px); /* Desenfoque de fondo elegante */
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 26px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card:hover {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(56, 189, 248, 0.4);
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .card span {
      color: #94a3b8;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .card h2 {
      margin: 10px 0 0;
      font-size: 38px;
      font-weight: 700;
      color: #ffffff;
    }

    /* TABLA MODERNA */
    .table-box {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 24px;
      padding: 26px;
      overflow-x: auto;
      margin-bottom: 40px;
    }

    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      flex-wrap: wrap;
      gap: 15px;
    }

    .table-header h2 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
    }

    .table-header input {
      background: rgba(15, 17, 26, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      padding: 12px 18px;
      border-radius: 14px;
      outline: none;
      font-size: 14px;
      width: 260px;
      transition: all 0.3s ease;
    }

    .table-header input:focus {
      border-color: #38bdf8;
      background: rgba(15, 17, 26, 0.6);
      box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.15);
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      text-align: left;
      padding: 16px;
      color: #64748b;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      font-weight: 600;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    td {
      padding: 18px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      color: #e2e8f0;
    }

    tr:last-child td {
      border-bottom: none;
    }

    tr:hover td {
      background: rgba(255, 255, 255, 0.02);
      color: #ffffff;
    }

    /* BADGES BRILLANTES */
    .status {
      padding: 6px 14px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      display: inline-block;
    }

    .ok {
      background: rgba(52, 211, 153, 0.15);
      color: #34d399;
    }

    .low {
      background: rgba(f8, 113, 113, 0.15);
      color: #f87171;
    }

    /* ACTIVIDAD RECIENTE INTERACTIVA */
    .activity {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 24px;
      padding: 26px;
    }

    .activity h2 {
      margin-top: 0;
      margin-bottom: 24px;
      font-size: 22px;
      font-weight: 700;
    }

    .activity-item {
      background: rgba(255, 255, 255, 0.02);
      padding: 16px 20px;
      border-radius: 14px;
      margin-bottom: 12px;
      color: #cbd5e1;
      font-size: 15px;
      border-left: 4px solid #38bdf8;
      transition: all 0.2s ease;
    }

    .activity-item:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateX(6px);
      color: #ffffff;
    }

    .activity-item:last-child {
      margin-bottom: 0;
    }

    /* RESPONSIVE */
    @media (max-width: 992px) {
      .dashboard {
        flex-direction: column;
      }
      .sidebar {
        width: 100%;
        padding: 24px;
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }
      .logo {
        margin-bottom: 20px;
      }
      nav {
        flex-direction: row;
        flex-wrap: wrap;
      }
      .main {
        padding: 24px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  constructor() {
    console.log('Hola');
  }
}
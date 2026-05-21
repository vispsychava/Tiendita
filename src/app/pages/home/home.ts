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
      background: #0f1115;
      color: #ffffff;
      font-family: Arial, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    .dashboard {
      display: flex;
      min-height: 100vh;
      background: #0f1115;
    }

    /* SIDEBAR */

    .sidebar {
      width: 240px;
      background: #171a21;
      border-right: 1px solid #262b36;
      padding: 30px 20px;
    }

    .logo {
      margin: 0 0 40px;
      font-size: 24px;
      letter-spacing: 2px;
      color: #ffffff;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    nav a {
      text-decoration: none;
      color: #9ca3af;
      padding: 12px 14px;
      border-radius: 10px;
      transition: 0.3s;
    }

    nav a:hover {
      background: #232834;
      color: white;
    }

    /* MAIN */

    .main {
      flex: 1;
      padding: 30px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      flex-wrap: wrap;
      gap: 15px;
    }

    .header h1 {
      margin: 0;
      font-size: 32px;
      color: white;
    }

    .header p {
      margin-top: 5px;
      color: #9ca3af;
    }

    .btn {
      background: #2563eb;
      border: none;
      color: white;
      padding: 12px 18px;
      border-radius: 12px;
      cursor: pointer;
      transition: 0.3s;
      font-size: 14px;
    }

    .btn:hover {
      background: #1d4ed8;
    }

    /* CARDS */

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .card {
      background: #171a21;
      border: 1px solid #262b36;
      border-radius: 18px;
      padding: 20px;
    }

    .card span {
      color: #9ca3af;
      font-size: 14px;
    }

    .card h2 {
      margin-top: 10px;
      font-size: 30px;
      color: white;
    }

    /* TABLE */

    .table-box {
      background: #171a21;
      border: 1px solid #262b36;
      border-radius: 18px;
      padding: 20px;
      overflow-x: auto;
      margin-bottom: 30px;
    }

    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 10px;
    }

    .table-header h2 {
      margin: 0;
    }

    .table-header input {
      background: #0f1115;
      border: 1px solid #2f3542;
      color: white;
      padding: 10px 14px;
      border-radius: 10px;
      outline: none;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      text-align: left;
      padding: 14px;
      color: #9ca3af;
      border-bottom: 1px solid #262b36;
      font-weight: 500;
    }

    td {
      padding: 16px 14px;
      border-bottom: 1px solid #262b36;
    }

    tr:hover {
      background: #1e232d;
    }

    /* STATUS */

    .status {
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
    }

    .ok {
      background: rgba(34, 197, 94, 0.15);
      color: #22c55e;
    }

    .low {
      background: rgba(239, 68, 68, 0.15);
      color: #ef4444;
    }

    /* ACTIVITY */

    .activity {
      background: #171a21;
      border: 1px solid #262b36;
      border-radius: 18px;
      padding: 20px;
    }

    .activity h2 {
      margin-top: 0;
      margin-bottom: 20px;
    }

    .activity-item {
      background: #1e232d;
      padding: 14px;
      border-radius: 12px;
      margin-bottom: 12px;
      color: #d1d5db;
    }

    /* RESPONSIVE */

    @media (max-width: 900px) {

      .dashboard {
        flex-direction: column;
      }

      .sidebar {
        width: 100%;
      }

      .main {
        padding: 20px;
      }

    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}

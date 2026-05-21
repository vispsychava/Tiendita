import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styles: [`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      background: #f3f4f6;
      min-height: 100vh;
      padding: 20px;
    }

    .dashboard {
      width: 100%;
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
      color: #1f2937;
    }

    .header p {
      margin: 5px 0 0;
      color: #6b7280;
    }

    .btn {
      background: #2563eb;
      color: white;
      border: none;
      padding: 12px 18px;
      border-radius: 12px;
      cursor: pointer;
      font-size: 15px;
    }

    .btn:hover {
      background: #1d4ed8;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .card h3 {
      margin: 0;
      color: #6b7280;
      font-size: 15px;
    }

    .card h2 {
      margin-top: 10px;
      font-size: 30px;
      color: #111827;
    }

    .table-container {
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
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

    .table-header input {
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #d1d5db;
      width: 250px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      background: #f3f4f6;
      text-align: left;
      padding: 14px;
      color: #374151;
    }

    td {
      padding: 14px;
      border-bottom: 1px solid #e5e7eb;
    }

    tr:hover {
      background: #f9fafb;
    }

    .status {
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: bold;
    }

    .ok {
      background: #dcfce7;
      color: #166534;
    }

    .low {
      background: #fee2e2;
      color: #991b1b;
    }

    .bottom-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
    }

    .box {
      background: white;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    }

    .box h2 {
      margin-top: 0;
      margin-bottom: 20px;
      color: #1f2937;
    }

    .progress-item {
      margin-bottom: 20px;
    }

    .progress-text {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .progress-bar {
      width: 100%;
      height: 12px;
      background: #e5e7eb;
      border-radius: 20px;
      overflow: hidden;
    }

    .progress {
      height: 100%;
      border-radius: 20px;
    }

    .fill-75 {
      width: 75%;
      background: #22c55e;
    }

    .fill-60 {
      width: 60%;
      background: #3b82f6;
    }

    ul {
      padding-left: 20px;
      color: #374151;
    }

    li {
      margin-bottom: 12px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}

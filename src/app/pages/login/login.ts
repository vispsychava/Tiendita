import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styles: `
    :host {
  display: block;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}

.login-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #111827, #1e3a8a);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 1000px;
  min-height: 600px;
  background: white;
  border-radius: 25px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

/* IZQUIERDA */

.login-info {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-info h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.login-info p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.9;
}

.info-box {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;
}

.circle {
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
}

/* DERECHA */

.login-form-container {
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-header {
  margin-bottom: 40px;
}

.login-header h2 {
  font-size: 36px;
  color: #111827;
  margin-bottom: 10px;
}

.login-header p {
  color: #6b7280;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

.input-group label {
  margin-bottom: 10px;
  font-weight: bold;
  color: #374151;
}

.input-group input {
  height: 55px;
  border: 2px solid #e5e7eb;
  border-radius: 14px;
  padding: 0 15px;
  font-size: 16px;
  transition: 0.3s;
}

.input-group input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.2);
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-size: 14px;
}

.options a {
  color: #2563eb;
  text-decoration: none;
  font-weight: bold;
}

.remember {
  display: flex;
  align-items: center;
  gap: 8px;
}

.login-btn {
  height: 55px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .login-card {
    grid-template-columns: 1fr;
  }

  .login-info {
    display: none;
  }

  .login-form-container {
    padding: 40px 30px;
  }
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {}

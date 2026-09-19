import s from './index.module.css';

const rootEl = document.querySelector('#root');
if (rootEl) {
    rootEl.innerHTML = `
  <div class=${s.content}>
    <h1>Vanilla Rsbuild</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
`;
}

import { Header } from '../header/header.js';
import { Footer } from '../footer/footer.js';

const header =  Header()
const footer = Footer();

export function Layout(mainPrincipal) {
  const wrapperLayout = document.createElement('div');
  wrapperLayout.classList.add('layout');

  wrapperLayout.append(header);
  wrapperLayout.append(mainPrincipal);
  wrapperLayout.append(footer);

  return wrapperLayout;
}
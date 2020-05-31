import './styles.scss';

const date = new Date().getFullYear();

export function Footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const display = `
    <div class="p-3 bg-light">
        <ul class="items">
          <li class="item p-2"><a class="text-dark" href="#">Home</a></li>
          <li class="item p-2"><a class="text-dark" href="#">Movies</a></li>
          <li class="item p-2"><a class="text-dark" href="#">Series</a></li>
        </ul>
        <p class="text-dark">&copy; 
          <a class="text-dark" href="https://www.instagram.com/myke_roly" target="_blank" rel="noopener noreferrer">mikedev</a> 
          ${date}
        </p>
    </div>`;

  footer.innerHTML = display;    
  return footer;
}

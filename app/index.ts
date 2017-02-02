import Messages from './messages';
import './index.css';

module As {

  export function component(): HTMLDivElement {
    var element = document.createElement('div');
    element.appendChild(getElement('', Messages.getStandardMessage()))
    element.appendChild(getElement('hello css', Messages.getCssMessage()))
    return element;
  }

  function getElement(className: string, content: string): HTMLDivElement {
    const element = document.createElement('div');
    element.className = className;
    element.innerHTML = content;
    return element;
  }
}

document.body.appendChild(As.component());

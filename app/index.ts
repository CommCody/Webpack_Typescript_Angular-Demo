import * as _ from 'lodash';

module As {

  export function component (): any {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack', 'typescript'], ' ');

    return element;
  }
}

document.body.appendChild(As.component());

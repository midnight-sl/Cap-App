 /**
  * index.js
  */

import styles from './styles.css';
import { add, subtract} from './module' ;

const resultA = add(2,3);
const resultB = subtract(5,1);

console.log(resultA, resultB);
console.log(styles.localClass);
console.log(styles.globalClass);
console.log(process.env.APP_NAME); // CapApp
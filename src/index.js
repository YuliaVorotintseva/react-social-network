import * as serviceWorker from './serviceWorker';
import renderTree from './render';
import { state } from './redux/State'

renderTree(state)

serviceWorker.unregister();

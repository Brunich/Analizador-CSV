import Shell from './Shell';
import { info } from './info';
import DataWorkbench from './DataWorkbench';

export default function App() {
 return <Shell info={info} repo="analizador-csv" page="analizador-csv">{lang => <DataWorkbench lang={lang}/>}</Shell>;
}

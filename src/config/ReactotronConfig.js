import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
//  _DEV_ - variavel global do react-native que retorna 'true'
//  quando o usuario esta emulando sua aplicação em ambiente de desenvolvimento

if (__DEV__) {
  // host: endereco do computador
  const tron = Reactotron.configure({ host: '192.168.0.12' })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();

  console.tron = tron;

  // Limpa a timeline do Reactotron quando damos um refresh
  tron.clear();
}

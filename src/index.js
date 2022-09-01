import './styles/main.scss';

function importAll(r) {
    r.keys().forEach(r);
};
  
importAll(require.context('./assets/', true, /\.(svg|ico|png|webp|gif|jpg)$/));
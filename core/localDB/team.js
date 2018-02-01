
import Realm from './index';

export
  const createTeam = () => {
    Realm.write(() => {
      let team = Realm.create('Team', {
        name: 'CKC',
      });
    });
  }
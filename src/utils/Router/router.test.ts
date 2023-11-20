import { expect } from 'chai';
import router from '../../utils/Router';
import { Login } from '../../pages/login';
import { Error404 } from '../../pages/404';

describe('Router Tests', () => {
  beforeEach(() => {
    router.routes = [];
  });

  it('should add a routes', () => {
    router.use('/404', Error404).use('sign-in', Login);

    expect(router.routes).to.have.lengthOf(2);
  });

  it('should go route', () => {
    router.use('/sign-in', Login).start();
    router.go('/sign-in');
    expect(window.location.pathname).to.be.eq('/sign-in');
  });

  it('Testing back', () => {
    router
      .use('/sign-in', Login)
      .start();

    router.back();

    expect(router.routes.length).to.eq(1);
  });

  it('should forward route', () => {
    router
      .use('/404', Error404)
      .use('/sign-up', Login)
      .start();

    router.forward();

    expect(router.routes).to.have.lengthOf(2);
  });
});

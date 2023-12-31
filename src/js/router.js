import categories from './categories';
import home from './home';
import products from './products';
import about from './about';
import cart from './cart';
import content404 from './404';
import productDetail from './productDetail';
import categoryDetail from './categoryDetail';

import { loaderHtml } from './constants';

const routes = {
  '/': {
    title: 'Welcome to MULTISHOP',
    content: home,
  },
  '/products': {
    title: 'Check Out Our Products',
    content: products,
  },
  '/categories': {
    title: 'All Categories Are Here',
    content: categories,
  },
  '/about': {
    title: "Here's Information About Our Shop",
    content: about,
  },
  '/cart': {
    title: 'Your Products',
    content: cart,
  },
  404: {
    title: 'The Page Is Not Found',
    content: content404,
  },
};

const handleClick = (e) => {
  e.preventDefault();

  const route = e.target.pathname;

  if (route !== window.location.pathname) {
    window.history.pushState({}, '', route);
    window.dispatchEvent(new Event('popstate'));
  }
};

// eslint-disable-next-line consistent-return
const getProductDetailRoute = (location) => {
  if (location.includes('products') && location.match(/\//g).length > 1) {
    return {
      content: productDetail,
      title: '',
    };
  }
};

// eslint-disable-next-line consistent-return
const getCategoryDetailRoute = (location) => {
  if (location.includes('categories') && location.match(/\//g).length > 1) {
    return {
      content: categoryDetail,
      title: '',
    };
  }
};

const handleRoute = () => {
  const location = window.location.pathname;
  const route = routes[location]
    ?? getProductDetailRoute(location)
    ?? getCategoryDetailRoute(location)
    ?? routes[404];

  const { title, content } = route;

  document.querySelector('#content').innerHTML = loaderHtml;

  content().then((html) => {
    document.querySelector('#content').innerHTML = '';
    document.querySelector('#content').append(html);
    document.querySelectorAll('a').forEach((el) => el.addEventListener('click', handleClick));
  });

  document.querySelector('h1').innerText = title;
  document.querySelectorAll('#nav-list .nav-link').forEach((el) => {
    el.classList.remove('active');

    if (el.pathname === location || (location.includes(el.pathname) && el.pathname !== '/')) {
      el.classList.add('active');
    }
  });
};

const initRouter = () => {
  handleRoute();
  window.addEventListener('popstate', handleRoute);
};

export default initRouter;

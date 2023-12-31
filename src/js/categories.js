const ul = document.createElement('ul');
ul.classList.add('categories-list');

const createCategory = ({ name, slug }, index) => `
  <li class="card my-4">
    <div class="card-header">
      Category №${index + 1}
    </div>
    <div class="card-body " class="p-3 mb-2 bg-dark-subtle text-emphasis-dark">
      <h5 class="card-title">${name}</h5>
      <a href="/categories/${slug}" class="btn btn-primary">Go to the ${name}</a>
    </div>
  </li>
`;

const categories = async () => {
  if (!ul.querySelectorAll('li').length) {
    const data = await fetch('https://api.storerestapi.com/categories');
    const json = await data.json();

    json.data.map((el, index) => ul.insertAdjacentHTML('beforeend', createCategory(el, index)));
  }

  return ul;
};

export default categories;

// import dependencies
import concat from '@/utils/string';

// get fullname of the user
export function getUserFullName(user) {
  return concat(user.firstname, user.lastname);
}

// return `li` element with user fullname
export function getUserLi(fullname) {
  const li = document.createElement('li');
  li.innerText = fullname;
  return li;
}

// return UserList class
export class UserList {
  constructor(elem, users) {
    this.elem = elem;
    this.users = users;
    this.initialized = false;
  }

  // initialize plugin
  init() {
    const ul = document.createElement('ul');
    ul.classList.add('users-list');
    // store element reference
    this.ul = this.elem.appendChild(ul);
    // render initial list of users
    this.renderList();
    // set initialized to `true`
    this.initialized = true;
  }

  // get list of users with fullname
  getUsers() {
    return this.users.map(user => getUserFullName(user));
  }

  // append `li` element to the users `ul` element
  appendLi(li) {
    this.ul.appendChild(li);
  }

  // render entire users list
  renderList() {
    const users = this.getUsers();
    const liElements = users.map(fullname => getUserLi(fullname));
    liElements.forEach((li) => {
      this.appendLi(li);
    });
  }

  // add new user
  addUser(user) {
    const fullname = getUserFullName(user);
    const li = getUserLi(fullname);
    this.appendLi(li);
  }
}

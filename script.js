// LOGIN BUTTON
const loginButton = document.getElementsByClassName('button-submit')[0];
function eventoClick() {
  const loginEmail = document.getElementsByClassName('email')[0];
  const loginPassword = document.getElementsByClassName('senha')[0];
  const password = 123456;
  const email = 'tryber@teste.com';
  if (loginPassword.value !== password && loginEmail.value !== email) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
function loginValidation() {
  loginButton.addEventListener('click', eventoClick);
}
loginValidation();

// SUBMIT BUTTON VALIDATION
const agreementCheckbox = document.getElementById('agreement');
let submitButton = document.getElementById('submit-btn');

function buttonDisabler() {
  // submitButton.disable e agreementCheckbox.checked são naturalmente opostos, quando um é true, o outro é false
  submitButton = document.getElementById('submit-btn');
  submitButton.disabled = !agreementCheckbox.checked; // Agradecimento ao FATnando e ao Leonardo Felix por essa linha

  // código antigo abaixo
  // if (agreementCheckbox.checked) {
  //   submitButton.removeAttribute('disabled');
  // } else {
  //   const disable = document.createAttribute('disabled');
  //   submitButton.setAttributeNode(disable);
  // }
}

function agreementValidation() {
  agreementCheckbox.addEventListener('change', buttonDisabler);
}

agreementValidation();

// CHARACTERS COUNTER
let textAreaInput = document.getElementById('textarea');
const count = document.getElementById('counter');

function counter() {
  textAreaInput = document.getElementById('textarea');
  const current = textAreaInput.value.length;
  const left = 500 - current;
  if (left !== 1) {
    count.innerText = `${left} caracteres disponíveis`;
  } else {
    count.innerText = `${left} caractere disponível`;
  }
}

function counterAdd() {
  textAreaInput.addEventListener('keyup', counter);
}

counterAdd();

// DELETE FORMS CONTENT
function deleteFormContent() {
  const form = document.getElementById('evaluation-form');
  const formChilds = form.childNodes;
  for (let index = formChilds.length; index > 0; index -= 1) {
    form.lastChild.remove();
  }
}

// GET INPUT NAME
function getFullName() {
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  return `<p>Nome: ${name} ${lastname}</p><br>`;
}

// GET INPUT EMAIL
function getEmail() {
  const email = document.getElementById('input-email').value;
  return `<p>Email: ${email}</p><br>`;
}

// GET CHOSEN HOUSE
function getHouse() {
  const house = document.getElementById('house').value;
  return `<p>Casa: ${house}</p><br>`;
}

// GET CHOSEN FAMILY
function getFamily() {
  const families = document.getElementsByName('family');
  let family = '';
  for (let index = 0; index < families.length; index += 1) {
    if (families[index].checked) {
      family = families[index].value;
    }
  }
  return ` <p>Família: ${family}</p><br>`;
}

// CHECK CHOSEN CONTENT
function contentsChecker(content, checked) {
  const toAppend = checked === 'Matérias:' ? ` ${content.value}` : `, ${content.value}`;
  return toAppend;
}

// GET CHOSEN CONTENT
function getContent() {
  const contents = document.getElementsByClassName('content');
  let checked = 'Matérias:';
  for (let i = 0; i < contents.length; i += 1) {
    if (contents[i].checked) {
      checked += contentsChecker(contents[i], checked);
    }
  }
  return `<p>${checked}</p><br>`;
}

// GET RATE
function getRate() {
  const rates = document.getElementsByName('rate');
  let rate = '';
  for (let index = 0; index < rates.length; index += 1) {
    if (rates[index].checked) {
      rate = rates[index].value;
    }
  }
  return `<p>Avaliação: ${rate}</p><br>`;
}

// GET INPUT COMMENT
function getComment() {
  const comment = document.getElementById('textarea').value;
  return `<p>Observações: ${comment}</p><br>`;
}

// REPLACE FORM CONTENT WITH RESULT
function showResult(event) {
  event.preventDefault();
  const fullName = getFullName();
  const email = getEmail();
  const house = getHouse();
  const family = getFamily();
  const content = getContent();
  const rate = getRate();
  const comment = getComment();
  deleteFormContent();
  const form = document.getElementById('evaluation-form');
  form.innerHTML = `${fullName}${email}${house}${family}${content}${rate}${comment}`;
}

function submitButtonToShowResult() {
  submitButton.addEventListener('click', showResult);
}

submitButtonToShowResult();

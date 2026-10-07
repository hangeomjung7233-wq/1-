// 예시 데이터 — 실제 이름과 병원으로 바꿔서 사용하세요.
const guardians = [
  { name: '아들 000님' },
  { name: '딸 000님' },
];

const hospitals = [
  { name: '00병원' },
  { name: '■■병원' },
];

const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function renderCards(listId, items, buttonLabel, onClick) {
  const list = document.getElementById(listId);
  list.innerHTML = '';

  items.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'card';

    const name = document.createElement('p');
    name.className = 'card-name';
    name.textContent = item.name;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'card-btn';
    button.textContent = buttonLabel;
    button.addEventListener('click', () => onClick(item));

    li.append(name, button);
    list.appendChild(li);
  });
}

renderCards('guardian-list', guardians, '연락하기', (g) =>
  showToast(`${g.name}에게 연락을 시작합니다.`)
);

renderCards('hospital-list', hospitals, '문의하기', (h) =>
  showToast(`${h.name}에 문의를 시작합니다.`)
);

document.getElementById('add-guardian').addEventListener('click', () =>
  showToast('보호자 추가 화면으로 이동합니다.')
);

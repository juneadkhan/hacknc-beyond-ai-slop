// Fixed fictional fixtures. The workshop changes design, not these facts.
const bills = Object.freeze([
  {
    name: 'Phone plan',
    amount: 62,
    date: '2026-10-11',
    label: 'Sun, Oct 11',
    category: 'Utilities'
  },
  {
    name: 'Gym membership',
    amount: 29,
    date: '2026-10-13',
    label: 'Tue, Oct 13',
    category: 'Membership'
  },
  {
    name: 'Electricity',
    amount: 48,
    date: '2026-10-15',
    label: 'Thu, Oct 15',
    category: 'Utilities'
  },
  { name: 'Rent', amount: 720, date: '2026-11-01', label: 'Sun, Nov 1', category: 'Housing' }
]);
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const payday = '2026-10-16';
const list = document.querySelector('#bill-list');
const dialog = document.querySelector('#bill-dialog');
function renderBills(filter = 'all') {
  const shown = bills.filter(
    (bill) => filter === 'all' || (filter === 'before' ? bill.date < payday : bill.date >= payday)
  );
  list.replaceChildren();
  shown.forEach((bill) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'bill-row';
    row.setAttribute(
      'aria-label',
      `${bill.name}, ${money.format(bill.amount)}, due ${bill.label}. View details`
    );
    row.innerHTML = `<span class="bill-icon" aria-hidden="true">${bill.name.slice(0, 1)}</span><span class="bill-name">${bill.name}<small>${bill.category}</small></span><span class="bill-date">${bill.label}<small>${bill.date < payday ? 'Before payday' : 'After payday'}</small></span><strong class="bill-amount">${money.format(bill.amount)}</strong><span class="bill-arrow" aria-hidden="true">›</span>`;
    row.addEventListener('click', () => {
      document.querySelector('#dialog-title').textContent = bill.name;
      document.querySelector('#bill-details').innerHTML =
        `<dt>Amount</dt><dd>${money.format(bill.amount)}</dd><dt>Due date</dt><dd>${bill.label}, 2026</dd><dt>Category</dt><dd>${bill.category}</dd>`;
      dialog.showModal();
    });
    list.append(row);
  });
  document.querySelector('#filter-status').textContent =
    `${shown.length} ${shown.length === 1 ? 'bill' : 'bills'} shown`;
}
document.querySelectorAll('[data-filter]').forEach((button) =>
  button.addEventListener('click', () => {
    document
      .querySelectorAll('[data-filter]')
      .forEach((control) => control.setAttribute('aria-pressed', String(control === button)));
    renderBills(button.dataset.filter);
  })
);
document.querySelector('#jump-bills').addEventListener('click', () => {
  document.querySelector('[data-filter="before"]').click();
  document.querySelector('.bill-section').scrollIntoView({ behavior: 'instant', block: 'start' });
  document.querySelector('[data-filter="before"]').focus({ preventScroll: true });
});
renderBills();

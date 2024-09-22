function donateHistoryShow(
  donateHistoryAmount,
  donateHistoryTitle,
  donateHistoryDate
) {
  return `
    <div class="card bg-base-100 w-full border">
        <div class="card-body">
            <h2 class="text-lg">
                <span id="donateHistoryAmount">${donateHistoryAmount}</span>
                  Taka is Donated for Donate for
                  <span id="donateHistoryTitle">${donateHistoryTitle.innerText}</span>
            </h2>
            <p class="p-4 bg-slate-100 rounded-xl">Date:
                <span id="donateHistoryDate">${donateHistoryDate}</span>
            </p>
        </div>
    </div>`;
}

function getDataAndShow(btn, balance) {}

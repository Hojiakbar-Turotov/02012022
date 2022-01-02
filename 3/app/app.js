const d = new Date();
let countId = 1;

let invoicesInfo = [
    {
        invoicesDate: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`,
        invoicesId: `INV-00000${countId}`,
        invoicesSupple: `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`,
        invoicesCommit: `Test invoice`
    }
];

for (let i = 0; i < invoicesInfo.length; i++) {
    const invoicestr = document.createElement("tr");
    const invoicesDateTd = document.createElement("td");
    invoicesDateTd.innerHTML = invoicesInfo[i].invoicesDate;
    const invoicesIdTd = document.createElement("td");
    invoicesIdTd.innerHTML = invoicesInfo[i].invoicesId;
    const invoicesSuppleTd = document.createElement("td");
    invoicesSuppleTd.innerHTML = invoicesInfo[i].invoicesSupple;
    const invoicesCommitTd = document.createElement("td");
    invoicesCommitTd.innerHTML = invoicesInfo[i].invoicesCommit;
    invoicestr.append(invoicesDateTd);
    invoicestr.append(invoicesIdTd);
    invoicestr.append(invoicesSuppleTd);
    invoicestr.append(invoicesCommitTd);
    document.getElementById('invoicesInfo').append(invoicestr);
}

function addInvoices(){
    document.getElementById('header').classList.add("d-none");
    document.getElementById('addInvoices').classList.remove("d-none");
}
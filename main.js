window.addEventListener('load', () => setInterval(addDynamicRecord, 2000));

function addDynamicRecord() {
    let myrow = `<div class="row mb-1">
        <div class="       col-md-3 d-none d-md-block"></div>
        <div class="col-12 col-md-6 bg-secondary rounded d-flex justify-content-center align-items-center text-light fs-4" style="height: 150px; font-family: cursive; text-align: center;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div class="       col-md-3 d-none d-md-block"></div>
    </div>`;

    const parent = document.querySelector("#id1");
    const newhtml = parent.innerHTML + myrow;
    parent.innerHTML = newhtml;
}
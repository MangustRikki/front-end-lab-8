const fieldSize = 15;

$(document).ready(() => {
    let gridTable = $(`<div class = 'grid-table'></div>`),
        stoneTable = $(`<div class = 'stone-table'></div>`);

    for(let i = 0; i < fieldSize; i++) {
        let gridRow = $(`<div class='grid-row'></div>`);
            for(let k = 0; k < fieldSize; k++) {
                let gridCell = $(`<div class='grid-cell'></div>`);
                gridRow.append(gridCell);
            }
            gridTable.append(gridRow);
        }

    for(let i = 0; i < fieldSize + 1; i++) {
        let stoneRow = $(`<div class='stone-row'></div>`);
        for(let k = 0; k < fieldSize + 1; k++) {
            let stoneCell = $(`<div class='stone-cell'></div>`);
            stoneRow.append(stoneCell);
        }
        stoneTable.append(stoneRow);
    }

    $('.game-field').append(gridTable);
    $('.game-field').append(stoneTable)

});
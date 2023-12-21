const { getRow, poolEnd } = require("../database/db")
const path = require('path');
const ExcelJS = require('exceljs');
const md5 = require("md5");

let allEmployees = async () => {
    let employees = await getRow("select * from vw_employees order by branch_name")

    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'mensenvau';
    workbook.lastModifiedBy = 'Her';

    const sheet = workbook.addWorksheet('employees')
    const headerRow = sheet.addRow([
        'Т/Р',
        'Бўлим номи',
        'Фамилияси, исми, отасининг исми',
        'Иш жойи, эгаллаб турган лавозими',
        'паспорт серияси рақами Берилган санаси',
        'Туғилган йили ва жойи',
        'Яшаш манзили',
        'Миллати'
    ])

    headerRow.eachCell((cell) => {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '00FF00' }, };
        cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true }
    });

    employees.forEach(item => {
        let dataRow = sheet.addRow([
            item.id,
            item.branch_name,
            item.full_name,
            `${item.workplace}\n${item.position_held}`,
            `${item.passport_serial}${item.passport_number} ${item.passport_day} - ${item.passport_address}`,
            `${item.birth_day} - ${item.birth_place}`,
            item.address,
            item.nation
        ])

        dataRow.eachCell((cell) => {
            cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true }
        })
    })


    sheet.columns.forEach(function (column, i) {
        if (i !== 0) {
            var maxLength = 0;
            column["eachCell"]({ includeEmpty: true }, function (cell) {
                var columnLength = cell.value ? cell.value.toString().length : 10
                if (columnLength > maxLength) {
                    maxLength = columnLength;
                }
            })
            column.width = maxLength < 10 ? 10 : maxLength;
            column.width = column.width > 50 ? 50 : column.width
        }
    })

    sheet.eachRow((row) => { row.height = 40 })
    sheet.autoFilter = {
        from: {
            row: 1,
            column: 1,
        },
        to: {
            row: sheet.rowCount,
            column: sheet.columnCount,
        },
    };

    await workbook.xlsx.writeFile(path.join(__dirname, "../export", "all_employees.xlsx"));
}

module.exports = {
    allEmployees
}


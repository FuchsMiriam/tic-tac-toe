let fields = ['circle', null, null, 'cross', null, null, null, null, null,];


function init() {
    render();
}

function render() {
    const contentDiv = document.getElementById('content');
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle') {
                symbol = generateAnimatedCircleSVG();
            } else if (fields[index] === 'cross') {
                symbol = generateAnimatedXSVG();
            }
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
};

function generateAnimatedCircleSVG() {
    return `<svg width="70" height="70">
                <circle cx="35" cy="35" r="30" fill="none" stroke="#00b0ef" stroke-width="5" stroke-dasharray="188">
                    <animate attributeName="stroke-dashoffset" from="188" to="0" dur="1s" fill="freeze" />
                    <animate attributeName="fill" from="none" to="#00b0ef" begin="1s" dur="0.5s" fill="freeze" />
                </circle>
            </svg>`;
}

function generateAnimatedXSVG() {
    return `<svg width="70" height="70">
                <line x1="10" y1="10" x2="60" y2="60" stroke="yellow" stroke-width="5" stroke-linecap="round">
                    <animate attributeName="x2" from="10" to="60" dur="0.5s" fill="freeze" />
                    <animate attributeName="y2" from="10" to="60" dur="0.5s" fill="freeze" />
                </line>
                <line x1="60" y1="10" x2="10" y2="60" stroke="yellow" stroke-width="5" stroke-linecap="round">
                    <animate attributeName="x2" from="60" to="10" dur="0.5s" fill="freeze" />
                    <animate attributeName="y2" from="10" to="60" dur="0.5s" fill="freeze" />
                </line>
            </svg>`;
}








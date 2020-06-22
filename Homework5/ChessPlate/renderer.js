let renderer = {
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML("afterbegin", result);
    },
    generateBoard() {
        let board = "";
        let check = false;
        for (let y = 0; y < 9; y++) {
            if (y == 8){
                board += "<tr>";
                board +="<td>A" + "<td>B" + "<td>C" + "<td>D" + "<td>E" + "<td>F" + "<td>G" + "<td>H"
                break;
            }
            board += "<tr>";
            if (y%2 == 0){
                check = true;
            }
            else{
                check = false;
            }
            
            for (let x = 0; x < 9; x++) {
                if (x == 8){
                    board +="<td class='numbers'>" + (y+1);
                    break;
                }
                if (check) {
                    board += "<td class='black'>";
                    check = !check;
                }
                else{
                    board += "<td class='white'>";
                    check = !check;
                }
                
            }
            board += "</tr>";
            
           
        }
        
        return `<table><tbody>${board}</tbody></table>`;
    }

}
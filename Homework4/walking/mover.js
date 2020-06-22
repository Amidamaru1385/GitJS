let mover = {
    getDirection() {
        const avalibleDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите число (1, 2, 3, 4, 6, 7, 8, 9), куда вы хотите переместиться, 'Отмена' для выхода."));
            if (isNaN(direction)) {
                return null;
            }
            if (!avalibleDirections.includes(direction)) {
                alert("Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8, 9.");
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        if (nextPosition.x > config.rowsCount-1){
            nextPosition.x = config.rowsCount-1;
        }
        if (nextPosition.x < 0){
            nextPosition.x = 0;
        } 
        if (nextPosition.y > config.colsCount-1){
            nextPosition.y = config.colsCount-1;
        }
        if (nextPosition.y < 0){
            nextPosition.y = 0;
        } 
        return nextPosition;
    }
};
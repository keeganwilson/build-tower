const buildTower = (floors) => {
    tower = [];
    for (let i = 0; i < floors; i++) {
        tower.push(' '.repeat(floors - i - 1) + '*'.repeat((i * 2) + 1) + ' '.repeat(floors - i - 1)) 
    }
    return tower
}

console.log(buildTower(6))
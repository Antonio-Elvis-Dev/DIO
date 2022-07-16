function getAdmins(map) {
    let admins = []

    for ([key, value] of map) {
        if (value === 'TI') {
            admins.push(key);
        }
    }
    return admins
}

const usuarios = new Map();
usuarios.set('Elvis', 'TI')
usuarios.set("Leticia", "TI")
usuarios.set("Wemerson", "Dev")
usuarios.set("Max", "Gestor")


console.log(getAdmins(usuarios))
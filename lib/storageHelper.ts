import "client-only";

export function getLocalStorage(key: string, defaultValue: any) {
    // localStorage.clear();
    const stickyValue = localStorage.getItem(key);// Devuelve false si no existe, osea si ni se aceptó ni se rechazó
    // console.log(stickyValue);

    return (stickyValue !== null && stickyValue !== "undefined" && stickyValue !== "false") 
        ? JSON.parse(stickyValue)// Devuelve el valor encontrado
        : defaultValue;// Devuelve null
}

export function setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}
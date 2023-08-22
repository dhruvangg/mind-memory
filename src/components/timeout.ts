const level = parseInt(localStorage.getItem('level') as string)

let timeout: number = 1000

if (1 <= level && level <= 10) 
    timeout = 5000
else if (10 < level && level < 20) 
    timeout = 4000
else if (20 < level && level < 30) 
    timeout = 3000
else if (40 < level && level < 50)
    timeout = 2000

export { timeout };    
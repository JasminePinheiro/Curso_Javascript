const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const x in nums) {
    if (x == 5) {
        break       // parada
    }
    console.log(`${x} = ${nums[x]}`);
}

console.log("\n\n");
for (const y in nums) {
    if (y == 5) {
        continue       // pula o indice 5 e vai para a próxima repetição 
    }
    console.log(`${y} = ${nums[y]}`);
}

// As duas palavras reservadas causam desvio de fluxo


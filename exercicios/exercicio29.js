function checarAnoBissexto(ano) {
    divisivelPor4 = ano % 4 == 0
    divisivelPor100 = ano % 100 == 0
    divisivelPor400 = ano % 400 == 0

   return divisivelPor4 && !divisivelPor100 || divisivelPor400
}


console.log(checarAnoBissexto(2100))
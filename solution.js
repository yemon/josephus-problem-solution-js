function josephus_problem_solution_using_bit(n) {
    let bit = n.toString(2);
    return parseInt(bit.substr(1)+bit[0],2);
}

function josephus_problem_solution_using_recursive_function(n) {
  // TODO
}

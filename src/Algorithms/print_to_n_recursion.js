function recursion(n, start) {
    if (start > n) return;
    console.log(start);
    recursion(n, start + 1);
}


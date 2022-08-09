function set() {
    console.log('1');
    setTimeout(set, 1000);
}

setTimeout(set, 1000);
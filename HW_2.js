// test 1
function test1(n) {
    if (n === 1) { //1
        return;
    }
    for (let i = 1; i <= n; i++) { 
        for (let j = 1; j <= n; j++) { 
            console.log("*");
            break;
        }
    }
} 

// test 2
function test2(n) {
    let a = 0; //1
    let i, j;
    for (i = 0; i < n; i++) { 
        for (j = n; j > i; j--) { 
        }
    }
} 

// test 3
function test3(n) {  // n = 8
    let a = 0;
    let i, j;
    for (i = Math.floor(n / 2); i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) { 
            a = a + Math.floor(n / 2); 
        }
    }
} 

// test 4
function test4(n) {
    let a = 0; 
    let i = n; 
    while (i > 0) { 
        a += i; 
        i = Math.floor(i / 2);  
        console.log("*"); 
    }
} 

test4(10);
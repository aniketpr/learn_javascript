function tipcal(bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    } else if (bill >= 50 && bill < 200){
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124,48,268];
var tips = [tipcal(bills[0]),
            tipcal(bills[1]),
            tipcal(bills[2])
            ];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]
                  ];
                
console.log(tips, finalValues);
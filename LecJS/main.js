
function nhincc() {
    console.log('ok con dê')
}
var den = document.querySelector('.a1')
console.log(den)
var btnn = document.querySelector('.btnn');
console.log(btnn)
// den.classList.add('startOn')

var ok = den.classList.contains('startOn')
btnn.addEventListener('click', () => {
    console.log(ok)
    if (ok == true) {
        den.classList.remove('startOn')
        ok = false
    }
    else {
        den.classList.add('startOn')
        ok = true
    }
})

// ax^2+bx+c = 0

// function ptb2(a, b, c) {
//     if (a == 0) {
//         if (b == 0) {
//             if (c == 0) {
//                 console.log('PT vo so nghiem')
//             }
//             else {
//                 console.log('PT vo nghiem')
//             }
//         }
//         else {
//             let x = -c / b;
//             console.log(`PT co nghiem la: ${x}`)
//         }
//     }
//     else {
//         let denta = b * b - 4 * a * c;
//         if (denta >= 0) {
//             let x1 = (-b + Math.sqrt(denta)) / (2 * a);
//             let x2 = (-b - Math.sqrt(denta)) / (2 * a);
//             console.log(`co 2 nghiem ${x1} va ${x2}`)
//         }
//         else if (denta == 0) {
//             x1 = x2 = -b / (2 * a);
//             console.log(`co nghiem keop ${x1}`)
//         }
//         else {
//             console.log('pt vo nghiem')
//         }
//     }
// }

// ptb2(0, 2, 1);

function checkYearNhuan(year) {
    if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;
     } 
     else {
        return false;
    }
}
// năm nhuận thì tháng 1 có 29 ngày

let fullday31 = [1, 3, 5 ,7 ,8, 10, 12];

let fullday30 = [4, 6, 9, 11];

function nextDay(day, month, year) {
    if (year) {
        if (month == 2)
        {
            day++;
            if (day==30)
            {
                day=1
                month++;
                if (month>12) {
                    year++;
                    month=1
                }
              
            }
            else {
                console.log('Nhap lai di em')
                return;
            }
        }
        else if (fullday31.includes(month)){
            day++;
            if (day>31) {
                day=1;
                month++;
                if (month>12) {
                    year++;
                    month=1
                }
            }
        }
        else if (fullday30.includes(month)){
            day++;
            if (day>30) {
                day=1;
                month++;
                if (month>12)
                year++;
            }
        }
    }
    else {
        if (month == 2)
        {
            day++;
            if (day==29)
            {
                day=1
                month++;
                if (month>12) {
                    year++;
                    month=1
                }
            }
            else {
                console.log('Nhap lai di em')
                return;
            }
        }
        else if (month.includes(fullday31)){
            day++;
            if (day>31) {
                day=1;
                month++;
                if (month>12) {
                    year++;
                    month=1
                }
            }
        }
        else if (month.includes(fullday30)){
            day++;
            if (day>30) {
                day=1;
                month++;
                if (month>12) {
                    year++;
                    month=1
                }
            }
        }
    }
    console.log(day, month, year)
}

nextDay(28,2,2021)


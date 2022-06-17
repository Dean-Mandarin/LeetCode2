//LeetCode Easy
//1 Palindrome Number
function isPalindrome(x) {
    return String(x) === String(x).split("").reverse().join("");
}

console.log(`I Palindrome Number
INPUT: 212
       123454321
       123
OUTPUT: ${isPalindrome(212)}
        ${isPalindrome(123454321)}
        ${isPalindrome(123)}`
);

//2 Roman to Integer
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInt(s) {
    const manual = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let intNumber = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "V") {
            intNumber += 4;
            i++;
        } else if (s[i] === "I" && s[i + 1] === "X") {
            intNumber += 9;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "L") {
            intNumber += 40;
            i++;
        } else if (s[i] === "X" && s[i + 1] === "C") {
            intNumber += 90;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "D") {
            intNumber += 400;
            i++;
        } else if (s[i] === "C" && s[i + 1] === "M") {
            intNumber += 900;
            i++;
        } else {
            intNumber += manual[s[i]];
        }
    }
    return intNumber;
}

console.log(`II Roman to Integer
INPUT: "LVIII"
       "MCMXCIV"
OUTPUT: ${romanToInt("LVIII")} 
        ${romanToInt("MCMXCIV")}`
);


// 3 Remove Duplicates from Sorted List

function deleteDuplicates(head) {
    return [...new Set(head)];
}

console.log(`III Remove Duplicates from Sorted List
INPUT: [1,1,2,3,3]
       
OUTPUT: ${deleteDuplicates([1, 1, 2, 3, 3])}`
);


//4 Longest Common Prefix
function longestCommonPrefix(str) {
    if (!str.length) return '';

    for (let i = 0; i <= str[0].length; i++) {
        for (let j = 1; j < str.length; j++) {
            if (str[0][i] !== str[j][i]) {
                return str[0].slice(0, i);
                //отрезаем от первого слова сколько надо
            }
        }
    }

    return str[0];
}

console.log(`IV Longest Common Prefix
    INPUT: ["flower","flow","flight"]
    OUTPUT: ${longestCommonPrefix(["flower", "flow", "flight"])}`
);


//5 Merge Two Sorted Lists
function ListNode(list1, list2) {
    return list1.concat(list2).sort((a, b) => a - b);
}

console.log(`V Merge Two Sorted Lists
    INPUT: list1 = [1,2,4], list2 = [1,3,4]
    OUTPUT: ${ListNode([1, 2, 4], [1, 3, 4])}`
);


//--------------------------------------------MEDIUM RARE--------------------------------------------------------
/** 1
 You are given two non-empty linked lists representing two non-negative integers.
 The digits are stored in reverse order, and each of their nodes contains a single digit.
 Add the two numbers and return the sum as a linked list.
 You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 Example 1:
 Input: l1 = [2,4,3], l2 = [5,6,4]
 Output: [7,0,8]
 Explanation: 342 + 465 = 807.
 */


function addTwoNumbers(l1, l2) {
    return (String(Number(l1.reverse().join(''))
        + Number(l2.reverse().join(''))).split('')).map(Number);
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));


/** 2
 * Remove Nth Node From End of List.
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

function removeNthFromEnd(head, n) {
    head.splice(-n, 1); //удаляем один элемент индекса -n
    return head;
}

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)); //[1,2,3,5]


/** 3 Swap Nodes in Pairs
 Given a linked list, swap every two adjacent nodes and return its head.
 You must solve the problem without modifying the values in the list's
 nodes (i.e., only nodes themselves may be changed.)
 */

function swapPairs(head) {
    for (let i = 0; i < head.length - 1; i += 2) {
        let tmp = head[i];
        head[i] = head[i + 1];
        head[i + 1] = tmp;
    }

    return head;
}

console.log(swapPairs([1, 2, 3, 4])); //[2, 1, 4, 3]
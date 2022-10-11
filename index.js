const assert = require("assert");

class Node {
    operatorMap = {
        '+': '+',
        '-': '-',
        'x': '*',
        '÷': '/',
    }

    constructor(operator, value, left, right) {
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    result() {
        const leftOperand = this.left?.result()
        const rightOperand = this.right?.result()

        if(this.operatorMap.hasOwnProperty(this.operator)) {
            const operator = this.operatorMap[this.operator]
            return eval(`${leftOperand} ${operator} ${rightOperand}`)
        }
        return this.value
    }
    toString() {
        const leftOperand = this.left?.toString()
        const rightOperand = this.right?.toString()
        const operator = this.operator

        if(operator in this.operatorMap) {
            return `(${leftOperand} ${operator} ${rightOperand})`
        }
        return this.value?.toString()
    }
}

const leftNode = new Node("+", null,
    new Node("", 7, null, null),
    new Node("x", null,
        new Node("-", null,
            new Node("", 3, null, null),
            new Node("", 2, null, null)
        ),
        new Node("", 5, null, null)
    )
)
const rightNode = new Node("", 6, null, null)

const tree = new Node(
    "÷",
    null,
    leftNode,
    rightNode
);

assert.strictEqual('((7 + ((3 - 2) x 5)) ÷ 6)', tree.toString());
assert.strictEqual(2, tree.result());

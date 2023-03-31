"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const tstl = require("typescript-to-lua");
const plugin = {
    visitors: {
        [ts.SyntaxKind.ExportAssignment]: (node, context) => {
            const expressions = [];
            if (ts.isArrayLiteralExpression(node.expression)) {
                // throw Error("isArrayLiteralExpression YES")
                for (const element of node.expression.elements) {
                    const expression = context.transformExpression(element);
                    expressions.push(expression);
                }
            }
            return tstl.createReturnStatement(expressions, node);
        },
    },
};
exports.default = plugin;

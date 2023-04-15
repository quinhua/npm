/**
 * 数据转为树节点
 * @param {List} data 要转为树的数据
 * @param {String} id [string接受]
 * @param {String} parentId 指定父节点 [string接受]
 * @returns 
 */
export function dataToTree(data, id, parentId) {
    const nodeMap = {}; // 用于快速查找每个节点
    const nodeRoots = []; // 存储所有根节点

    // 构建一个节点的映射表
    data.forEach((node) => {
        nodeMap[node[id]] = node;
        node.children = []; // 初始化子节点列表
    });

    // 遍历每个节点，将它们添加到它们的父节点的子节点列表中
    data.forEach((node) => {
        const parent = nodeMap[node[parentId]];
        if (parent) {
            parent.children.push(node);
        } else {
            nodeRoots.push(node);
        }
    });

    return nodeRoots;
}
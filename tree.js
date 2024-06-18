class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

export default class Tree {
  constructor() {
    this.root = null;
  }

  // Método para inserir um valor na árvore
  insert(value, parentValue = null) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      const parent = this.searchNode(this.root, parentValue);
      if (parent) {
        parent.children.push(newNode);
      } else {
        throw new Error("Parente não encontrado");
      }
    }
  }

  // Método para buscar um valor na árvore
  search(value) {
    return this.searchNode(this.root, value) !== null;
  }

  searchNode(node, value) {
    if (node === null) {
      return null;
    }
    if (node.value === value) {
      return node;
    }
    for (let child of node.children) {
      const result = this.searchNode(child, value);
      if (result) {
        return result;
      }
    }
    return null;
  }

  // Método para buscar o caminho de um valor na árvore
  searchPath(value) {
    const path = [];
    if (this.findPath(this.root, value, path)) {
      return path;
    } else {
      return null;
    }
  }

  findPath(node, value, path) {
    if (node === null) {
      return false;
    }

    path.push(node.value);

    if (node.value === value) {
      return true;
    }

    for (let child of node.children) {
      if (this.findPath(child, value, path)) {
        return true;
      }
    }

    path.pop();
    return false;
  }

  // Método para imprimir a árvore (em profundidade)
  print(node = this.root, level = 0) {
    if (node !== null) {
      console.log(" ".repeat(level * 2) + node.value);
      for (let child of node.children) {
        this.print(child, level + 1);
      }
    }
  }
}

//export class Tree {}

// Exemplo de uso:
//const tree = new Tree();
/* tree.insert('A'); // Inserindo a raiz
  tree.insert('B', 'A');
  tree.insert('C', 'A');
  tree.insert('D', 'B');
  tree.insert('E', 'B');
  tree.insert('F', 'C');
  
  console.log('Busca por B:', tree.search('B')); // true
  console.log('Busca por G:', tree.search('G')); // false
  
  console.log('Imprimindo a árvore:');
  tree.print();
  
  const path = tree.searchPath('E');
  if (path) {
    console.log('Caminho para E:', path.join(' -> '));
  } else {
    console.log('E não encontrado na árvore.');
  }
   */

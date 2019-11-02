var Lca = (root, p, q)=> {
  if (!root)
    return null;

  if (root === p || root === q)
    return root;

  var left = Lca(root.left, p, q);
  var right = Lca(root.right, p, q);

  if (left && right)
    return root;
  else if (left)
    return left;
  else
    return right;
};
//complexicity of the program O(n)
// where n is the height of the tree
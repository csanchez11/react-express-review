const todos = ["Get purell", "don't get covid 19"]

const controller = {


  get: (req, res) => {
    res.status(200).send(todos)

  },
  post:(req, res) => {
    let {todo} = req.body //let todo = req.body.todo
    todos.push(todo)
    res.status(200).send(`Posted ${todo} to the list`)

  },
  delete: (req, res) => {
    console.log(req.params)
    let {index} = req.params; // let index = req.params.index this is directed to router path /:index
    let deleted = todos.splice(index, 1);
    res.status(202).send(`Delete todo ${deleted}`);
  }
}

module.exports = controller;
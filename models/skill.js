const skills = [
    {id: 1, chores: 'Feed pets', done: true},
    {id: 2, chores: 'Pick up oranges in backyard', done: false},
    {id: 3, chores: 'Take out trash', done: false},
    {id: 4, chores: 'Do dishes', done: true},
    {id: 5, chores: 'cut the lawn', done: true},
    {id: 6, chores: 'vaccum', done: true},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteSkill,
    update
  };
	
  function update(id, updatedTodo) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }
  
  function deleteSkill(id) {
    id = parseInt(id);
    // Find the index for the todo
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }


  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }